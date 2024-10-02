import { writable } from 'svelte/store';

// Verifica si estás en el cliente (navegador) antes de acceder a localStorage
const defaultDirectorInfo = {
    ci: '',
    nombre: '',
    apellido: '',
    direccion: '',
    telefono: '',
    email: '',
    imagen_perfil: null,
    es_activo: false,
    fecha_ingreso: '',
    relacion: ''
};

const initialDirectorInfo = typeof window !== 'undefined' && localStorage.getItem('directorInfo')
    ? JSON.parse(localStorage.getItem('directorInfo'))
    : defaultDirectorInfo;

export const directorStore = writable(initialDirectorInfo);

// Suscribirse a los cambios del store y actualizar localStorage
directorStore.subscribe((value) => {
    if (typeof window !== 'undefined') { // Asegurarse de que localStorage solo se use en el cliente
        localStorage.setItem('directorInfo', JSON.stringify(value));
    }
});

export const setDirectorData = (data) => {
    directorStore.set(data);
};

// Función para limpiar los datos del tutor
export const limpiarDirector = () => {
    directorStore.set(defaultDirectorInfo);
    if (typeof window !== 'undefined') {
        localStorage.removeItem('directorInfo'); // Limpia localStorage de tutor
    }
};