import { useState, useEffect } from "react";
import { debounce } from "lodash";
import getPokemonByName from "../services/getPokemonByName";

export const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const debouncedSearch = debounce(search, 3000);

  useEffect(() => {
    debouncedSearch();
    return () => {
      debouncedSearch.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  async function search() {
    try {
      const response = await getPokemonByName(searchTerm);
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error("Terjadi kesalahan dalam pencarian:", error);
    }
  }

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  return {
    searchTerm,
    searchResults,
    handleSearchChange,
  };
};
