import { Link } from "react-router-dom";
import logo from "../assets/pokemon-logo.svg";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="bg-[#F5DB13] sm:flex-row flex items-center justify-between py-4 px-5 flex-col gap-5">
      <Link to="/">
        <img src={logo} alt="Logo" className="object-cover w-auto h-12" />
      </Link>

      <SearchBar />
    </header>
  );
}
