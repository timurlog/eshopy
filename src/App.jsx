import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import ShopCards from "./components/ShopCards/ShopCards";
import data from './assets/json/eshopy.json'

export default function App() {
  const [solde, setSolde] = useState(54329)

  const [cart, setCart] = useState([]);
  const [articles, setArticles] = useState(data.articles);


  const handleBuy = (article) => {
    const priceAsNumber = parseFloat(article.price.replace('US$', ''));
    const stockAsNumber = parseInt(article.stock, 10);
  
    if (solde >= priceAsNumber && stockAsNumber > 0) {
      setSolde(solde - priceAsNumber);
      setCart([...cart, { ...article, price: priceAsNumber, stock: stockAsNumber }]);
      setArticles(articles.map(element => 
        element.name === article.name ? { ...element, stock: stockAsNumber - 1 } : element
      ));
    }
  };
    

  return (
    <section>
      <div>
        <Navbar cart={cart} solde={solde} />
      </div>
      <div className="md:hidden">
        <SearchBar />
      </div>
      <div className="flex justify-center">
        <ShopCards articles={articles} onBuy={handleBuy} solde={solde}/>
      </div>
    </section>
  );
}
