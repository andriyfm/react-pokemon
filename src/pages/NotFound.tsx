import { Link } from "react-router-dom";
import notfoundimage from "../assets/not-found.png";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center text-white">
      <img
        src={notfoundimage}
        alt="Logo"
        className="h-80 w-auto object-cover"
      />
      <h2 className="text-xl">Page Not Found</h2>
      <p className="text-slate-400">The requested page does not exist.</p>
      <Link
        to="/"
        className="bg-[#F5DB13] text-slate-800 text-sm rounded-sm font-semibold px-3 py-1 mt-5"
      >
        Back to Home
      </Link>
    </div>
  );
}
