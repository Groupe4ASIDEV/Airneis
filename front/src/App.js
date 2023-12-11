import Header from './components/Header';
import Index from './routes';

function App() {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <Index />
                </div>
            </main>
        </>
    );
}

export default App;
