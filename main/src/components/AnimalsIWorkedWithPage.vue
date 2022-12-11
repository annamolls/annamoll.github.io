<template>
  <v-carousel height="100%">
    <v-carousel-item
    src="@/assets/tiger_odense.jpg"
    height="100%"
    key="tiger">
    <v-card class="justify-center transparent" color="teal lighten-5"><v-card-title>
      During my Erasmus, I worked together with Boris the Tiger and investigated how he behaves to different enrichment methods. 
      <v-spacer></v-spacer>
      <v-icon>mdi-map-marker</v-icon> Odense, Denmark
    </v-card-title>
    </v-card>
    </v-carousel-item>
    <v-carousel-item
    src="@/assets/capuchins_biorender.png"
    height="100%"
    key="capuchin">
      <v-card class="justify-center" color="teal lighten-5"><v-card-title>
        For my Bachelor thesis, I observed the social structure of a male capuchin group. 
        <v-spacer></v-spacer>
        <v-icon>mdi-map-marker</v-icon> Münster, Germany
      </v-card-title>
      </v-card>
    </v-carousel-item>
  </v-carousel>
</template>


<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "AnimalsIWorkedWithPage",
})
</script>
<style>
.strokeTale{
  fill: none;
  stroke-width: 3;
  stroke: #491EC4;
}
.transparent{
  opacity: 0.8;
}
</style>