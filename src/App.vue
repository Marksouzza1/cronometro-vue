<template>
 
  <Cronometro/>

</template>

<script>
import Cronometro from './views/Cronometro.vue';


  
    export default {

      components: {
        Cronometro
      }

    }

</script>

<style>

*{

  margin: 0;
  padding: 0;

}


body {
  height: 100vh;
  display: flex;
  background: linear-gradient(90deg, rgba(1,110,150,1) 1%, rgba(0,212,255,1) 80%);
  align-items: center;
  justify-content: center;
}

   
</style>
