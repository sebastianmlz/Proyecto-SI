<script>
    import Item from "./item.svelte"; // Importar el componente Item
    import { goto } from '$app/navigation'; // Importar la función para redirigir
    import { userStore } from '../../stores/userStore'; // Importar el store de usuario
    import { limpiarTutor } from "../../stores/tutorStore";
    import { onMount } from 'svelte'; // Importar onMount para gestionar suscripciones
    import Perfil from './Perfil.svelte';
    import Notificaciones from './Notificaciones.svelte';
	import MainPrincipal from "./mainPrincipal.svelte";
    import Citaciones from "./citaciones.svelte";
    import Mensajes from "./mensajes.svelte"; 

    let userInfo = {};

    // Suscribirse al store para obtener la información del usuario
    const unsubscribe = userStore.subscribe(value => {
        userInfo = value;
    });

    // Limpia la suscripción cuando el componente se destruye
    onMount(() => {
        return () => {
            unsubscribe();
        };
    });

    // Función para cerrar sesión
    const logout = () => {
        //Eliminar la información del store del usuario
        userStore.set({
            usuario_id: null,
            rol: null,
            accessToken: null,
            refreshToken: null
        });
        limpiarTutor(); //Eliminar informacion del store del tutor
        localStorage.removeItem('userInfo'); // Limpiar localStorage de usuario
        localStorage.removeItem('tutorInfo'); // Limpiar localStorage de tutor
        // Redirigir a la página de login
        goto('/');
    };

    let menuOpen = true;

    const toggleMenu = () => {
        menuOpen = !menuOpen;
    };

    let selectedOption = 'principal'; // Inicialmente selecciona la opción de "Perfil"
    const changeOption = (option) => {
        selectedOption = option; // Cambia la opción seleccionada
    };
</script>

<aside class="sidebar {menuOpen ? 'menu-open' : ''} bg-[--sidebar-color] fixed flex flex-col justify-between p-[30px_0_30px_6px] z-[100]">
    <form class="sidebar__form">
        <!-- Botón para abrir/cerrar el menú -->
        <button type="button" class="material-symbols-outlined bg-[--bg-color] text-[--sidebar-color] p-[0.4rem] border-none cursor-pointer absolute top-[6rem] right-[-25px] mb-[2rem]" on:click={toggleMenu}>
            {menuOpen ? 'menu' : 'menu_open'}
        </button>
    </form>
    <picture class="sidebar__picture ml-[1.5rem] relative z-10">
        <source srcset="/static/escudo.png" media="(max-width:57.5rem)">
        <img src="/static/escudo.png" class="m-auto opacity-[0.9]">
    </picture>
    <nav class="sidebar__nav flex flex-1">
        <ul class="flex flex-col justify-center w-[100%] p-0">
            <li class="sidebar__item flex align-middle uppercase text-[--sidebar-color] relative" on:click={() => changeOption('notificaciones')}>
                <span class="material-symbols-outlined">Notifications</span>
                <a href="#">Notificaciones</a>
            </li>
            <li class="sidebar__item flex align-middle uppercase text-[--sidebar-color] relative" on:click={() => changeOption('mensajes')}>
                <span class="material-symbols-outlined">Mail</span>
                <a href="#">Mensajes</a>
            </li>
            <!-- Puedes añadir más opciones aquí -->
            <li class="sidebar__item flex align-middle uppercase text-[--sidebar-color] relative" on:click={() => changeOption('citaciones')}>
                <span class="material-symbols-outlined">account_balance</span>
                <a href="#">Citaciones</a>
            </li>
            <li class="sidebar__item flex align-middle uppercase text-[--sidebar-color] relative" on:click={() => changeOption('ajustes')}>
                <span class="material-symbols-outlined">settings</span>
                <a href="#">Ajustes</a>
            </li>
        </ul>
    </nav>
    <div class="sidebar__profile">
        <ul class="p-0">
            <li class="sidebar__item item--profile w-fit text-[--text-color] flex align-middle uppercase text-[--sidebar-color] relative" on:click={() => changeOption('perfil')}>
                <img src="saul.png" class="w-[2rem] rounded-[50%]">
                <span class="profile-option">Perfil</span>
            </li>
            <li class="sidebar__item flex align-middle uppercase text-[--sidebar-color] relative" on:click={logout}>
                <span class="material-symbols-outlined">logout</span>
                <a href="#">Salir</a> <!-- Llama a la función logout -->
            </li>
        </ul>
    </div>
</aside>

