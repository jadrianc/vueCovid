
<template>
  
    
    <div>
      <h5 class="text-center">Casos Positivos</h5>
      <div id="container1"></div>
      <div id="container2"></div>
     
      <bar-chart :data="datos"></bar-chart>
       <div id="container3"></div>
    </div>
</template>
<script>

import { mapState } from "vuex";
import { mapActions } from "vuex";

export default {
    name: 'Graficas',
    data(){
            return{
                paises: [],
                datos: []
            }
        },
        computed:{
            ...mapState(['data', 'dataMundial', 'paisesCovid']),
          crearMapa(){
            
            for (var key in this.data){
            if(this.data[key].country == "USA"){
                this.paisesCovid.push({id: "United States", value: this.data[key].cases})
            }
           this.paisesCovid.push({id: this.data[key].country, value: this.data[key].cases})
            
            }
            return this.paisesCovid
        }
        },
        methods:{
          ...mapActions(['obtenerData', 'obtenerDataMundial']),

          mapear(data){
            anychart.onDocumentReady(function() {
            var series;
            var map = anychart.map();
            var dataSet = anychart.data.set(data);
            
            series = map.choropleth(dataSet);
            series.geoIdField('Casos Positivos');
            series.colorScale(anychart.scales.linearColor('#deebf7', '#3182bd'));
            series.hovered().fill('#addd8e');
            map.geoData(anychart.maps['world']);
            series.geoIdField('name');
            map.container('container1');
            map.draw();
            });

            let top = this.data.filter(dato => dato.cases >= 100000 && dato.country != 'World'); //arreglo de objetos filtrados

            var datos = top.map(obj => [obj.country, obj.cases]) //arreglo de arreglos 

            this.datos = datos;
          
            anychart.onDocumentReady(function () {
    
                var chart = anychart.pie3d(datos);
                chart.title('Top nivel mundial Casos Positivos (+100,000)')
                  .radius('60%')
                  .innerRadius('60%');
                chart.container('container2');
                chart.draw();
            });
            
            let topMuertes = this.data.filter(top => top.deaths >= 5000 && top.country != 'World')
            let arrayMuertes = topMuertes.map(obj => [obj.country, obj.deaths])
            console.log(topMuertes)
            anychart.onDocumentReady(function () {

                var chart = anychart.pie(arrayMuertes);
                chart.normal().outline().enabled(true);
                chart.normal().outline().width("5%");
                chart.hovered().outline().width("10%");
                chart.selected().outline().width("3");
                chart.selected().outline().fill("#455a64");
                chart.selected().outline().stroke(null);
                chart.selected().outline().offset(2);
                chart.title("Top Nivel Mundial Muertes (+5000)");
                chart.container("container3");
                chart.draw();
            });

          }
        },
        created(){
        },
        mounted(){
            this.obtenerData()
            .then(result => this.mapear(this.crearMapa))
        }
}
</script>
<style>
 #container1{
width: 100%;
height: 330px;
margin: 0;
padding: 0;
}
#container2, #container3{
width: 100%;
height: 400px;
margin: 0;
padding: 0;
}

</style>