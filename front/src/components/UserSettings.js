import React, { useContext, useState } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { UidContext } from './Authentication/UserContext';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

const UserSettings = () => {
    const { userData } = useContext(UidContext);
    console.log('🚀 ~ UserSettings ~ userId:', userData._id);
    const [userDatas, setUserDatas] = useState({
        fullName: '',
        email: '',
        password: '',
        phone: '',
        validated: false,
        defaultAddress: '',
    });

    console.log(userDatas);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserDatas({ ...userDatas, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(
                `${baseUrl}/user/update/${userData._id}`,
                {
                    fullName: userDatas.fullName,
                    email: userDatas.email,
                    password: userDatas.password,
                    phone: userDatas.phone,
                    defaultAddress: userDatas.defaultAddress,
                }
            );
            console.log('🚀 ~ UserSettings ~ response:', response.data.data);
            return response.data.data;
        } catch (error) {
            console.error(
                'Erreur lors de la mise à jour des paramètres du compte utilisateur :',
                error
            );
            alert(
                "Une erreur s'est produite lors de la mise à jour des paramètres du compte utilisateur."
            );
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