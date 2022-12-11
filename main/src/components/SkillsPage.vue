<template>
<v-img src="@/assets/flowers.png">
    <v-container>
        <v-row>
            <v-col cols=12 xl=2 lg=3 md=3 sm=6 xs=12>
                <v-card color="grey lighten-4">
                    <v-card-title>What makes me different:</v-card-title>
                    <v-chip outlined v-for="(personalSkill, index) in personalSkills" :key="index" class="ma-2" :color="personalSkill.color" :text-color="personalSkill.color" label>
                    <v-icon left>{{personalSkill.icon}}</v-icon>
                    {{personalSkill.name}}
                    </v-chip>
                </v-card>
            </v-col>
            <v-col cols=12 xl=2 lg=3 md=3 sm=6 xs=12>
                <v-card color="green lighten-5">
                    <v-card-title>Languages:</v-card-title>
                    <v-chip v-for="(Language, index) in Languages" :key="index" class="ma-2" :color="Language.color" label :text-color="Language.text">
                    <strong>{{Language.name}}</strong>: {{Language.level}}
                    </v-chip>
                </v-card>
            </v-col>
           <!-- <v-col cols=12 xl=2 lg=3 md=3 sm=6 xs=12>
                <v-card color="cyan lighten-5">
                    <v-card-title>Working in Projects:</v-card-title>
                    <v-chip v-for="(projectManagin, index) in projectManaging" :key="index" class="ma-2" :color="projectManagin.color" label text-color="white">
                    <v-icon left>{{projectManagin.icon}}</v-icon>
                    {{projectManagin.name}} 
                    </v-chip>
                </v-card>
            </v-col> -->
            <v-col cols=12 xl=2 lg=3 md=3 sm=6 xs=12>
                <v-card color="grey lighten-4" height=100%>
                    <v-card-title>Analytical:</v-card-title>
                    <v-chip outlined v-for="(analytical, index) in analyticals" :key="index" class="ma-2" :color="analytical.color" label>
                    <v-icon left>{{analytical.icon}}</v-icon>
                    {{analytical.name}}
                    </v-chip>
                </v-card>
            </v-col>
            <v-col cols=12 xl=2 lg=3 md=3 sm=6 xs=12>
                <v-card color="teal lighten-5">
                    <v-card-title>Other:</v-card-title>
                    <v-chip v-for="(other, index) in other" :key="index" class="ma-2" :color="other.color" label text-color="white">
                    <v-icon left>{{other.icon}}</v-icon>
                    {{other.name}}
                    </v-chip>
                    <v-card-subtitle>to be continued, because I'm always eager to learn new skills</v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>

    </v-container>
</v-img>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "SkillsPage",
  data() {
    return {
      personalSkills: [
          {name:"strong willpower", color:"green", icon:"mdi-account-hard-hat-outline"},
          {name:"I stand up for my convictions", color:"blue", icon:"mdi-account-tie-woman"},
          //{name:"python", color:"pink", icon:"mdi-snake"},
          //{name:"R", color:"red", icon:"mdi-alpha-r"},
          //{name:"java", color:"grey", icon:"mdi-language-java"},
          //{name:"html", color:"orange", icon:"mdi-language-html5"},
          //{name:"css", color:"blue", icon:"mdi-language-css3"},
          //{name:"sql", color:"purple", icon:"mdi-database"},
    ],
    Languages:[
        {name:"german", level:"mother tongue",color:"orange lighten-2", text:"white"},
        {name:"english", level:"fluent",color:"red lighten-2", text:"white"},
        {name:"french", level:"basics",color:"blue lighten-2", text:"white"},
    ],
    projectManaging: [
        {name:"git", color:"cyan darken", icon:"mdi-git"},
        {name:"github", color:"cyan darken-1", icon:"mdi-github"},
        {name:"scrum", color:"cyan darken-2", icon:"mdi-sync-alert"},
        {name:"continuous development", color:"cyan darken-3", icon:"mdi-autorenew"},
        {name:"teamplayer", color:"cyan darken-4", icon:"mdi-account-group"},
    ],
    analyticals:[
        {name:"critical thinking", color:"", icon:"mdi-head-dots-horizontal-outline"},
        {name:"data analysis", color:"", icon:"mdi-database-search-outline"},
        {name:"statistics", color:"", icon:"mdi-chart-bar-stacked"},
        {name:"problem solving", color:"", icon:"mdi-lightbulb-outline"},
        {name:"R", color:"", icon:"mdi-alpha-r"},

        
    ],
    other: [ //organizational
        {name:"drivers license (B1)", color:"teal darken-3", icon:"mdi-car"},
        {name:"...", color:"", icon:"mdi-"},
    ],
      
    }}
})
</script>