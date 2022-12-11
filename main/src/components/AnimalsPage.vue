<template>
    <v-container>
       Here you can see some cute animals :)
       <v-row>
         <v-col v-for="animal in animals" :key="animal.src" cols=12 xl=1 lg=2 md=3 sm=4 xs=6 >
           <v-img  :src="require('@/assets/' +animal.src)"></v-img>
         </v-col>
       </v-row>
       
    </v-container>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "AnimalsPage",
  data(){
    return{
      animals:[
        //for random dog: https://dog.ceo/api/breeds/image/random
        // species australia: https://lists.ala.org.au/public/speciesLists
        {src:"tiger2.svg"},
        {name:"Corgi",src:"logo.svg"},
        {src:"sea-turtle.svg"},
        {name:"Dog",src:"dog.svg"},
        //{name:"Giraffe",src:"giraffe.svg"},
        {name:"Baby Elephant",src:"baby-elephant.png"},
        {name:"Dog & Cat",src:"dog-cat.svg"},        
        {name:"Tiger",src:"tiger.svg"},
        {name:"Ape",src:"ape.svg"},
        {name:"Bear",src:"bear.svg"},
        {name:"Panda",src:"panda.svg"},
        {src:"mops.svg"},
        {src:"walross.svg"},
        {src:"polarbär.svg"},
        {src:"robbe.svg"},
        {src:"owl.svg"},
        {src:"otter.svg"},
        {src:"octopus.svg"},
        //{src:"unicorn.svg"},
        {src:"cat.svg"},
        {src:"grasshopper.svg"},
        {src:"bear2.svg"},
        {src:"donkey.svg"},
        {src:"elephant.svg"},
        {src:"rudolph.svg"},
        {src:"elephant2.svg"},
        {src:"crocodile.svg"},
        {src:"monkey.svg"},




      ]

  }}
})
</script>
<style>
.strokeTale{
  fill: none;
  stroke-width: 3;
  stroke: #491EC4;
}
</style>