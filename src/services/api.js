import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/transferencias', // URL da sua API Spring Boot
});

export const agendar = (transferencia) => api.post('/agendamentos', transferencia);

export const listarAgendamentos = () => api.get('/agendamentos');