<script setup lang="ts">
	import { onMounted, ref } from "vue";
	import FormPokedex from "../components/FormPokedex.vue";
	import PaginationPokedex from "../components/PaginationPokedex.vue";

	import { fetchPokemon } from "../service/poke-api";
	import PokemonItem from "../components/PokemonItem.vue";
	import { PokemonEntity } from "../entity/Pokemon";

	const pokemon = ref<PokemonEntity | null>(null);

	const searchPokemon = async (nameOrNumber: string | number) => {
		const response = await fetchPokemon(nameOrNumber);
		pokemon.value = {
			name: response.name,
			id: response.id,
			image: response["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"],
		};
	};

	onMounted(() => {
		searchPokemon(1);
	});
</script>
<template>
	<div class="pokedex-container">
		<PokemonItem :pokemon="pokemon" />
		<FormPokedex @submit="searchPokemon" />
		<PaginationPokedex @change-page="searchPokemon" />

		<img src="../assets/pokedex.png" alt="pokedex" class="pokedex" />
	</div>
</template>
<style scoped>
	.pokedex {
		width: 100%;
		max-width: 425px;
	}
	.pokedex-container {
		display: inline-block;
		margin-top: 2%;
		padding: 15px;
		position: relative;
	}
</style>
