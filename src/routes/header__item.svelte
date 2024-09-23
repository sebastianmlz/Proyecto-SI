<script>
	// Props: texto del ítem y clases adicionales opcionales
	export let text;
	export let additionalClasses = '';
</script>

<li class={`px-5 py-3 text-lg rounded-2xl hover:bg-yellow-400 hover:text-blue-700 transition-colors ${additionalClasses}`}>
	{text}
</li>

<style>
	li {
		border: 2px solid var(--sidebar-color);
	}
</style>


