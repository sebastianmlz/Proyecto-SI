<script>
	// Importar el componente HeaderItem
	import HeaderItem from "./header__item.svelte";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<header class="bg-blue-800 text-white">
	<div class="w-full h-20 flex justify-between items-center">
		<!-- Sección izquierda con imagen -->
		<div class="ml-4">
			<img src="/escudo.png" alt="Escudo" class="w-16 h-14">
		</div>
		<!-- Sección derecha con links -->
		<ul class="flex space-x-6 mr-6">
			<HeaderItem text="Acerca de nosotros" />
			<HeaderItem text="Contactanos" />
			<HeaderItem text="Ingresar" additionalClasses="bg-white text-blue-700 hover:border-black hover:bg-white" />
		</ul>
	</div>

</header>

<main>
	<!-- Contenido del main -->
</main>

