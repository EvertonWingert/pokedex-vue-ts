<script setup lang="ts">
	import { PokemonEntity } from "../entity/Pokemon";

	interface PokemonItemProps {
		pokemon: PokemonEntity | null;
	}

	defineProps<PokemonItemProps>();
</script>

<template>
	<div v-if="pokemon">
		<img :src="pokemon.image" :alt="`Image do pokemon ${pokemon.name}`" class="pokemon-image" />
		<h1 class="pokemon-data">
			<span class="pokemon-number">
				{{ pokemon.id }}
			</span>
			-
			<span class="pokemon-name">
				{{ pokemon.name }}
			</span>
		</h1>
	</div>
</template>
<style scoped>
	.pokemon-image {
		position: absolute;
		bottom: 55%;
		left: 50%;
		transform: translate(-63%, 20%);
		height: 18%;
	}
	.pokemon-data {
		position: absolute;
		font-weight: 600;
		color: #aaa;
		top: 54.5%;
		right: 27%;
		font-size: clamp(8px, 5vw, 25px);
	}

	.pokemon-name {
		color: #3a444d;
		text-transform: capitalize;
	}
</style>
