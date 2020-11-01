<template>
  <div class="bg-blue-300 p-2">
    <a href="#" @click="changeComponent('traficant-view')">Tous les traficant</a> | 
    <a href="#" @click="changeComponent('selection-list')">Ma sélection</a>
  </div>
</template>

<script>
export default {
  name: "nav-bar",
  methods: {
    changeComponent(value) {
      this.$emit('change-component', value)
    }
  }
}
</script>

<style>
</style>
© 20