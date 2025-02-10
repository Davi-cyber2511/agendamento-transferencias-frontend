<template>
    <div>
        <AgendamentoTransferencia />
        <ExtratoTransferencias />
    </div>
</template>

<script>
    import AgendamentoTransferencia from './components/AgendamentoTransferencia.vue';
    import ExtratoTransferencias from './components/ExtratoTransferencias.vue';

    export default {
        components: {
            AgendamentoTransferencia,
            ExtratoTransferencias,
        },
    };
</script>
