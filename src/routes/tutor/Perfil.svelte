<script>
    import { tutorStore } from '../../stores/tutorStore'; // Asegúrate de tener la ruta correcta
    import { onMount } from 'svelte';
    import SideBarMenu from './SideBar_Menu.svelte';

    export let userInfo; // Recibe la información del usuario desde el componente principal
    let tutorInfo = {};

    // Suscribirse al store de tutor para obtener la información
    const unsubscribeTutor = tutorStore.subscribe(value => {
        tutorInfo = value;
    });

    // Limpia la suscripción cuando el componente se destruye
    onMount(() => {
        return () => {
            unsubscribeTutor();
        };
    });

</script>

<main class="main w-[calc(100%-5rem)] text-white ml-20 relative bg-cover bg-center h-screen">
    <div class="perfil flex flex-col col-auto">
        <h1 class="mt-0 p-10 pl-20">Información del Perfil</h1>
        <div class="contenido w-[70dvw] h-[70dvh] text-[--bg-color] ml-20 bg-white rounded-3xl">
            <ul class="mt-0 p-10">
                <li>Usuario ID: {userInfo.usuario_id}</li>
                <li>Rol: {userInfo.rol}</li>
                <!-- <li>Token de acceso: {userInfo.accessToken}</li> -->
                <!-- Mostrar datos del tutor -->
                <li>CI: {tutorInfo.ci}</li>
                <li>Nombre: {tutorInfo.nombre}</li>
                <li>Apellido: {tutorInfo.apellido}</li>
                <li>Dirección: {tutorInfo.direccion}</li>
            </ul>
        </div>
    </div>
</main>

<style>
    /* Añade aquí los estilos para el perfil */
</style>
