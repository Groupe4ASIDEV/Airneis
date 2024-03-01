import { useState } from 'react';
import { Container } from '@mui/material';
import Index from './routes';
import Header from './components/Header/Header';
import BasicMenu from './components/Header/Menu';
import Footer from './components/Footer';

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
