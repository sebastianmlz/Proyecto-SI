<script>
    let studentName = '';
    let course = '';
    let conduct = '';
    let performance = '';
    let observations = '';
</script>

<main class="p-6 blue min-h-screen">
    <!-- Título -->
    <div class="text-center mb-10">
        <h1 class="text-4xl font-bold white">Reporte de Seguimiento</h1>
        <h2 class="text-xl white">Conducta y Rendimiento del Alumno</h2>
    </div>

    <!-- Formulario del reporte -->
    <div class="bg-white shadow-md rounded-lg p-8 max-w-4xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <!-- Nombre del alumno -->
            <div>
                <label class="block text-gray-700 text-sm font-bold mb-2" for="studentName">
                    Nombre Completo del Alumno
                </label>
                <input 
                    type="text" 
                    id="studentName" 
                    bind:value={studentName}
                    placeholder="Nombre del estudiante"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
            </div>

            <!-- Curso -->
            <div>
                <label class="block text-gray-700 text-sm font-bold mb-2" for="course">
                    Curso
                </label>
                <input 
                    type="text" 
                    id="course" 
                    bind:value={course}
                    placeholder="Curso"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <!-- Conducta -->
            <div>
                <label class="block text-gray-700 text-sm font-bold mb-2" for="conduct">
                    Conducta del Alumno
                </label>
                <textarea 
                    id="conduct" 
                    bind:value={conduct}
                    placeholder="Describe la conducta del estudiante"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                ></textarea>
            </div>

            <!-- Rendimiento -->
            <div>
                <label class="block text-gray-700 text-sm font-bold mb-2" for="performance">
                    Rendimiento Académico
                </label>
                <textarea 
                    id="performance" 
                    bind:value={performance}
                    placeholder="Describe el rendimiento académico"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                ></textarea>
            </div>
        </div>

        <!-- Observaciones adicionales -->
        <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="observations">
                Observaciones
            </label>
            <textarea 
                id="observations" 
                bind:value={observations}
                placeholder="Observaciones adicionales"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
            ></textarea>
        </div>

        <!-- Botón de guardar -->
        <div class="flex justify-end">
            <button 
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="button"
                on:click={() => {
                    console.log('Reporte Guardado');
                    // Aquí podrías agregar la lógica para guardar el reporte
                }}
            >
                Guardar Reporte
            </button>
        </div>
    </div>
</main>

<style>
    
</style>