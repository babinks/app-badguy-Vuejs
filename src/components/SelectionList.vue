<template>
  <div class="container w-4/5 mx-auto mt-4">
    <h1 class="text-lg font-bold">Ma sélection</h1>

    <div v-if="selection.length == 0">
      <p>Aucun traficant sélectionné</p>
    </div>
    <div v-else>
      <div
        v-for="traficant in selection"
        :key="traficant.name" 
        class="border border-black my-4 p-2"
      >
        <h3>{{ traficant.name }} ({{ traficant.fortune }})</h3>
        <span>Né le {{ traficant.birthDate }}</span>
        
      </div>
    </div>

  </div>
  
</template>

<script>
export default {
  name: "selection-list",
  props: ['selection']
}
</script>

<style>
</style>