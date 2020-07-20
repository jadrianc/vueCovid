
<template>
  <div class="home">
    
    <DataGlobal/>
    
    <div class="container">
      <Graficas/>
    </div>
    
    
  </div>
</template>

<script>
// @ is an alias to /src

//componentes
import DataGlobal from '@/components/DataGlobal.vue'
import Graficas from '@/components/Graficas.vue'

//librerias
import Vue from 'vue'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
import { mapState } from "vuex";
import { mapActions } from "vuex";
Vue.use(Chartkick.use(Chart))
export default {
  name: 'Home',
  components: {
    DataGlobal,
    Graficas
  },
  
        computed:{
            
        },
        methods:{
         

          crearArray(){

           // let top = this.data.filter(dato => dato.cases >= 100000 && dato.country != 'World'); //arreglo de objetos filtrados

            //this.datos = top.map(obj => [obj.country, obj.cases]) //arreglo de arreglos 

           
          }
        },
        
        mounted(){
            
        }
}
</script>
