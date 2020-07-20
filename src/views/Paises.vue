<template>
    <Select/>
</template>
<script>
import Select from '@/components/Select.vue'
import Vue from 'vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
Vue.component('v-select', vSelect)
export default {
    name: 'Paises',
    components: {
        Select
    }
}
</script>



