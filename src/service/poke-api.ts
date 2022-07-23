export const fetchPokemon = async (pokemon: string | number) => {
	const response = await fetch(`${import.meta.env.VITE_BASE_URL}${pokemon}`);

	if (response.status === 200) {
		const data = await response.json();
		return data;
	}
};
