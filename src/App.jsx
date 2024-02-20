import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import ShopCards from "./components/ShopCards/ShopCards";

export default function App() {
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div className="md:hidden">
        <SearchBar />
      </div>
      <div>
        <Cards />
      </div>
    </section>
  );
}
