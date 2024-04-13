import SearchBar from "../Home/components/SearchBar";
import ProductCard from "./components/ProductCard/ProductCard";
import RecentlySearched from "./components/RecentlySearched/RecentlySearched";
import '../Home/Home.css';
import MyListCard from "./components/ListCard/ListCard";
export default function Home() {
  return (
    <div>
      <SearchBar />
      <div className="parent-container">   
        <RecentlySearched/>
        <ProductCard/>
      </div>
      <MyListCard/>
    </div>
  );
}