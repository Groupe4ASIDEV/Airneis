import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

function BackButton() {
    const history = useHistory();

    const handleGoBack = () => {
        history.goBack();
    };

    return (
        <Button variant="contained" onClick={handleGoBack}>
            Retour

        </Button>
    );
}

export default BackButton;