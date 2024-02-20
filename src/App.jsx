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
      setCart(element => {
        const cartIndex = element.findIndex((item) => item.name === article.name);
        if (cartIndex !== -1) {
          return element.map((item, index) =>
            index === cartIndex ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          return [...element, { ...article, quantity: 1 }];
        }
      });
      setArticles(articles.map(element => 
        element.name === article.name ? { ...element, stock: stockAsNumber - 1 } : element
      ));
    } 
  };

  const handleRemove = (index) => {
    setCart(element => element.filter((item, i) => i !== index));
  };
  
    

  return (
    <section>
      <div>
        <Navbar cart={cart} solde={solde} onRemove={handleRemove} />
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
