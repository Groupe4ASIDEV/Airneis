import { useNavigate, } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function BackButton() {
    const navigate = useNavigate();

    function BackButton() {

        return (
            <Button onClick={() => navigate(-1)}>Retour</Button>
        );
    }
}
