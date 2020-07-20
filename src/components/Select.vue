<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                    <div class="card-header alert-primary">
                        <h5>Seleccione pais</h5>
                    </div>
                    <div class="card-body">
                        <v-select label="country" :options="paises" @input="seleccion"></v-select>
                        <br>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="card">
                                    <div class="card-header">
                                        <h5><svg  class="bi bi-bell-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                                                    </svg> Casos Confirmados</h5>
                                    </div>
                                    <div class="card-body">
                                        <h3>{{casos}}</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card">
                                    <div class="card-header">
                                        <h5> <svg width="25" height="25" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 32"><path class="igc-textual-path" fill="#465966" transform="translate(0, 0)" d="M28.584,27.183C28.128,25.558,26.86,24.221,25.181,23.751C25.144,23.74,25.104,23.729,25.068,23.722C25.068,23.722,25.068,12.387,25.068,12.387C25.068,11.858,25.09,11.326,25.079,10.798C25.082,10.769,25.086,10.74,25.086,10.707C25.079,8.415,24.343,6.131,22.955,4.302C21.57,2.476,19.657,1.113,17.46,0.45C15.42,-0.165,13.168,-0.151,11.138,0.501C9.313,1.088,7.641,2.163,6.373,3.606C5.101,5.052,4.208,6.83,3.866,8.725C3.706,9.618,3.684,10.51,3.684,11.414C3.684,11.414,3.684,23.729,3.684,23.729C2.077,24.152,0.751,25.369,0.226,26.997C0.208,27.059,0.189,27.121,0.171,27.18C0.171,27.18,27.068,27.18,27.068,27.18C27.064,27.172,27.061,27.165,27.061,27.158C27.057,27.147,27.05,27.132,27.046,27.118C27.043,27.11,27.043,27.103,27.043,27.099C27.043,27.099,27.043,27.099,27.043,27.096C27.043,27.096,27.043,27.092,27.043,27.092C27.043,27.092,27.043,27.096,27.046,27.096C27.046,27.099,27.05,27.099,27.05,27.103C27.061,27.125,27.079,27.165,27.079,27.172C27.079,27.172,27.079,27.172,27.079,27.172C27.079,27.172,28.584,27.172,28.584,27.172C28.584,27.172,28.584,27.183,28.584,27.183M17.602,12.645C17.602,12.645,15.485,12.645,15.485,12.645C15.485,12.645,15.485,18.737,15.485,18.737C15.485,19.35,14.982,19.805,14.392,19.83C13.802,19.856,13.299,19.309,13.299,18.737C13.299,18.737,13.299,12.645,13.299,12.645C13.299,12.645,11.153,12.645,11.153,12.645C10.541,12.645,10.085,12.143,10.06,11.552C10.034,10.962,10.581,10.459,11.153,10.459C11.153,10.459,13.299,10.459,13.299,10.459C13.299,10.459,13.299,8.557,13.299,8.557C13.299,7.945,13.802,7.49,14.392,7.464C14.982,7.439,15.485,7.985,15.485,8.557C15.485,8.557,15.485,10.459,15.485,10.459C15.485,10.459,17.602,10.459,17.602,10.459C18.214,10.459,18.67,10.962,18.695,11.552C18.721,12.143,18.174,12.645,17.602,12.645C17.602,12.645,17.602,12.645,17.602,12.645M28.784,29.369C28.784,29.369,28.784,31.275,28.784,31.275C28.784,31.668,28.442,32,28.045,32C28.03,32,28.005,31.996,27.99,31.996C27.637,32.004,27.283,31.993,26.926,31.993C26.926,31.993,0.718,31.993,0.718,31.993C0.324,31.993,0,31.668,0,31.275C0,31.275,0,29.369,0,29.369C0,29.369,28.784,29.369,28.784,29.369C28.784,29.369,28.784,29.369,28.784,29.369"></path></svg> Muertes</h5>
                                    </div>
                                    <div class="card-body">
                                        <h3>{{muertes}}</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card">
                                    <div class="card-header">
                                        <h5><svg class="bi bi-heart" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                                    </svg> Recuperados</h5>
                                    </div>
                                    <div class="card-body">
                                        <h3>{{recuperados}}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="card">
                                    <div class="card-header">
                                        <h5><svg width="30" height="33.93939393939394" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 32"><path class="igc-textual-path" fill="black" transform="translate(0, 0)" d="M4.686,4.686C-1.562,10.935,-1.562,21.065,4.686,27.314C10.935,33.562,21.065,33.562,27.314,27.314C33.562,21.065,33.562,10.935,27.314,4.686C21.065,-1.562,10.935,-1.562,4.686,4.686C4.686,4.686,4.686,4.686,4.686,4.686M25.051,25.051C20.052,30.049,11.948,30.049,6.949,25.051C1.95,20.052,1.95,11.948,6.949,6.949C11.948,1.95,20.052,1.95,25.051,6.949C30.05,11.948,30.05,20.052,25.051,25.051C25.051,25.051,25.051,25.051,25.051,25.051M23.2,14.4C23.2,14.4,17.6,14.4,17.6,14.4C17.6,14.4,17.6,8.8,17.6,8.8C17.6,7.916,16.884,7.2,16,7.2C15.116,7.2,14.4,7.916,14.4,8.8C14.4,8.8,14.4,14.4,14.4,14.4C14.4,14.4,8.8,14.4,8.8,14.4C7.916,14.4,7.2,15.116,7.2,16C7.2,16.884,7.916,17.6,8.8,17.6C8.8,17.6,14.4,17.6,14.4,17.6C14.4,17.6,14.4,23.2,14.4,23.2C14.4,24.084,15.116,24.8,16,24.8C16.884,24.8,17.6,24.084,17.6,23.2C17.6,23.2,17.6,17.6,17.6,17.6C17.6,17.6,23.2,17.6,23.2,17.6C24.084,17.6,24.8,16.884,24.8,16C24.8,15.116,24.084,14.4,23.2,14.4C23.2,14.4,23.2,14.4,23.2,14.4"></path></svg> Nuevos Casos</h5>
                                    </div>
                                    <div class="card-body">
                                        <h3>{{nuevosCasos}}</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card">
                                    <div class="card-header">
                                        <h5><img width="35" class="lazyload lazyload--done" alt="190952952" src="https://t4.ftcdn.net/jpg/01/90/95/29/240_F_190952952_TIFJyxd8svR07gcxq1y3UHfhpZd7mxW5.jpg"> Criticos</h5>
                                    </div>
                                    <div class="card-body">
                                        <h3>{{criticos}}</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card">
                                    <div class="card-header">
                                        <h5><svg width="30" height="35" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 32"><path class="igc-textual-path" fill="#698599" transform="translate(0, 0)" d="M26.202,2.146C26.202,2.146,16.498,2.146,16.498,2.146C15.245,-0.475,11.625,-0.756,9.982,1.639C9.872,1.8,9.774,1.97,9.69,2.146C9.69,2.146,0,2.146,0,2.146C0,2.146,0,32,0,32C0,32,26.202,32,26.202,32C26.202,32,26.202,2.146,26.202,2.146M11.331,4.296C11.331,4.296,11.514,3.447,11.514,3.447C11.782,2.223,13.273,1.749,14.199,2.592C14.448,2.819,14.62,3.118,14.692,3.447C14.692,3.447,14.875,4.296,14.875,4.296C14.875,4.296,16.957,4.296,16.957,4.296C16.957,4.296,16.957,6.285,16.957,6.285C16.957,6.285,9.249,6.285,9.249,6.285C9.249,6.285,9.249,4.296,9.249,4.296C9.249,4.296,11.331,4.296,11.331,4.296M24.052,29.853C24.052,29.853,2.15,29.853,2.15,29.853C2.15,29.853,2.15,4.296,2.15,4.296C2.15,4.296,7.099,4.296,7.099,4.296C7.099,4.296,7.099,8.435,7.099,8.435C7.099,8.435,19.104,8.435,19.104,8.435C19.104,8.435,19.104,4.296,19.104,4.296C19.104,4.296,24.052,4.296,24.052,4.296C24.052,4.296,24.052,29.853,24.052,29.853M13.442,13.828C13.442,13.828,21.917,13.828,21.917,13.828C21.917,13.828,21.917,15.978,21.917,15.978C21.917,15.978,13.442,15.978,13.442,15.978C13.442,15.978,13.442,13.828,13.442,13.828M13.262,22.274C13.262,22.274,21.737,22.274,21.737,22.274C21.737,22.274,21.737,24.425,21.737,24.425C21.737,24.425,13.262,24.425,13.262,24.425C13.262,24.425,13.262,22.274,13.262,22.274M7.393,14.781C7.393,14.781,5.92,13.588,5.92,13.588C5.92,13.588,4.565,15.262,4.565,15.262C4.565,15.262,7.661,17.766,7.661,17.766C7.661,17.766,11.955,12.775,11.955,12.775C11.955,12.775,10.324,11.373,10.324,11.373C10.324,11.373,7.393,14.781,7.393,14.781C7.393,14.781,7.393,14.781,7.393,14.781M9.571,20.024C9.571,20.024,7.762,21.83,7.762,21.83C7.762,21.83,5.956,20.024,5.956,20.024C5.956,20.024,4.436,21.543,4.436,21.543C4.436,21.543,6.242,23.353,6.242,23.353C6.242,23.353,4.436,25.159,4.436,25.159C4.436,25.159,5.956,26.679,5.956,26.679C5.956,26.679,7.762,24.872,7.762,24.872C7.762,24.872,9.571,26.679,9.571,26.679C9.571,26.679,11.091,25.159,11.091,25.159C11.091,25.159,9.285,23.353,9.285,23.353C9.285,23.353,11.091,21.543,11.091,21.543C11.091,21.543,9.571,20.024,9.571,20.024C9.571,20.024,9.571,20.024,9.571,20.024"></path></svg> Pruebas Realizadas</h5>
                                    </div>
                                    <div class="card-body">
                                        <h3>{{test}}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            Linea de Tiempo
                        </div>
                        <div class="card-body">
                            <div id="container"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";

