<script>
	// Importar los componentes
	import HeaderItem from "./header__item.svelte";
	import Boton from "./Boton.svelte";
	import Modal from "./modal.svelte";
	
	// Controlar si el modal está abierto o cerrado
	let showModal = false;

	// Función para abrir el modal
	const openModal = () => {
		showModal = true;
	};

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>


<header class=" text-yellow-300">
	<div class="w-full h-25 flex justify-between items-center">
		<!-- Sección izquierda con imagen -->
		<div class="ml-4">
			<img src="/escudo.png" alt="Escudo" class="w-16 h-14">
		</div>
		<!-- Sección derecha con links -->
		<ul class="flex space-x-6 mr-6 list-none">
			<HeaderItem text="Acerca de nosotros" />
			<HeaderItem text="Contactanos" />
			<Boton onClick={openModal} text="Ingresar" additionalClasses="bg-yellow-300 text-blue-700 hover:border-black hover:bg-white text-lg" />
		</ul>
	</div>

</header>

<!-- El contenido del modal -->
<Modal bind:showModal={showModal} />

<main class="{showModal ? 'opacar' : ''} relative bg-cover bg-center h-screen" style="background-image: url('/static/colegio.jpeg')">
	<div class="absolute inset-0 bg-black opacity-50"></div> <!-- Capa negra con opacidad -->
	<h1 class="relative z-10 text-white text-center text-pretty text-7xl p-16 m-0 pt-60 titulo-Animacion">Bienvenido a la web de control del colegio Cristo Rey  </h1>
	<p class="text-white font-bold text-center text-3xl titulo-Animacion">Inicia sesion para ingresar</p>
</main>

<footer class=" bg-yellow-400 text-center py-3 ">
	<h2 class="text-blue-800">CONTACTATE CON NOSOTROS</h2>
	<ul class="text-xl">
		<li> <span class="text-blue-800">Telefono:</span> 75382720</li>
		<li><span class="text-blue-800">Correo:</span> sebamendex11@gmail.com</li>
	</ul>
</footer>

<style>
	/* Clase para aplicar opacidad */
	.opacar {
		opacity: 0.9;
		transition: opacity 0.3s ease;
	}

	@keyframes tituloAnimacion {
		0% {
			transform: translateY(30%);
			opacity: 0;
		}

		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}

	.titulo-Animacion {
		animation: tituloAnimacion 0.9s ease forwards  
	}

</style>


