import React, {useContext, useState} from 'react';
import { Typography, TextField, Button } from '@mui/material';
import {UidContext} from "./Authentication/UserContext";


const UserSettings = () => {
    const { userId } = useContext(UidContext);
    const [userData, setUserData] = useState({
        fullName: '',
        email: '',
        password: '',
        phone: '',
        validated: false,
        defaultAddress: ''
    });

    console.log(userData);


    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`/user/update/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                alert('Paramètres du compte utilisateur mis à jour avec succès !');
            } else {
                const errorData = await response.json();
                alert(`Une erreur s'est produite : ${errorData.message}`);
            }
        } catch (error) {
            console.error("Erreur lors de la mise à jour des paramètres du compte utilisateur :", error);
            alert("Une petite erreur s'est produite lors de la mise à jour des paramètres du compte utilisateur.");
        }
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom>Paramètres du compte utilisateur</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Nom complet"
                    variant="outlined"
                    fullWidth
                    name="fullName"
                    value={userData.fullName}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    label="Mot de passe"
                    variant="outlined"
                    fullWidth
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    label="Téléphone"
                    variant="outlined"
                    fullWidth
                    name="phone"
                    value={userData.phone}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    label="Adresse par défaut"
                    variant="outlined"
                    fullWidth
                    name="defaultAddress"
                    value={userData.defaultAddress}
                    onChange={handleChange}
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">Enregistrer</Button>
            </form>
        </div>
    );
};

export default UserSettings;