export default {
    name: 'Select',
    data(){
        return{
            paises:[],
            casos: "",
            muertes: "",
            recuperados: "",
            nuevosCasos: "",
            criticos: "",
            test: "",
            code: ""
        }
    },
    computed:{
        ...mapState(['data', 'dataMundial', 'paisesCovid', 'dataHistorico'])
    },
    methods:{
        ...mapActions(['obtenerData', 'obtenerDataMundial', 'obtenerHistorico']),
        extraerPais(){
            
            this.paises = this.data.filter(dato => dato.country != 'World');
            //this.paises = this.data.map(obj => [obj.country])
           
           //    console.log(Object.values(this.paises))
        },
        seleccion(value){
            
            this.casos = value.cases
            this.muertes = value.deaths
            this.recuperados = value.recovered
            this.nuevosCasos = value.todayCases
            this.criticos = value.critical
            this.test = value.totalTests
            
            this.getData(value.country)
            
        },

        graficaLineal(datos){
            anychart.onDocumentReady(function () {
            document.getElementById("container").innerHTML = ""
            var dataSet = anychart.data.set(datos);
            var seriesData_1 = dataSet.mapAs({'x': 0, 'value': 1});
            var seriesData_2 = dataSet.mapAs({'x': 0, 'value': 2});
            var seriesData_3 = dataSet.mapAs({'x': 0, 'value': 3});
            var chart = anychart.line();
            chart.animation(true);
            chart.crosshair()
                    .enabled(true)
                    .yLabel(false)
                    .xLabel(false)
                    .yStroke(null);
            chart.padding([10, 20, 5, 20]);
            chart.title('');
            chart.yAxis().title('Personas afectadas');
            var series;
            series = chart.line(seriesData_1);
            series.name('Casos')
                    .stroke('red')
                    .size(4);
            series.hovered().markers(true);
            series = chart.line(seriesData_2);
            series.name('Muertos')
                    .size(4)
                    .stroke(
                            {
                                color: 'black'
                            }
                    );
            series.hovered().markers(true);
            series = chart.line(seriesData_3);
            series.name('Recuperados')
                    .size(4)
                    .stroke(
                            {
                                color: 'skyblue'
                            }
                    );
            series.hovered().markers(true);
            chart.interactivity().hoverMode('by-x');

            chart.tooltip()
                    .displayMode('separated')
                    .positionMode('point')
                    .separator(true)
                    .position('right')
                    .anchor('left-bottom')
                    .offsetX(2)
                    .offsetY(5)
                    .title(false)
                    .format('{%Value} Casos');
            chart.legend(true);
            chart.container('container');
            chart.draw();
            });
        },

        graficaPastel(){

        },


        async getData(pais){
             const response = await fetch('https://api.covid19api.com/total/dayone/country/'+pais);
             const data = await response.json();

             var datos = data.map(obj => [obj.Date, obj.Confirmed, obj.Deaths, obj.Recovered])
             this.graficaLineal(datos)
        }
    },
    mounted(){
        this.obtenerData()
        .then(result => this.extraerPais())
 
    },
    created(){


       
    }
}


</script>
<style>
#container {
    width: 100%;
    height: 400px;
    margin: 0;
    padding: 0;
}
</style>