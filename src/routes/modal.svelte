<script>
    import { userStore } from '../stores/userStore'; // Importa el store de usuario
    import { tutorStore, setTutorData } from '../stores/tutorStore'; // Importa el store de tutor
    import { profesorStore, setProfesorData } from '../stores/profesorStore'; // Importa el store de profesor
    import { goto } from '$app/navigation'; // Importa goto para redireccionar
    import axios from 'axios'; // Importa axios para realizar las solicitudes

    export let showModal = false;

    const closeModal = () => {
        showModal = false;
    };

    let ci = ''; // Variable para el Carnet de Identidad
    let password = '';
    let error = '';
    let success = '';
    let ciError = '';
    let passwordError = '';
    let seba = 'https://cr.panel.api.cristorey.lat/api';

    // Función de validación básica
    const validate = () => {
        let valid = true;
        ciError = '';
        passwordError = '';

        if (ci.trim().length === 0) {
            ciError = 'El CI es obligatorio.';
            valid = false;
        }

        if (password.trim().length === 0) {
            passwordError = 'La Contraseña es obligatoria.';
            valid = false;
        }

        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        error = '';
        success = '';

        if (!validate()) {
            return;
        }
        
        try {
            const response = await fetch(`${seba}/auth/login/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ci, contrasena: password })
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Error en la autenticación');
            }

            const data = await response.json();
            success = 'Inicio de sesión exitoso!';
            console.log('Respuesta del servidor:', data);

            // Guardar la información del usuario en el store
            userStore.set({
                usuario_id: data.usuario_id,
                rol: data.rol,
                accessToken: data.access,   // Cambia a `access` en lugar de `access_token`
                refreshToken: data.refresh  // Cambia a `refresh` en lugar de `refresh_token`
            });

           // Consultar datos del tutor o profesor según el rol
            
            if (data.rol === 'P') {
                // Obtener datos del profesor
                const profesorResponse = await fetch(`${seba}/auth/profesores/${data.usuario_id}/`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${data.access}`, // Asegúrate de usar el token correcto
                        'Content-Type': 'application/json'
                    }
                });                
                const profesorData = await profesorResponse.json();
                setProfesorData(profesorData); // Guarda los datos en el store de profesor
                console.log('Respuesta del servidor, Profesor:', profesorData);
                goto('/Profesor'); // Redirigir al profesor
            } else if (data.rol === 'T') {
                // Obtener datos del tutor
                const tutorResponse = await fetch(`${seba}/auth/tutores/${data.usuario_id}/`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${data.access}`, // Asegúrate de usar el token correcto
                        'Content-Type': 'application/json'
                    }
                });   
                const tutorData = await tutorResponse.json();
                setTutorData(tutorData); // Guarda los datos en el store de tutor
                console.log('Respuesta del servidor, TUTOR:', tutorData);
                goto('/tutor'); // Redirigir al tutor
            }


        } catch (err) {
            error = err.message;
            console.error('Error de CORS o de autenticación:', err);
        }
    };

</script>


{#if showModal}
    <div class="modal-overlay fixed top-0 left-0 bg-black opacity-50 z-10 w-[100dvw] h-[100dvh]" on:click={closeModal}></div>
    <div class="modal-content fixed top-1/2 left-1/2 bg-white rounded-[10px] shadow-[0_0_30_#333] p-[2rem] z-20">
        <button class="close-btn text-white absolute top-0 right-0 p-[2px_15px] bg-[#e55] cursor-pointer rounded-[10px] " on:click={closeModal}>x</button>
        <form class="flex flex-col" on:submit={handleSubmit}>
            <label for="ci">ci</label>
            <input class="mb-5 p-[0.5rem] rounded-[5px] border-[1px_solid_#ccc]" type="text" id="ci" name="ci" placeholder="Nombre de usuario" bind:value={ci}>

            <label for="password">Contrasena</label>
            <input class="mb-5 p-[0.5rem] rounded-[5px] border-[1px_solid_#ccc]" type="password" id="password" name="password" placeholder="Contrasena" bind:value={password}>

            <button class="p-[0.5rem] bg-[#48e] text-white border-none rounded-[5px] cursor-pointer" type="submit">Ingresar</button>
        </form>
        {#if error}
            <p style="color: red">{error}</p> <!-- Mensaje de error si ocurre -->
        {/if}
    </div>
{/if}

<style>

    /* Contenido del modal */
    .modal-content {
        transform: translate(-50%, -50%);
    }

    /* Botón de cerrar */
    .close-btn {
        font-size: 1.5rem;
        border-top-left-radius: 0px;
        border-bottom-right-radius: 0px;
    }

    /* Mensaje de error */
    p {
        color: red;
        font-weight: bold;
    }
</style>
