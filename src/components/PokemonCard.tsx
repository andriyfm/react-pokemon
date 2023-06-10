import { Pokemon } from "../services/fetchPokemon";
import Badge from "./Badge";

type PokemonCardProps = Pokemon;

/**
 * Component ini menampilkan data pokemon dengan menggunakan style tailwindcss
 * @param {Pokemon} pokemon - data pokemon
 */
export default function PokemonCard({ name, image, types }: PokemonCardProps) {
  return (
    <div className="flex flex-col relative overflow-hidden items-center justify-center w-64 h-64 gap-5 p-5 bg-slate-100 rounded-md hover:bg-[#F5DB13] transition-all ease-out duration-500 hover:scale-95">
      <div className="absolute inset-x-0 inset-y-0 z-0 flex items-center justify-center w-full h-full">
        <img
          src={image}
          alt={name}
          className="object-cover w-[300px] h-auto grayscale opacity-5"
        />
      </div>

      <img src={image} alt={name} className="z-10 w-32 h-32" />

      <div className="z-10 flex flex-col items-center justify-center w-full gap-2">
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
