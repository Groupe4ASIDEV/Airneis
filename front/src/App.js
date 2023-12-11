import Header from './components/Header';
import Index from './routes';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <Index />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default App;
