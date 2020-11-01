<template>

  <div class="flex">
    <div class="w-1/5">
      <selection-box
        :selection="selection"
      >
      </selection-box>
    </div>
    

    <div class="w-4/5 mt-2">
      <traficant-card 
        v-for="(traficant, index) in team.traficant"
        :key="index"
        :traficant="traficant"
        @add-traficant="addTraficantToSelection"
        >
      </traficant-card>
    </div>
    

  </div>
    
</template>

<script>
import teamData from '../data/traficants.json'
import TraficantCard from './TraficantCard.vue'
import SelectionBox from './SelectionBox.vue'
export default {
  name: "traficant-view",
  components: {
    TraficantCard,
    SelectionBox
  },
  data() {
    return {
      team: teamData,
      selection: []
    }
  },
  methods: {
    addTraficantToSelection(traficant){
      this.selection.push(traficant)
      this.$emit('child-event', traficant)
    }
  }
}
</script>

<style>
</style>