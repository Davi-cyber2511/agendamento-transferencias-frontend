<template>
    <div>
        <h2>Extrato de Agendamentos</h2>
        <table>
            <thead>
                <tr>
                    <th>Conta de Origem</th>
                    <th>Conta de Destino</th>
                    <th>Valor</th>
                    <th>Taxa</th>
                    <th>Data de Transferência</th>
                    <th>Data de Agendamento</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="agendamento in agendamentos" :key="agendamento.id">
                    <td>{{ agendamento.contaOrigem }}</td>
                    <td>{{ agendamento.contaDestino }}</td>
                    <td>{{ agendamento.valor }}</td>
                    <td>{{ agendamento.taxa }}</td>
                    <td>{{ agendamento.dataTransferencia }}</td>
                    <td>{{ agendamento.dataAgendamento }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { listarAgendamentos } from '../services/api';

export default {
  data() {
    return {
      agendamentos: [],
    };
  },
  async mounted() {
    try {
      this.agendamentos = await listarAgendamentos();
    } catch (error) {
      console.error('Erro ao carregar agendamentos:', error);
    }
  },
};
</script>