<script>
    import Item from "./item.svelte";
    import { goto } from '$app/navigation'; // Importar la función para redirigir
    import { userStore } from '../../stores/userStore'; // Importar el store de usuario
    import { limpiarProfesor } from "../../stores/profesorStore";
    import { onDestroy,onMount } from 'svelte'; // Importar onMount para gestionar suscripciones
    import Mensajes from "./mensajes.svelte";
    import Notificacion from "./Notificacion.svelte";
    import Citaciones from "./citaciones.svelte";
	import Reporte from "./reporte.svelte";
    import Asistencia from "./asistencia.svelte";
    import Perfil from "./perfil.svelte";
    import { createEventDispatcher } from "svelte";

    // Puedes crear e importar más componentes como Mensajes, Citaciones, Ajustes, etc.

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
    const dispatch = createEventDispatcher();
    const logout = () => {
        // Eliminar la información del store
        userStore.set({
            usuario_id: null,
            rol: null,
            accessToken: null,
            refreshToken: null
        });
        limpiarProfesor();
        dispatch('logout');
        localStorage.removeItem('userInfo'); // Limpiar localStorage de usuario
        localStorage.removeItem('profesorInfo'); //limpia localStorage de profesor
        // Redirigir a la página de login
        goto('/');
    };

    let menuopen=true;  

    const toggleMenu=() =>{
        menuopen=!menuopen
    }

    let selectedOption = 'principal'; // Inicialmente selecciona la opción de "Perfil"
    const changeOption = (option) => {
        selectedOption = option; // Cambia la opción seleccionada
    };
</script>

<aside class="sidebar {menuopen ? 'menu-open' : ''}">
    <form class="sidebar__form">
        <!-- Botón para abrir/cerrar el menú -->
        <button type="button" class="material-symbols-outlined" on:click={toggleMenu}>
            {menuopen ? 'menu' : 'menu_open'}
        </button>
    </form>
    <picture class="sidebar__picture">
        <source srcset="/static/escudo.png" media="(max-width:57.5rem)">
        <img src="/static/escudo.png">
    </picture>
    <nav class="sidebar__nav">
        <ul>
            <li class="sidebar__item" on:click={()=>changeOption('notificaciones')}>
                <span class="material-symbols-outlined">notifications</span>
                <a href="#">Notificaciones</a>
            </li>
            <li class="sidebar__item" on:click={()=>changeOption('mensajes')}>
                <span class="material-symbols-outlined">mail</span>
                <a href="#">Mensajes</a>
            </li>
            <li class="sidebar__item" on:click={()=>changeOption('citaciones')}>
                <span class="material-symbols-outlined">account_balance</span>
                <a href="#">Citaciones</a>
            </li>
            <li class="sidebar__item" on:click={()=>changeOption('ajustes')}>
                <span class="material-symbols-outlined">settings</span>
                <a href="#">Ajustes</a>
            </li>
            <li class="sidebar__item" on:click={()=>changeOption('reporte')}>
                <span class="material-symbols-outlined">problem</span>
                <a href="#">Reporte</a>
            </li>
            <li class="sidebar__item" on:click={()=>changeOption('asistencia')}>
                <span class="material-symbols-outlined">person</span>
                <a href="#">Asistencia</a>
            </li>
        </ul>
    </nav>      

    <div class="sidebar__profile">
        <ul class="p-0">
            <li class="sidebar__item item--profile" on:click={()=>changeOption('perfil')}>
            <li class="sidebar__item item--profile" on:click={()=>changeOption('perfil')}>
                <img src="saul.png">
                <span class="profile-option">Perfil</span>
            </li>
            <li class="sidebar__item" on:click={logout}>
                <span class="material-symbols-outlined">logout</span>
                <a href="#">Salir</a>
            </li>
        </ul>
    </div>
</aside>

