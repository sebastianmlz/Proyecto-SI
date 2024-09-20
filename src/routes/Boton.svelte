<script>
	// Props: texto del botón, clases adicionales y función para manejar el clic
	export let text;
	export let additionalClasses = '';
	export let onClick; // Recibe la función para abrir el modal

	// Función para manejar el clic del botón
	const handleClick = () => {
		if (onClick) {
			onClick(); // Ejecuta la función pasada como prop
		}
	};
</script>


<li>
	<button type="button" on:click={handleClick} class={`px-5 py-3 f border-2 border-white rounded-2xl hover:bg-white hover:text-blue-700 transition-colors ${additionalClasses}`}>
	{text}</button>
</li>