<script>
import SideBar from "./SideBar.svelte";
</script>
<main class="main  w-[calc(100%-5rem)] text-white ml-20  relative bg-cover bg-center h-screen">
    <div class="notificaciones flex flex-col col-auto">
        <h1  class="mt-0 p-10 pl-20">Reporte</h1>
        <li class="Datos">Nombre    Completo:</li>
        <div class="input__nombre">
            <input type="text" class="Nomb__est" placeholder="Nombre Completo">
        </div>
        <li class="Datos">Curso:</li>
            <div class="input__curso">   
                <input type="search"    name="Curso" class="curso__est" placeholder="Curso">
            </div>     
                <div class=" contenido ml-20 bg-white rounded-3xl">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit cupiditate dolor inventore nesciunt doloremque voluptatibus corrupti illum optio facere. Quae numquam voluptate molestiae atque magnam odit deleniti modi tempora nemo.</p>
                </div>   
        </div>
        <input type="button" value="MARCAR COMO LEIDO" class="Marcar">
</main>

<style>
    /* Añade aquí los estilos para las notificaciones */
    .contenido {
        width: 70dvw;
        height: 70dvh;
    }
    p{
        color: black;
    }

    .Datos {
        padding:10px;
    }

    .SideBar.open.input__curso{
        transform: translateX(100px);
    }

    .input__nombre{
        position: relative;
        padding: 10px;
        height: auto;
        width: auto;   
    }

    .Nomb__est{
        border-radius: 5px;
        width: 35rch;
        height: 30px;
        font-size: 20px;
    }

    .input__curso{
        padding: 10px;
        width: auto;
        height: auto;
    }

    .curso__est{
        border-radius: 5px;
        width: 10rch;
        height: 30px;
        font-size: 20px;
    }

    .Marcar{
       margin-top: 20px;
       height: 40px;
       width: 200px;
    }
</style>