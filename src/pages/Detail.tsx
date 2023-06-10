import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getPokemonByName from "../services/getPokemonByName";
import Layout from "../components/Layout";
import Badge from "../components/Badge";
import ProgressBar from "../components/ProgressBar";
import Box from "../components/Box";

interface Pokemon {
  name: string;
  image: string;
  types: string[];
  height: number;
  weight: number;
  abilities: {
    ability: { name: string; url: string };
  }[];
  stats: {
    base_stat: number;
    effort: number;
    stat: { name: string; url: string };
  }[];
  moves: {
    move: { name: string; url: string };
  }[];
  species: {
    name: string;
    url: string;
  };
  held_items: {
    item: { name: string; url: string };
  }[];
}

export default function Detail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    if (!id) return;
    const fetch = async () => {
      const result = await getPokemonByName(id);
      const image = result.sprites.other.dream_world.front_default;
      setPokemon({ ...result, image });
    };
    fetch();
  }, [id]);

  console.log(pokemon);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <Layout>
      <div className="container relative py-10 mx-auto space-y-5 text-white">
        {/* Backgrond image */}
        <div className="absolute inset-x-0 inset-y-0 overflow-hidden">
          <img
            src={pokemon.image}
            className="object-contain h-auto w-[1200px] bg-opacity-5 grayscale opacity-[0.03]"
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 gap-5 px-2 sm:grid-cols-2 sm:px-0">
          <div className="flex items-center justify-center">
            <img
              src={pokemon.image}
              className="object-contain h-auto w-[400px] sm:w-[512px]"
            />
          </div>

          <div className="flex flex-col w-full h-auto gap-5 p-5 divide-y rounded-md divide-dashed divide-slate-500">
            <div className="flex items-center justify-center gap-2 sm:justify-start">
              <h1 className="text-4xl font-bold text-center capitalize sm:text-left">
                {pokemon?.name ?? "-"}
              </h1>
              <Badge text={pokemon.species.name} isOutline />
            </div>

            <p className="pt-5 text-center text-slate-200 sm:text-left">
              Ut eu ex sunt dolore consequat ex excepteur nostrud ea ad
              consectetur nulla. Nostrud consequat do id duis officia. Laboris
              aute magna commodo laboris cillum nulla non velit pariatur duis
              laboris do. Ea eiusmod exercitation magna qui eu cupidatat cillum
              incididunt esse dolor amet voluptate nostrud. Eu minim quis ut
              minim. Proident amet ipsum qui occaecat dolore.
            </p>

            {/* Weight and Height */}
            <div className="flex justify-center gap-5 pt-5 sm:justify-start">
              <Box label="height" value={pokemon?.height ?? "-"} />
              <Box label="weight" value={pokemon?.weight ?? "-"} />
            </div>

            {/* Info */}
            <div className="flex flex-col items-center w-full h-auto gap-10 pt-5 sm:flex-row">
              <div className="text-center">
                <h3 className="mb-2 text-xl font-semibold capitalize sm:text-left">
                  types
                </h3>
                {pokemon.types.map((text) => (
                  <Badge key={text} text={text} />
                ))}
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-center capitalize sm:text-left">
                  abilities
                </h3>
                {pokemon?.abilities?.map((el) => (
                  <Badge key={el.ability.name} text={el.ability.name} />
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-col w-full h-auto gap-5 pt-5">
              <h3 className="text-xl font-semibold text-center capitalize sm:text-left">
                stats
              </h3>
              <div className="grid grid-flow-row grid-cols-3 gap-5">
                {pokemon.stats.map((el, i) => (
                  <ProgressBar
                    key={i}
                    label={el.stat.name}
                    progress={el.base_stat}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Moves*/}
        <div className="z-10 px-6 pt-5 mt-5 border-t border-dashed sm:mt-0 sm:px-0 border-slate-500">
          <h3 className="mb-5 text-xl font-semibold text-center capitalize sm:text-left">
            moves ({pokemon.moves.length})
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
            {pokemon.moves.map((el, i) => (
              <Badge key={i} text={el.move.name.replace("-", " ")} isOutline />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
