<template>
      <v-img src="@/assets/flowers.png">

    <v-container>
        <div class="cv">
      <v-timeline
        dense
        color="teal darken-3"
        align-top
      >
        <v-timeline-item
          color="blue"
          
        >
        <template v-slot:icon>
          <v-avatar>
<img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairBob&accessoriesType=Blank&hairColor=BlondeGolden&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Gray02&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Pale'
/>            </v-avatar>
        </template>
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>11/2015 - 08/2017</strong>
            </v-col>
            <v-col>
              <strong>Tutor</strong> <v-icon>mdi-school</v-icon>
              <div class="text-caption mb-2">
                <v-icon small>mdi-notebook-multiple</v-icon> Provided helpful teaching supports to students struggling in school.<br>
                <v-icon small>mdi-account-child-outline</v-icon> Worked with students in grades 5-9 to strengthen and support their writing and reading skills. <br>
                <v-icon small>mdi-map-marker</v-icon> Bischöfliches Gymnasium St. Ursula, Geilenkirchen

                </div>
            </v-col>
          </v-row>
        </v-timeline-item>
        <v-timeline-item
          color="blue"
          
        >
        <template v-slot:icon>
          <v-avatar>
<img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairBob&accessoriesType=Blank&hairColor=BlondeGolden&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Gray02&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Pale'
/>            </v-avatar>
        </template>
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>06/2017 - 02/2018</strong>
            </v-col>
            <v-col>
              <strong>Waitress</strong> <v-icon>mdi-school</v-icon>
              <div class="text-caption mb-2">
                <v-icon small>mdi-map-marker</v-icon> Landcafé Immendorf, Geilenkirchen
                </div>
            </v-col>
          </v-row>
        </v-timeline-item>
        <v-timeline-item
          color="blue"
          right
        >
        <template v-slot:icon>
          <v-avatar>
<img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairBob&accessoriesType=Blank&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Pale'
/>            </v-avatar>
        </template>
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>09/2018 - 06/2021</strong>
            </v-col>
            <v-col>
              <strong>Market vendor</strong> <v-icon>mdi-school-outline</v-icon>
              <div class="text-caption mb-2">
                <v-icon small>mdi-information</v-icon> worked at a biological fruit and vegetable market stand<br>
                <v-icon small>mdi-basket</v-icon> tasks were setting up the stand, organizing items, customer conversations and selling items <br>
                <v-icon small>mdi-map-marker-outline</v-icon> Bioland Norbert Meyer, Münster 

                </div>
            </v-col>
          </v-row>
        </v-timeline-item>
         <v-timeline-item
          color="blue"
          
        >
        <template v-slot:icon>
          <v-avatar>
<img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairBob&accessoriesType=Blank&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Pale'
/>            </v-avatar>
        </template>
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>07/2021 - today</strong>
            </v-col>
            <v-col>
              <strong>Zoo guide</strong> <v-icon>mdi-penguin</v-icon>
              <div class="text-caption mb-2">
                <v-icon small>mdi-information</v-icon> preparing and guiding tours through the zoo for school classes, families and company celebrations<br>
                <v-icon small>mdi-cake</v-icon> children birthday party programs <br>
                <v-icon small>mdi-cake</v-icon> run information stand <br>
                <v-icon small>mdi-information</v-icon> help at bigger zoo events <br>
                <v-icon small>mdi-festival</v-icon> plan and manage own events <br>
                
                <v-icon small>mdi-map-marker-outline</v-icon> Allwetterzoo, Münster 

                </div>
            </v-col>
          </v-row>
        </v-timeline-item>
      </v-timeline>
    </div>
    </v-container>
      </v-img>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "WorkingExperiencePage",
})
</script>