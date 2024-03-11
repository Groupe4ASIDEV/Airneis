import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const baseUrl = process.env.REACT_APP_API_URL;

const ContactForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        title: '',
        description: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`${baseUrl}/message/create`, {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (response.ok) {
                const data = await response.json();
                alert("Message envoyé avec succès !");
                console.log(data);
                setFormData({
                    email: '',
                    title: '',
                    description: ''
                });
            } else {
                alert("Une erreur s'est produite lors de l'envoi du message.");
            }
        } catch (error) {
            console.error("Erreur lors de l'envoi du message :", error);
            alert("Une erreur s'est produite lors de l'envoi du message.");
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h3" gutterBottom>Contactez-nous</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    margin="normal"
                />
                <TextField
                    label="Titre"
                    variant="outlined"
                    fullWidth
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    margin="normal"
                />
                <TextField
                    label="Description"
                    variant="outlined"
                    fullWidth
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    multiline
                    rows={4}
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">Envoyer</Button>
            </form>
        </Container>
    );
};

export default ContactForm;