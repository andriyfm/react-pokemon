import { Link } from "react-router-dom";
import { Pokemon } from "../services/fetchPokemon";
import PokemonCard from "./PokemonCard";

interface PokemonListProps {
  isLoading: boolean;
  list: Pokemon[];
}

export default function PokemonList({ isLoading, list }: PokemonListProps) {
  if (isLoading)
    return <div className="text-white px-5 text-center">Loading...</div>;

  if (list.length === 0)
    return <div className="text-white px-5 text-center">Data not found</div>;

  return (
    <div className="flex flex-row gap-2 flex-wrap items-center justify-center">
      {list?.map((pokemon) => (
        <Link key={pokemon.name} to={`/detail/${pokemon.name}`}>
          <PokemonCard {...pokemon} />
        </Link>
      ))}
    </div>
  );
}
