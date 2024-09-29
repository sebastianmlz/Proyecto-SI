<script>
    let studentName = '';
    let course = '';
    let conduct = '';
    let performance = '';
    let observations = '';
</script>
<main class="main  w-[calc(100%-5rem)] text-white ml-20  relative bg-cover bg-center h-screen">
    <div class="notificaciones flex flex-col col-auto">
        <h1  class="mt-0 pl-20">Reporte</h1>
        <li class="Datos  p-[10px]">Nombre    Completo:</li>
        <div class="input__nombre relative p-[10px] h-auto w-auto">
            <input type="text" class="Nomb__est rounded-[5px] w-[35rch] h-[30px]" placeholder="Nombre Completo">
        </div>
        <li class="Datos p-[10px]">Curso:</li>
            <div class="input__curso p-[10px] w-a h-a">   
                <input type="search"    name="Curso" class="curso__est rounded-[5px] w-[10rch] h-[30px] " placeholder="Curso">
            </div>     
                <div class=" contenido w-[70dvw] h-[70dvh] ml-20 bg-white rounded-3xl">
                <p class="text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit cupiditate dolor inventore nesciunt doloremque voluptatibus corrupti illum optio facere. Quae numquam voluptate molestiae atque magnam odit deleniti modi tempora nemo.</p>
                </div>   
        </div>
        <input type="button" value="MARCAR COMO LEIDO" class="Marcar mt-[20px] h-[40px] w-[200px]">
</main>

<style>
    /* Añade aquí los estilos para las notificaciones */

    .SideBar.open.input__curso{
        transform: translateX(100px);
    }

    .Nomb__est{
        font-size: 20px;
    }

    .curso__est{
        font-size: 20px;
    }
    
</style>