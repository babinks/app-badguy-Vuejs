<template>
  <div 
    class="border m-2 p-2 flex justify-between"
    :class="healthStyle"
  >
    <div>
      <h1 class="text-lg font-bold">{{ traficantName }}</h1>
      <p> {{ traficantPositionUp }} </p>
    </div>
    <base-button
      text="Sélectionner"
      @click="addToSelection"
    >
    </base-button>
  </div>
</template>

<script>
export default {
  name: "traficant-card",
  props: ['traficant'],
  computed: {
    traficantName(){
      if(this.traficant.name.split('.').length > 1){
        return this.traficant.name.split('.')[1]
      }
      return this.traficant.name;
    },
    traficantPositionUp(){
      return this.traficant.position.toUpperCase()
    },
    isInjured() {
      if(this.traficant.health == "out"){
        return true
      }
      return false
    },
    healthStyle() {
      return { 
        'bg-gray-600': this.isInjured, 
        'border-white': this.isInjured, 
        'border-black': !this.isInjured 
      }
    }
  },
  methods: {
    addToSelection() {
      this.$emit('add-traficant', this.traficant)
    }
  }
}
</script>

<style scoped>
</style>
