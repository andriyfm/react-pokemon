import { Pokemon } from "../services/fetchPokemon";
import Badge from "./Badge";

type PokemonCardProps = Pokemon;

/**
 * Component ini menampilkan data pokemon dengan menggunakan style tailwindcss
 * @param {Pokemon} pokemon - data pokemon
 */
export default function PokemonCard({ name, image, types }: PokemonCardProps) {
  return (
    <div className="flex flex-col items-center justify-center w-64 h-64 gap-5 p-5 bg-white rounded-md shadow-lg">
      <img src={image} alt={name} className="w-32 h-32" />

      <div className="flex flex-col items-center justify-center w-full gap-2">
        <h1 className="text-lg font-bold text-gray-800 capitalize">{name}</h1>

        <div className="flex flex-row items-center justify-center w-full">
          {types?.map((text, index) => (
            <Badge key={index} text={text}></Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
