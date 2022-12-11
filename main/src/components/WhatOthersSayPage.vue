<template>
    <v-container>
      <v-row>
            <v-card
              color="teal darken-3"
              dark
              max-width="400"
            >
            <v-img
              class="white--text align-end"
              height="200px"
              src="@/assets/fantasy.png"
            >
              <v-card-title>
                <v-icon
                  large
                  left
                  v-for="i in 5"
                  :key="i"
                  color="yellow"
                >
                  mdi-star
                </v-icon>
                <span color="yellow" class="text-h6 font-weight-light">5/5</span>
              </v-card-title>
            </v-img>
          

          <v-card-text class="text-h5 font-weight-bold">
            "Can recommend"
          </v-card-text>

          <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-avatar color="grey darken-3">
                <v-img
                  class="elevation-6"
                  alt=""
                  src="https://avataaars.io/?topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=Blonde&facialHairType=BeardLight&facialHairColor=Blonde&clotheType=Hoodie&clotheColor=Gray02&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Pale"
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>My boyfriend</v-list-item-title>
              </v-list-item-content>

              <v-row
                align="center"
                justify="end"
              >
                <v-icon color="red" class="mr-1">
                  mdi-heart
                </v-icon>

              </v-row>
            </v-list-item>
          </v-card-actions>
        </v-card>
        <v-card
             
              color="#26c6da"
              dark
              max-width="400"
            >
            <v-img
              class="white--text align-end"
              height="200px"
              src="@/assets/dog_puppy.jpg"
            >
              <v-card-title>
                <v-icon
                  large
                  left
                  v-for="i in 5"
                  :key="i"
                  color="white"
                >
                  mdi-star-outline
                </v-icon>
                <span color="yellow" class="text-h6 font-weight-light">0/5</span>
              </v-card-title>
            </v-img>
          

          <v-card-text class="text-h5 font-weight-bold">
            "Please get away from me. Why are you touching me?"
          </v-card-text>

          <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-avatar >
                <v-icon color="white" class="mr-1">
                  mdi-dog
                </v-icon>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>Every dog near to me</v-list-item-title>
              </v-list-item-content>

            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "WhatOthersSayPage",
})
</script>