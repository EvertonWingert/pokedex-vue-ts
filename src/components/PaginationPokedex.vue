<script setup lang="ts">
	import { watch } from "vue";
	import { usePagination } from "../composables/usePagination";

	const emit = defineEmits(["changePage"]);
	const { page, nextPage, prevPage } = usePagination();

	watch(page, () => {
		emit("changePage", page.value);
	});
</script>
<template>
	<div class="buttons">
		<button class="button btn-prev" @click="prevPage">&lt; Anterior</button>
		<button class="button btn-next" @click="nextPage">Próximo &gt;</button>
	</div>
</template>
<style scoped>
	.buttons {
		position: absolute;
		bottom: 10%;
		left: 50%;
		width: 65%;
		transform: translate(-57%, 0);
		display: flex;
		gap: 20px;
	}

	.button {
		width: 50%;
		padding: 4%;
		border: 2px solid #000;
		border-radius: 5px;
		font-size: clamp(8px, 5vw, 1rem);
		font-weight: 600;
		color: white;
		background-color: #444;
		box-shadow: -2px 3px 0 #222, -4px 6px 0 #000;
	}

	.button:active {
		box-shadow: inset -4px 4px 0 #222;
		font-size: 0.9rem;
	}
</style>
