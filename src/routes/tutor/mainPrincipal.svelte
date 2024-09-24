<script>
    // export let userInfo; // Recibe la información del usuario desde el componente principal
    import Item from "./item.svelte";
</script>

<main class="main opacity-80 w-[calc(100%-5rem)] text-white ml-20 relative bg-cover bg-center h-screen" >
    <!-- <h1 class="text-center m-0 pt-5 mb-0 pb-0">Bienvenido, Tutor</h1> -->
    <div class="info flex flex-wrap justify-center m-20 mt-0">
        <Item texto="hola"/>
        <Item texto="hola"/>
        <Item texto="hola"/>
        <Item texto="hola"/>
    </div>   
</main>


