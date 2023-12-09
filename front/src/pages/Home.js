import Carousel from '../components/Carousel';

function Home() {
    return (
        <div id="home">
            <Carousel />
            <div className="catchphrase">
                <p>
                    Venant des Hautes Terres d'Ecosse
                    <br />
                    Nos meubles sont immortels
                </p>
            </div>
            <div>
                <p>3 highlighted categories</p>
            </div>
            <div className="catchphrase">
                <p>
                    Les highlanders du moment
                </p>
                <p>highlighted products</p>
            </div>
        </div>
    );
}

export default Home;
