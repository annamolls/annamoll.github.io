<template>
      <v-img src="@/assets/flowers.png">

    <v-container>
        <div  >
      <v-timeline
        dense
        color="teal darken-3"
        align-top
        class="cv"
      >
        <v-timeline-item
          color="teal darken-3"
        >
        <template v-slot:icon>
          <v-avatar>
              <img src='https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=White&eyeType=Surprised&eyebrowType=Default&mouthType=ScreamOpen&skinColor=Pale'/>              </v-avatar>
        </template>
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>20th August 1998</strong>
            </v-col>
            <v-col>
              <strong>Birth</strong> <v-icon>mdi-cake</v-icon>
              <div class="text-caption mb-2">
                <!--<v-icon small>mdi-message-outline</v-icon> <i>"wow he has big feet"</i> - midwife quote, right after my birth
                <br>--><v-icon small>mdi-map-marker-outline</v-icon> Heinsberg
              </div>
            </v-col>
          </v-row>
        </v-timeline-item>
        <v-timeline-item
          color="blue"
          
        >
        <template v-slot:icon>
          <v-avatar>
<img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Blank&hairColor=BlondeGolden&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Pink&eyeType=Default&eyebrowType=Default&mouthType=Serious&skinColor=Pale'
/>            </v-avatar>
        </template>
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>2005 - 2009</strong>
            </v-col>
            <v-col>
              <strong>Elementary School</strong> <v-icon>mdi-school</v-icon>
              <div class="text-caption mb-2">
                <!--<v-icon small>mdi-message-outline</v-icon><i> "poet and thinker"</i> - my class teacher's prediction of what I become
                <br>--><v-icon small>mdi-map-marker-outline</v-icon> <a href="">Irgendeine Grundschule</a>, Geilenkirchen
                </div>
            </v-col>
          </v-row>
        </v-timeline-item>
          <v-timeline-item
          color="blue"
          
        >
        <template v-slot:icon>
          <v-avatar>
<img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairBob&accessoriesType=Blank&hairColor=BlondeGolden&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray02&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Pale'
/>            </v-avatar>
        </template>
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>2009 - 2017</strong>
            </v-col>
            <v-col>
              <strong>High School</strong> <v-icon>mdi-school</v-icon>
              <div class="text-caption mb-2">
                <v-icon small>mdi-notebook-multiple</v-icon> <i>Biology, English, ?  and German</i> - my graduation subjects<br> 
                <v-icon small>mdi-map-marker-outline</v-icon> <a href="">Gymnasium</a>, Geilenkirchen
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
              <strong>2017 - 2022</strong>
            </v-col>
            <v-col>
              <strong>B.Sc. in Biology</strong> <v-icon>mdi-school</v-icon>
              <div class="text-caption mb-2">
                <v-icon small>mdi-notebook-multiple</v-icon> <i> A male Capuchin group </i> - what my bachelor thesis was about <br> 
                <v-icon small>mdi-book-education-outline</v-icon> <i>1.2 </i> - the grade of my bachelor thesis <br> 
                <v-icon small>mdi-information</v-icon> <a href="">more information</a><br>
                <v-icon small>mdi-map-marker-outline</v-icon> University Münster
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
              <strong>2022 - today</strong>
            </v-col>
            <v-col>
              <strong>M.Sc. Biology</strong> <v-icon>mdi-school-outline</v-icon>
              <div class="text-caption mb-2">
                <v-icon small>mdi-information</v-icon> <a href="">more information</a><br>
                <v-icon small>mdi-map-marker-outline</v-icon> University Münster
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
  name: "AcademicCareerPage",
})
</script>
<style>
.cv{
  background-color:rgba(255, 255, 255, 0.8);
}
</style>