<main class="main opacity-80 w-[calc(100%-5rem)] text-white ml-20 relative bg-cover bg-center h-screen">
    <!-- Mostrar contenido dinámico basado en la opción seleccionada -->
    {#if selectedOption === 'principal'}
        <MainPrincipal/> <!-- Componente Principal -->
    {:else if selectedOption === 'perfil'}
        <Perfil {userInfo} /> <!-- Componente Perfil -->
    {:else if selectedOption === 'notificaciones'}
        <Notificaciones /> <!-- Componente Notificaciones -->
    {:else if selectedOption === 'mensajes'}
        <!-- Aquí puedes agregar el componente Mensajes -->
        <Mensajes />
    {:else if selectedOption === 'citaciones'}
        <!-- Aquí puedes agregar el componente Citaciones -->
        <Citaciones />
    {:else if selectedOption === 'ajustes'}
        <!-- Aquí puedes agregar el componente Ajustes -->
        <!-- <Ajustes /> -->
    {/if}
</main>


<style>
    /* Puedes mantener tus estilos actuales o ajustarlos según sea necesario */

    * {
        box-sizing: border-box;
    }

    div, ul, li, a, h2, h1 {
        margin: 0;
    }

    :root, .sidebar__nav {
        user-select: none;
    }

    .opacar {
        opacity: 0.9;
        transition: opacity 0.3s ease;
    }

    .sidebar {
        height: 100%;
        width: clamp(200px, 230px, 250px);
        font-size: clamp(1rem, 2.5vw, 3rem);
        transition: width 0.5s ease;
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
    }

    /* Cuando el menú está abierto */
    .sidebar.menu-open {
        width: 4.5rem;
        transition: width 0.5s ease;
    }

    .sidebar__form button {
        font-size: 2rem;
        border-radius: 50%;
        transition: background-color 0.4s, color 0.4s;
    }

    /* Estilos adicionales, como efectos al hover del botón */
    .sidebar__form button:hover {
        background-color: var(--sidebar-color);
        color: var(--bg-color);
    }


    .sidebar__item {
        list-style: none;
        align-items: center;
        font-size: .9rem;
        padding-right: 6px;
        color: var(--bg-color);
        border-radius: 36px 0 0 36px;
        transition: background-position 0.6s ease, color 0.6s ease; /* Transición suave */
    }

    .sidebar__item a {
        color: inherit;
        text-decoration: none;
    }

    .sidebar__item span {
        padding: 12px;
        font-size: 2rem;
    }

    .sidebar__item:hover {
        background-color: var(--bg-color);
        color: var(--sidebar-color);
        background: linear-gradient(to left, var(--bg-color) 50%, var(--sidebar-color) 50%);
        background-size: 200% 100%; /* Doble ancho */
        background-position: right; /* Inicia con el fondo movido hacia la derecha */
    }

    .sidebar__item::before,
    .sidebar__item::after {
        content: '';
        background-color: var(--bg-color);
        position: absolute;
        right: 0;
        width: 18px;
        height: 18px;
        background-color: transparent;
        transition: border-radius 1s, box-shadow 1s ease;
    }

    .sidebar__item:hover::before {
        top: -18px;
        border-bottom-right-radius: 25px;
        box-shadow: 4px 4px 0px 4px var(--bg-color);
    }

    .sidebar__item:hover::after {
        bottom: -18px;
        border-top-right-radius: 25px;
        box-shadow: 4px -4px 0px 4px var(--bg-color);
    }

    /* Estilos de la imagen del sidebar */

    .sidebar__picture img {
        width: clamp(4rem, 75%, 20rem);
        transition: width 0.5s ease;
    }

    /* Estilos del perfil en el sidebar */

    .item--profile .profile-option {
        font-size: .8rem;
        padding: 0 12px 0 9px;
        color: inherit;
    }

    .item--profile {
        margin: 12px;
        width: fit-content;
        /* color: var(--text-color); */
    }

    .item--profile:hover {
        border-radius: 25px;
        color: var(--sidebar-color);
    }

    .item--profile:hover img {
        opacity: .7;
    }

    .item--profile::before,
    .item--profile::after {
        display: none;
    }

    /* Modificación para cuando el menú está abierto */

    .sidebar.menu-open .sidebar__picture img {
        width: 3.4rem;
    }

    .sidebar.menu-open .sidebar__picture {
        margin-left: 0;
    }

    .sidebar.menu-open picture {
        width: fit-content;
        margin-left: .75rem;
    }

    .sidebar.menu-open .sidebar__item a,
    .sidebar.menu-open .profile-option {
        display: none;
    }

    .sidebar.menu-open .sidebar__form {
        top: 4.8rem;
        width: fit-content;
    }

    @media (max-width: 900px) {
        .main h1 {
            padding-top: 15rem;
        }
    }
</style>

