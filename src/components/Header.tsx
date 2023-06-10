import logo from "../assets/pokemon-logo.svg";

export default function Header() {
  return (
    <div className="bg-[#F5DB13] flex-row flex items-center justify-center py-4">
      <img src={logo} alt="Logo" className="h-12 w-auto object-cover" />
    </div>
  );
}
