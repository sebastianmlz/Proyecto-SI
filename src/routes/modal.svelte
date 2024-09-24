<script>
    import { userStore } from '../stores/userStore'; // Importa el store
    import { goto } from '$app/navigation'; // Importa goto para redireccionar
    import axios from 'axios'; // Importa axios para realizar las solicitudes
    //import Cookies from 'js-cookie'; // Importa js-cookie para manejar las cookies

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

            // Redirigir según el rol del usuario
            if (data.rol === 'P') {
                goto('/tutor'); // Redirigir al tutor
            }

        } catch (err) {
            error = err.message;
            console.error('Error de CORS o de autenticación:', err);
        }
    };

</script>


{#if showModal}
    <div class="modal-overlay" on:click={closeModal}></div>
    <div class="modal-content">
        <button class="close-btn text-white" on:click={closeModal}>x</button>
        <form on:submit={handleSubmit}>
            <label for="ci">ci</label>
            <input type="text" id="ci" name="ci" placeholder="Nombre de usuario" bind:value={ci}>

            <label for="password">Contrasena</label>
            <input type="password" id="password" name="password" placeholder="Contrasena" bind:value={password}>

            <button type="submit">Ingresar</button>
        </form>
        {#if error}
            <p style="color: red;">{error}</p> <!-- Mensaje de error si ocurre -->
        {/if}
    </div>
{/if}

<style>
    /* Fondo semitransparente */
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5);
        z-index: 10;
    }

    /* Contenido del modal */
    .modal-content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 2rem;
    border-radius: 10px;
    z-index: 20;
    box-shadow: 0 0 30px #333;
    }

    /* Botón de cerrar */
    .close-btn {
        position: absolute;
        top: 0px;
        right: 0;
        padding: 2px 15px;
        font-size: 1.5rem;
        cursor: pointer;
        background-color: #e55;
        border-radius: 10px;
        border-top-left-radius: 0px;
        border-bottom-right-radius: 0px;
    }

    /* Formulario */
    form {
        display: flex;
        flex-direction: column;
    }

    input {
        margin-bottom: 1rem;
        padding: 0.5rem;
        border-radius: 5px;
        border: 1px solid #ccc;
    }

    button[type="submit"] {
        padding: 0.5rem;
        background-color: #48e;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    /* Mensaje de error */
    p {
        color: red;
        font-weight: bold;
    }
</style>
