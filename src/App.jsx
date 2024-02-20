import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";

export default function App() {
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div className="md:hidden">
        <SearchBar />
      </div>
    </section>
  );
}
