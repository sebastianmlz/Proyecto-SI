import { writable } from 'svelte/store';

// Verifica si estás en el cliente (navegador) antes de acceder a localStorage
const defaultProfesorInfo = {
    ci: '',
    nombre: '',
    apellido: '',
    direccion: '',
    telefono: '',
    email: '',
    imagen_perfil: null,
    es_activo: false,
    fecha_ingreso: '',
};

const initialProfesorInfo = typeof window !== 'undefined' && localStorage.getItem('profesorInfo')
    ? JSON.parse(localStorage.getItem('profesorInfo'))
    : defaultProfesorInfo;

export const profesorStore = writable(initialProfesorInfo);

// Suscribirse a los cambios del store y actualizar localStorage
profesorStore.subscribe((value) => {
    if (typeof window !== 'undefined') { // Asegurarse de que localStorage solo se use en el cliente
        localStorage.setItem('profesorInfo', JSON.stringify(value));
    }
});

export const setProfesorData = (data) => {
    profesorStore.set(data);
};

// Función para limpiar los datos del tutor
export const limpiarProfesor = () => {
    profesorStore.set(defaultProfesorInfo);
    if (typeof window !== 'undefined') {
        localStorage.removeItem('profesorInfo'); // Limpia localStorage de tutor
    }
};