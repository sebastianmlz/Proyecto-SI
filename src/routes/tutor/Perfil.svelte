<script>
    export let userInfo; // Recibe la información del usuario desde el componente principal
</script>

<main class="main  w-[calc(100%-5rem)] text-white ml-20  relative bg-cover bg-center h-screen" >
    <div class="perfil flex flex-col col-auto">
        <h1 class="mt-0 p-10 pl-20">Información del Perfil</h1>
        <div class=" contenido ml-20 bg-white rounded-3xl ">
            <ul class="mt-0 p-10 ">
                <li>Usuario ID: {userInfo.usuario_id}</li>
                <li>Rol: {userInfo.rol}</li>
                <li>Token de acceso: {userInfo.accessToken}</li>
            </ul>
        </div>
        
    </div>
</main>

<style>
    /* Añade aquí los estilos para el perfil */
    .contenido {
        color: var(--bg-color);
    }

    .contenido {
        width: 70dvw;
        height: 70dvh;
        
    }
</style>
