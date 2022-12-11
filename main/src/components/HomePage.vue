<template>
<v-img src="@/assets/flowers.png">
  <div class="cv">
      <v-container>
          <v-row>
              <v-col a="2" cols="12" >
                   <v-card color="teal darken-3" dark>
                      <v-card-title class="text-h5">Hi, I'm Anna  ({{getAge("1998-08-20")}}), <br>
                        a master student of bio science with a passion for animal behaviour and conservation. </v-card-title>
                        <v-card-text class="text-h6">
                        On this website you can find out more about me, my interests and my background.
                        <!--As I'm always looking for an opportunity to become a better and more experienced biologist. -->
</v-card-text>
                        <v-card-subtitle> Get in touch with me: 
                            <a href="mailto:annamolls@gmail.com"><v-icon >mdi-email</v-icon></a>
                            <!--<a href="https://www.linkedin.com/in/anna-maria-molls"><v-icon >mdi-linkedin</v-icon></a>
                            <a href="https://www.instagram.com/hufferphil/"><v-icon >mdi-instagram</v-icon></a>
                            <a href="https://github.com/phuef/"><v-icon >mdi-github</v-icon></a>-->
                        </v-card-subtitle>
                   </v-card>
                   <v-spacer></v-spacer>
                </v-col>
                <!--<v-col a="2" cols="12" md="6" lg="6" xl="4">
                    <v-card>
                        <v-card-title>Get in touch with me here:</v-card-title>
                        <v-col cols="12">
                            <a href="https://www.linkedin.com/in/phil-hüffer"><v-icon large>mdi-linkedin</v-icon></a>
                            <a href="https://www.instagram.com/hufferphil/"><v-icon large>mdi-instagram</v-icon></a>
                            <a href="https://soundcloud.com/user-220332772"><v-icon large>mdi-soundcloud</v-icon></a>
                            <a href="mailto:phil.hueffer@gmail.com"><v-icon large>mdi-email</v-icon></a>
                        </v-col>
                        <v-card-subtitle> </v-card-subtitle>
                   </v-card>
                </v-col>
                -->
              
            </v-row>
      </v-container>
  </div>
</v-img>
</template>

<script>
  export default {
    name: 'HomePage',

    data: () => ({
      links:[
        {icon:"mdi.information-outline", name:"test"}
      ]
    }),
    methods:{
      getAge: function(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
}
  }}
</script>
