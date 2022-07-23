<script setup lang="ts">
	const emit = defineEmits(["submit"]);

	const submit = (event: Event) => {
		const target = event.target as HTMLFormElement;

		const form = new FormData(target);
		const name = form.get("pokemon-name")?.toString().toLocaleLowerCase();

		emit("submit", name);
		target.reset();
	};
</script>
<template>
	<form class="form" @submit.prevent="submit">
		<input
			id="pokemon-name"
			name="pokemon-name"
			type="search"
			class="input-search"
			placeholder="Nome ou número do pokemon"
			required
		/>
	</form>
</template>
<style scoped>
	.form {
		position: absolute;
		width: 65%;
		top: 65%;
		left: 13.5%;
	}

	.input-search {
		width: 100%;
		padding: 4%;
		outline: none;
		border: 2px solid #333;
		border-radius: 5px;
		font-weight: 600;
		color: #d30a40;
		font-size: clamp(8px, 5vw, 1rem);
		box-shadow: -3px 4px 0 #888, -5px 7px 0 #333;
	}
</style>
