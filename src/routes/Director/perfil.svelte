<script>
    import { directorStore } from "../../stores/directorStore";
    import { onMount } from "svelte";
    import SideBar from "./SideBar.svelte";
	import { profesorStore } from "../../stores/profesorStore";

    export let userInfo; // Recibe la información del usuario desde el componente principal
    let directorInfo = {};

    // Suscribirse al store de tutor para obtener la información
    const unsubscribeDirector = directorStore.subscribe(value => {
        directorInfo = value;
    });

    // Limpia la suscripción cuando el componente se destruye
    onMount(() => {
        return () => {
            unsubscribeDirector();
        };
    });

    const handleLogout = () => {
        // Limpiar los datos del tutor
        directorStore.set({
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
        localStorage.removeItem('directorInfo'); // Limpia LocalStorage de tutor
        // También puedes realizar otras acciones aquí, como redirigir
    };

</script>

<main class="main w-[calc(100%-5rem)] text-white ml-20 relative bg-cover bg-center h-screen">
    <div class="perfil flex flex-col col-auto">
      <h1 class="mt-0 p-10 pl-20">Perfil</h1>
      <div class="contenido w-[800px] h-[400px] bg-gray-300 ml-20 rounded-2xl p-6">
        <div class="flex items-center mb-4">
          <label class="ID text-black mr-4" for="id">Usuario:</label>
          <input class="text-black text-[15px] p-2 border border-gray-400 rounded" type="text" 
          id="id" blind:value={directorInfo.userInfo} readonly/>
        </div>
        <div class="flex items-center mb-4">
          <label class="Nombre text-black mr-4" for="Nombre">Nombre:</label>
          <input class="text-black text-[15px] p-2 border border-gray-400 rounded" type="text" id="Nombre" 
          blind:value={directorInfo.rol} readonly/>
        </div>
        <div class="flex items-center mb-4">
            <label class="text-black mr-4" for="id">Rol:</label>
            <input class="text-black text-[15px] p-2 border border-gray-400 rounded ml-[30px]" type="text" id="Rol" />
          </div>  
      </div>
    </div>
  </main>

<style>
</style>