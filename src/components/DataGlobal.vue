<template>
    <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header alert-primary">
                                <h3>Datos Mundiales Nohemy</h3>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="card">
                                            <div class="card-header">
                                                <h5><svg  class="bi bi-bell-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                                                    </svg> Casos Confirmados</h5>
                                            </div>
                                            <div class="card-body">
                                                <h3>{{dataMundial.cases}}</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="card">
                                            <div class="card-header"> <h5> <svg width="25" height="25" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 32"><path class="igc-textual-path" fill="#465966" transform="translate(0, 0)" d="M28.584,27.183C28.128,25.558,26.86,24.221,25.181,23.751C25.144,23.74,25.104,23.729,25.068,23.722C25.068,23.722,25.068,12.387,25.068,12.387C25.068,11.858,25.09,11.326,25.079,10.798C25.082,10.769,25.086,10.74,25.086,10.707C25.079,8.415,24.343,6.131,22.955,4.302C21.57,2.476,19.657,1.113,17.46,0.45C15.42,-0.165,13.168,-0.151,11.138,0.501C9.313,1.088,7.641,2.163,6.373,3.606C5.101,5.052,4.208,6.83,3.866,8.725C3.706,9.618,3.684,10.51,3.684,11.414C3.684,11.414,3.684,23.729,3.684,23.729C2.077,24.152,0.751,25.369,0.226,26.997C0.208,27.059,0.189,27.121,0.171,27.18C0.171,27.18,27.068,27.18,27.068,27.18C27.064,27.172,27.061,27.165,27.061,27.158C27.057,27.147,27.05,27.132,27.046,27.118C27.043,27.11,27.043,27.103,27.043,27.099C27.043,27.099,27.043,27.099,27.043,27.096C27.043,27.096,27.043,27.092,27.043,27.092C27.043,27.092,27.043,27.096,27.046,27.096C27.046,27.099,27.05,27.099,27.05,27.103C27.061,27.125,27.079,27.165,27.079,27.172C27.079,27.172,27.079,27.172,27.079,27.172C27.079,27.172,28.584,27.172,28.584,27.172C28.584,27.172,28.584,27.183,28.584,27.183M17.602,12.645C17.602,12.645,15.485,12.645,15.485,12.645C15.485,12.645,15.485,18.737,15.485,18.737C15.485,19.35,14.982,19.805,14.392,19.83C13.802,19.856,13.299,19.309,13.299,18.737C13.299,18.737,13.299,12.645,13.299,12.645C13.299,12.645,11.153,12.645,11.153,12.645C10.541,12.645,10.085,12.143,10.06,11.552C10.034,10.962,10.581,10.459,11.153,10.459C11.153,10.459,13.299,10.459,13.299,10.459C13.299,10.459,13.299,8.557,13.299,8.557C13.299,7.945,13.802,7.49,14.392,7.464C14.982,7.439,15.485,7.985,15.485,8.557C15.485,8.557,15.485,10.459,15.485,10.459C15.485,10.459,17.602,10.459,17.602,10.459C18.214,10.459,18.67,10.962,18.695,11.552C18.721,12.143,18.174,12.645,17.602,12.645C17.602,12.645,17.602,12.645,17.602,12.645M28.784,29.369C28.784,29.369,28.784,31.275,28.784,31.275C28.784,31.668,28.442,32,28.045,32C28.03,32,28.005,31.996,27.99,31.996C27.637,32.004,27.283,31.993,26.926,31.993C26.926,31.993,0.718,31.993,0.718,31.993C0.324,31.993,0,31.668,0,31.275C0,31.275,0,29.369,0,29.369C0,29.369,28.784,29.369,28.784,29.369C28.784,29.369,28.784,29.369,28.784,29.369"></path></svg> Muertes</h5>
                                            </div>
                                            <div class="card-body">
                                               <h3>{{dataMundial.deaths}}</h3> 
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
                                                <h3>{{dataMundial.recovered}}</h3>
                                            </div>
                                        </div>
                                    </div>
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
    name: 'DataGlobal',
    mounted(){
        this.obtenerDataMundial()
        
    },
    computed:{
        ...mapState(['data', 'dataMundial'])
    },

    methods:{
        ...mapActions(['obtenerData', 'obtenerDataMundial'])
    },
    
    data(){
        return{
            titulo: 'Service',
            datos: []
        }
    }
}
</script>
httP:/198.211.105.247/