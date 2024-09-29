<script>

</script>

<main class="p-6 blue min-h-screen">
    <div class="text-center mb-10">
        <h1 class="text-4x1 font-bold white">Asistencia</h1>    
    </div>
        
    <div class="bg-white shadow-md rounded-lg p-8 max-w-4xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
                <label class="block text-gray-700 text-sm font-bold mb-2" for="Student_Name">
                    Nombre Alumno: 
                </label>
                <select class="rounded-lg bg-white w-[300px] h-[30px] text-[15px] font-semibold">
                    <option value="Seleccionar">Seleccionar</option>
                    <option value="Nombre 1">Victor</option>
                    <option value="Nombre 2">Sebas</option>
                    <option value="Nombre 3">Wilder</option>
                    <option value="Nombre 4">Antonio</option>
                    <option value="Nombre 5">Barja</option>
                </select>   
            </div>
            <div>
                <label class="block text-gray-700 text-sm font-bold" for="Asist">
                    Asistencia: 
                </label>
                <div class="inline-block pr-[50px]">
                    <label class="inline-block text-gray-700" for="Asistio">Presente</label>
                    <input type="checkbox" name="Asistencia" id="Present">
                </div>
                <label class="inline-block text-gray-700" for="inasistencia">Falta</label>
                <input class="inline-block m-[10px]" type="checkbox" name="Falta" id="No Present">
            </div>
        </div>
        <div>
            <input 
            class="bg-blue-500 
            hover:bg-blue-500 
            text-white rounded-md w-[100px] h-[30px] :" 
            type="button" value="Guardar">
        </div>  
    </div>
</main>

<style>
</style>