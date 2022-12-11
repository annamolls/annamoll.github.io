<template>
  <v-app heigth=100%>
    <v-app-bar
      color="teal darken-3"
      dark
      elevation="4"
      absolute
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <router-link to="/animals">
        <v-img max-height="56" max-width="56" src="../src/assets/logo.svg"></v-img> 
      </router-link>     
      <v-toolbar-title>Anna-Maria Molls</v-toolbar-title>

      <v-spacer></v-spacer>

      
       <v-btn icon class="routerLink" v-for="navItem in navItems" :key="navItem.route" :to="navItem.route" color="white"> 
           <v-icon color="white">{{navItem.icon}}</v-icon>
</v-btn>
      
    </v-app-bar>

     <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          color="teal darken-3"
          active-class="light-gray--text text--accent-4"
        >
          <router-link v-for="navItem in navItems" :key="navItem.route" class="routerLink" :to="navItem.route">
            <v-list-item>
              <v-list-item-icon><v-icon v-text="navItem.icon"></v-icon></v-list-item-icon>
              <v-list-item-title v-text="navItem.name"></v-list-item-title>
            </v-list-item>
          </router-link>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

      <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
    drawer: false,
    group: null,
    navItems:[
      {route: "/academic-career", name:"Academic Career", icon:"mdi-school-outline"},
      {route: "/working-experience", name:"Work Experience", icon:"mdi-briefcase-outline"},
      {route: "/skills", name:"Skills", icon:"mdi-tools"},
      {route: "/animals-i-worked-with", name:"Animals I worked with", icon:"mdi-penguin"},
    ]
  }),
  watch: {
      group () {
        this.drawer = false
      },
    },
};
</script>
<style>
.routerLink{
     text-decoration: none;
     
      }
</style>
