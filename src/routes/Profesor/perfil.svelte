<script>
    import { profesorStore } from '../../stores/profesorStore';
    import { onMount } from 'svelte';
    import SideBar from './SideBar.svelte';

    export let userInfo; // Recibe la información del usuario desde el componente principal
    let profesorInfo = {};

    // Suscribirse al store de tutor para obtener la información
    const unsubscribeProfesor = profesorStore.subscribe(value => {
        profesorInfo = value;
    });

    // Limpia la suscripción cuando el componente se destruye
    onMount(() => {
        return () => {
            unsubscribeProfesor();
        };
    });

    const handleLogout = () => {
        // Limpiar los datos del tutor
        profesorStore.set({
        ci: null,
        nombre: null,
        apellido: null,
        direccion: null,
        telefono: null,
        email: null,
        imagen_perfil: null,
        // es_activo: false,
        fecha_ingreso: null
        }); // Limpia los datos del tutor
        localStorage.removeItem('profesorInfo'); // Limpia LocalStorage de tutor
        // También puedes realizar otras acciones aquí, como redirigir
    };

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
                <li>CI: {profesorInfo.ci}</li>
                <li>Nombre: {profesorInfo.nombre}</li>
                <li>Apellido: {profesorInfo.apellido}</li>
                <li>Dirección: {profesorInfo.direccion}</li>
            </ul>
        </div>
    </div>
</main>

<style>
    /* Añade aquí los estilos para el perfil */
</style>
