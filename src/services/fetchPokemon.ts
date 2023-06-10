/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "../utils/axiosInstance";

export interface Pokemon {
  name: string;
  url: string;
  image: string;
  types: string[];
}

interface PokemonResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

export interface FetchPokemonResult {
  pokemonList: Pokemon[];
  totalPage: number;
}

/**
 * Mengambil data pokemon
 * @param page
 * @param size
 * @returns
 */
export async function fetchPokemon(
  page: number,
  size: number
): Promise<FetchPokemonResult> {
  try {
    const response = await axios.get<PokemonResponse>(`/pokemon`, {
      params: {
        offset: (page - 1) * size,
        limit: size,
      },
    });

    const totalPage = Math.ceil(response.data.count / size);
    const pokemonList = await Promise.all(
      response.data.results.map(async (pokemon) => {
        const pokemonResponse = await axios.get(pokemon.url);
        const image =
          pokemonResponse.data.sprites.other.dream_world.front_default;
        const types = pokemonResponse.data.types.map((el: any) => el.type.name);
        return { ...pokemon, image, types };
      })
    );

    return { pokemonList, totalPage };
  } catch (error) {
    throw new Error("Failed to fetch Pokemon data");
  }
}
