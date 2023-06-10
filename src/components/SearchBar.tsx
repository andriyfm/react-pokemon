import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/detail/" + searchValue);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="rounded-lg flex items-center justify-between w-full sm:w-[500px] gap-5 px-5 pr-2 bg-white h-[50px] border-[1px]">
      <input
        type="text"
        placeholder="Search exp: pikachu"
        className="w-full active:border-yellow-400 focus:border-yellow-400 focus:outline-none"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleEnter}
      />
      <Button
        className="bg-[#F5DB13] px-4 py-2 rounded-md text-sm hover:bg-[#F2B807] transition-colors"
        onClick={handleSubmit}
      >
        Search
      </Button>
    </div>
  );
}
