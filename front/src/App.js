import { Container } from '@mui/material';
import Index from './routes';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Header />
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
