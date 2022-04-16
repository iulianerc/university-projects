<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <span class="font-weight-bold" style="font-size: 20px;">Iulianerc</span>
      </div>
      
      <v-spacer></v-spacer>
      
<!--      <v-icon size="40">mdi-menu</v-icon>-->
    </v-app-bar>
    <v-main>
      <app-body></app-body>
    </v-main>
  </v-app>
</template>

<script>
import AppBody from "@/components/AppBody/AppBody";

export default {
  name: 'App',
  
  components: {
    AppBody
  },
  
  data: () => ({
    //
  }),
};
</script>
