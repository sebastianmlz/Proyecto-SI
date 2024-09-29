<script>

let menuOpen = true;

    const toggleMenu = () => {
        menuOpen = !menuOpen;
    };

    let selectedOption = 'principal'; // Inicialmente selecciona la opción de "Perfil"
    const changeOption = (option) => {
        selectedOption = option; // Cambia la opción seleccionada
    };
</script>

<aside class="sidebar {menuOpen ? 'menu-open' : ''}">
    <form class="sidebar__form">
        <!-- Botón para abrir/cerrar el menú -->
        <button type="button" class="material-symbols-outlined" on:click={toggleMenu}>
            {menuOpen ? 'menu' : 'menu_open'}
        </button>
    </form>
    <picture class="sidebar__picture">
        <source srcset="/static/escudo.png" media="(max-width:57.5rem)">
        <img src="/static/escudo.png">
    </picture>
    <nav class="sidebar__nav">
        <ul>
            <li class="sidebar__item" on:click={() => changeOption('notificaciones')}>
                <span class="material-symbols-outlined">Notifications</span>
                <a href="#">Notificaciones</a>
            </li>
            <li class="sidebar__item" on:click={() => changeOption('mensajes')}>
                <span class="material-symbols-outlined">Mail</span>
                <a href="#">Mensajes</a>
            </li>
            <!-- Puedes añadir más opciones aquí -->
            <li class="sidebar__item" on:click={() => changeOption('citaciones')}>
                <span class="material-symbols-outlined">Report</span>
                <a href="#">Citaciones</a>
            </li>
            <li class="sidebar__item" on:click={() => changeOption('ajustes')}>
                <span class="material-symbols-outlined">settings</span>
                <a href="#">Ajustes</a>
            </li>
        </ul>   
    </nav>
    <div class="sidebar__profile">
        <ul class="p-0">
            <li class="sidebar__item item--profile">
                <img src="saul.png">
                <span class="profile-option">Perfil</span>
            </li>
            <li class="sidebar__item">
                <span class="material-symbols-outlined">logout</span>
                <a href="#">Salir</a>
            </li>
        </ul>
    </div>
</aside>


<style>
     .sidebar {
        background-color: var(--sidebar-color);
        position: fixed;
        height: 100%;
        width: clamp(200px, 230px, 250px);
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

    .sidebar__nav ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
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
    }

    /* Estilos del perfil en el sidebar */

    .sidebar__profile img {
        border-radius: 50%;
        width: 2rem;
    }

    .item--profile .profile-option {
        font-size: .8rem;
        padding: 0 12px 0 9px;
        color: inherit;
    }

    .item--profile {
        margin: 12px;
        width: fit-content;
        color: var(--text-color);
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