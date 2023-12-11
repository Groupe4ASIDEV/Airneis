import Carousel from '../components/Carousel';
import HighlightedCategories from '../components/HighlightedCategories';
import HighlightedProducts from '../components/HighlightedProducts';

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
            <HighlightedCategories />
            <div className="catchphrase">
                <p>Les highlanders du moment</p>
            </div>
            <HighlightedProducts />
        </div>
    );
}

export default Home;
