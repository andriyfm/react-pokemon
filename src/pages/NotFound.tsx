import { useNavigate } from "react-router-dom";
import notfoundimage from "../assets/not-found.png";
import Button from "../components/Button";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen text-white">
      <img
        src={notfoundimage}
        alt="Logo"
        className="object-cover w-auto h-80"
      />
      <h2 className="text-xl">Page Not Found</h2>
      <p className="text-slate-400">The requested page does not exist.</p>
      <Button className="mt-5" onClick={() => navigate("/")}>
        Back to Home
      </Button>
    </div>
  );
}
