<script>
    export let showModal = false;

    const closeModal = () => {
        showModal = false;
    };

</script>

{#if showModal}
    <div class="modal-overlay" on:click={closeModal}></div>
    <div class="modal-content">
        <button class="close-btn text-white" on:click={closeModal}>x</button>
        <form>
            <label for="username">Usuario</label>
            <input type="text" id="username" name="username" placeholder="Nombre de usuario">
            <label for="password">Contraseña</label>
            <input type="password" name="password" id="password" placeholder="Contraseña">
            <button type="submit">Ingresar</button>
        </form>
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
    /* border: 1px solid #000; */
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
</style>