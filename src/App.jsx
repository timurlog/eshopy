import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import ShopCards from "./components/ShopCards/ShopCards";

export default function App() {
  const [solde, setSolde] = useState(54329)

  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div className="md:hidden">
        <SearchBar />
      </div>
      <div className="flex justify-center">
        <ShopCards solde={solde}/>
      </div>
    </section>
  );
}
