<script>
	// Props: texto del ítem y clases adicionales opcionales
	export let text;
	export let additionalClasses = '';
</script>

<li class={`px-4 py-2 border-2 border-white rounded-2xl hover:bg-white hover:text-blue-700 transition-colors ${additionalClasses}`}>
	{text}
</li>
