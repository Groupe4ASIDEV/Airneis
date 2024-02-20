import { useState } from 'react';
import { Container } from '@mui/material';
import Index from './routes';
import Header from './components/header/Header';
import Footer from './components/Footer';
import BasicMenu from './components/header/Menu';

function App() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Header onMenuIconClick={handleMenuOpen} />
            <BasicMenu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            />
            <main>
                <Container>
                    <Index />
                </Container>
            </main>
            <Footer />
        </>
    );
}

export default App;