<main class="main opacity-80 w-[calc(100%-5rem)] text-white ml-20 relative bg-cover bg-center h-screen">
    <!-- Mostrar contenido dinámico basado en la opción seleccionada -->
    {#if selectedOption === 'mensajes'}
        <!-- Aquí puedes agregar el componente Mensajes -->
        <Mensajes />
    {:else if selectedOption ==='notificaciones'}
        <Notificacion />
    {:else if selectedOption === 'citaciones'}    
        <Citaciones />
    {:else if selectedOption === 'reporte'}
        <Reporte />
    {:else if selectedOption === 'asistencia'}
        <Asistencia />
    {:else if selectedOption === 'perfil'}
        <Perfil {userInfo}/>
    {/if}
</main>

<style>

    .sidebar {
        background-color: var(--sidebar-color);
        position: fixed;
        height: 100dvh;
        width:clamp(200px,230px,250px);
        font-size: clamp(1rem, 2.5vw, 3rem);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 30px 0 30px 6px;
        transition: width 0.5s ease;
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
        z-index: 100;
    }

    /* Cuando el menú está abierto */
    .sidebar.menu-open {
        width: 4.5rem;
        transition: width 0.5s ease;
    }


    .sidebar__form button {
        background-color: var(--bg-color);
        color: var(--sidebar-color);
        font-size: 2rem;
        border-radius: 50%;
        padding: .4rem;
        border: none;
        cursor: pointer;
        position: absolute;
        top: 6rem;
        right: -25px;
        margin-bottom: 2rem;
        transition: background-color 0.4s, color 0.4s;
    }

    /* Estilos adicionales, como efectos al hover del botón */
    .sidebar__form button:hover {
        background-color: var(--sidebar-color);
        color: var(--bg-color);
    }

    .sidebar__nav {
        flex: 1;
        display: flex;
    }

    .sidebar__nav ul{
        display: flex;
        flex-direction: column;
        justify-content:center;
        width: 100%;
        padding: 0;
    }

    .sidebar__item {
        list-style: none;
        display: flex;
        align-items: center;
        text-transform: uppercase;
        color: var(--sidebar-color);
        font-size: .9rem;
        padding-right: 6px;
        color: var(--bg-color);
        border-radius: 36px 0 0 36px;
        position: relative;
        transition: background-position 0.6s ease, color 0.6s ease; /* Transición suave */
}

    .sidebar__item a {
        color: inherit;
        text-decoration: none;
        /* font-size: clamp(0.5rem, 0.7rem, 1rem); */
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
        background-position: right ; /* Inicia con el fondo movido hacia la derecha */

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

    /*sidebar picture styles*/

    .sidebar__picture {
        margin-left: 1.5rem;
        position: relative;
        z-index: 10;
    }

    .sidebar__picture img {
        width: clamp(4rem, 75%, 20rem);
        margin: auto;
        opacity: .9;
        transition: width 0.5s ease;
        /* filter: hue-rotate(-22deg); */
    }

    /*sidebar profile menu styles*/

    .sidebar__profile img {
        border-radius: 50%;
        width: 2rem;
    }

    .item--profile .profile-option {
        font-size: .8rem;
        padding: 0 12px 0 9px;
        color: inherit;
        padding: 0;
    }

    .item--profile {
        margin: 12px;
        width: fit-content;
        color: var(--text-color);
    }

    .item--profile:hover {
        border-radius:25px ;
        color: var(--sidebar-color);
    }

    .item--profile:hover img {
        opacity: .7;
    }

    .item--profile::before, .item--profile::after {
        display: none;
    }

    /* Modificación para cuando el menú está abierto */
    .sidebar.menu-open {
        /* width: fit-content; */
    }

    .sidebar.menu-open .sidebar__picture img{
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

    @keyframes sidebarAnimation{
        0%{

        }
    }

    @media (max-width: 900px) {
        .main h1 {
            padding-top: 15rem;
        }
    }



</style>