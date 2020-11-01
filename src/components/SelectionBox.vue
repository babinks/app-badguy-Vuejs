<template>
  <div class="border border-black text-center m-4 p-4">
    Selection : {{ selection.length }}
    <span v-if="numberSelection">traficant</span>
    <span v-else>traficants</span>

    <ul>
      <li v-for="traficant in selection" :key="traficant.name">{{ traficant.name }}</li>
    </ul>

  </div>
  
</template>

<script>
export default {
  name: "selection-box",
  props: ['selection'],
  computed: {
    numberSelection(){
      if(this.selection.length < 2){
        return true
      }
      return false
    }
  }
}
</script>

<style>
</style>