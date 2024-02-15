<template>
    <Tag v-if="modelValue" :severity="tag(modelValue)" class="p-text-capitalize">
    {{ modelValue.replace(/_/g, ' ') }}
  </Tag>
</template>

<script>
    import Tag from 'primevue/tag';

    export default {
        components: { Tag },
        props: ['modelValue'],
        methods: {
            tag(status){
                switch(status) {
                    case 'Aktif':
                        return 'success';

                    case 'Batal':
                        return 'danger';

                    case 'Non-Aktif':
                        return 'danger';

                    default: 
                        return ''
                }
            }
        }
    };
</script>