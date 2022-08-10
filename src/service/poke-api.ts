let cache = new Map<string | number, any>();

export const fetchPokemon = async (pokemon: string | number) => {
	if (cache.has(pokemon)) return cache.get(pokemon);

	const response = await fetch(`${import.meta.env.VITE_POKE_URL}${pokemon}`);

	if (response.status === 200) {
		const data = await response.json();
		cache.set(pokemon, data);
		return data;
	}
};
