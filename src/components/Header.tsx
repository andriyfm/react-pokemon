import { Link } from "react-router-dom";
import logo from "../assets/pokemon-logo.svg";

export default function Header() {
  return (
    <Link to="/">
      <div className="bg-[#F5DB13] flex-row flex items-center justify-center py-4">
        <img src={logo} alt="Logo" className="object-cover w-auto h-12" />
      </div>
    </Link>
  );
}
