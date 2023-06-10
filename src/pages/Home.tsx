import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";
import PokemonList from "../components/PokemonList";
import { Pokemon, fetchPokemon } from "../services/fetchPokemon";

const totalPages = 18;

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [list, setList] = useState<Pokemon[]>([]);
  const [currentPage, setcurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const pokemons = await fetchPokemon(currentPage, 18);
        setList(pokemons.pokemonList);
      } catch (error) {
        setList([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  const handleOnPageChange = (page: number) => {
    setcurrentPage(page);
  };

  return (
    <Layout>
      <div className="container flex items-center justify-between mx-auto">
        {/* <SearchBar value={searchTerm} onChange={handleSearchChange} /> */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handleOnPageChange}
        />
      </div>
      <PokemonList list={list} isLoading={isLoading} />
    </Layout>
  );
}
