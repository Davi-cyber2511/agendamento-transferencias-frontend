<template>
    <div class="container">
        <img src="@/assets/fundo-bancario.jpg" alt="Fundo Bancário" class="background-image">
        <div class="content">
            <h1>Agendamento de Transferencias</h1>
            <form @submit.prevent="agendarTransferencia">
                <input type="text" v-model="contaOrigem" placeholder="Conta de Origem">
                <input type="text" v-model="contaDestino" placeholder="Conta de Destino">
                <input type="number" v-model="valor" placeholder="Valor">
                <input type="date" v-model="dataTransferencia">
                <button type="submit">Agendar</button>
            </form>
            <div v-if="mensagem">
                {{ mensagem }}
            </div>
        </div>
    </div>
</template>

<script>
    import { agendar } from '../services/api';
    import moment from 'moment';

    export default {
        data() {
            return {
                contaOrigem: '',
                contaDestino: '',
                valor: null,
                dataTransferencia: '',
                mensagem: null,
            };
        },
        methods: {
            async agendarTransferencia() {
                try {
                    const dataAgendamento = moment().format('YYYY-MM-DD');
                    const transferencia = {
                        contaOrigem: this.contaOrigem,
                        contaDestino: this.contaDestino,
                        valor: this.valor,
                        dataTransferencia: this.dataTransferencia,
                        dataAgendamento,
                    };
                    const response = await agendar(transferencia);
                    this.mensagem = 'Transferencia agendada com sucesso!';
                    console.log('Transferência agendada:', response.data);
                } catch (error) {
                    this.mensagem = 'Erro ao agendar transferencia: ' + error.message;
                    console.error('Erro ao agendar transferencia:', error);
                }
            },
        },
    };
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        position: relative;
        overflow: hidden;
    }

    .background-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
    }

    .content {
        background-color: rgba(255, 255, 255, 0.8);
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        text-align: center;
    }

    h1 {
        color: #333;
    }

    input {
        width: 100%;
        padding: 10px;
        margin: 10px 0;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    button {
        background-color: #007bff;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

        button:hover {
            background-color: #0056b3;
        }
</style>