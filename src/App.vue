<template>
  <div id="app">
    <div class="alert alert-info" role="alert">
            <div class="row">
                <div class="col-md-4">
                    <h2 class="text-center">Covid-19</h2>
                </div>
                <div class="col-md-8">
           
                <ul class="nav justify-content-end">
                <li class="nav-item p-3">
                  <router-link to="/">Home</router-link>
  
                </li>
                <li class="nav-item p-3">
                  <router-link to="/Paises">Paises</router-link>
                </li>
               
              </ul>
                </div>
            </div>
        </div>
   <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view/>
  </div>
</template>

<style>

</style>
