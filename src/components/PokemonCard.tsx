import { Pokemon } from "../services/fetchPokemon";

type PokemonCardProps = Pokemon;

/**
 * Component ini menampilkan data pokemon dengan menggunakan style tailwindcss
 * @param {Pokemon} pokemon - data pokemon
 */
export default function PokemonCard({ name, image, types }: PokemonCardProps) {
  return (
    <div className="flex flex-col items-center justify-center w-64 h-64 bg-white rounded-md shadow-lg p-5 gap-5">
      <img src={image} alt={name} className="w-32 h-32" />

      <div className="flex flex-col items-center justify-center w-full gap-2">
        <h1 className="text-lg font-bold text-gray-800 capitalize">{name}</h1>

        <div className="flex flex-row items-center justify-center w-full">
          {types?.map((type, index) => (
            <span
              key={index}
              className="px-2.5 py-1 mx-1 text-[10px] font-semibold uppercase text-gray-500 bg-gray-200 rounded-full"
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
