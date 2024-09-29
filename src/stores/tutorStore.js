import { writable } from 'svelte/store';

// Verifica si estás en el cliente (navegador) antes de acceder a localStorage
const defaultTutorInfo = {
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

const initialTutorInfo = typeof window !== 'undefined' && localStorage.getItem('tutorInfo')
    ? JSON.parse(localStorage.getItem('tutorInfo'))
    : defaultTutorInfo;

export const tutorStore = writable(initialTutorInfo);

// Suscribirse a los cambios del store y actualizar localStorage
tutorStore.subscribe((value) => {
    if (typeof window !== 'undefined') { // Asegurarse de que localStorage solo se use en el cliente
        localStorage.setItem('tutorInfo', JSON.stringify(value));
    }
});

export const setTutorData = (data) => {
    tutorStore.set(data);
};

// Función para limpiar los datos del tutor
export const limpiarTutor = () => {
    tutorStore.set(defaultTutorInfo);
    if (typeof window !== 'undefined') {
        localStorage.removeItem('tutorInfo'); // Limpia localStorage de tutor
    }
};