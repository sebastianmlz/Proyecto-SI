import { writable } from 'svelte/store';

// Verifica si estás en el cliente (navegador) antes de acceder a localStorage
const defaultUserInfo = {
    usuario_id: null,
    rol: null,
    accessToken: null,
    refreshToken: null,
};

const initialUserInfo = typeof window !== 'undefined' && localStorage.getItem('userInfo') 
    ? JSON.parse(localStorage.getItem('userInfo')) 
    : defaultUserInfo;

export const userStore = writable(initialUserInfo);

// Suscribirse a los cambios del store y actualizar localStorage
userStore.subscribe((value) => {
    if (typeof window !== 'undefined') { // Asegurarse de que localStorage solo se use en el cliente
        localStorage.setItem('userInfo', JSON.stringify(value));
    }
});
