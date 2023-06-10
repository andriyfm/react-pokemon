/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Mengambil data pokemen berdasarkan nama
 * @param name
 * @returns
 */
export default function getPokemonByName(name: string) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
    .then((data) => {
      const image = data.sprites.other.dream_world.front_default;
      const types = data.types.map((el: any) => el.type.name);
      return { ...data, image, types };
    });
}
