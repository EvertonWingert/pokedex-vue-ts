import { ref } from "vue";

export const usePagination = () => {
	const page = ref(1);

	function nextPage() {
		page.value++;
	}

	function prevPage() {
		if (page.value === 1) return;
		page.value--;
	}

	return {
		page,
		nextPage,
		prevPage,
	};
};
