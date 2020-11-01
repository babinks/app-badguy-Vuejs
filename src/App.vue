<template>

  <nav-bar
    @change-component="changeSelectedComponent"
  >
  </nav-bar>
  
  <keep-alive include="traficant-view">
    <component 
      :is="selectedComponent"
      v-bind="currentProps"
      @child-event="selectionUpdate"
    >
    </component>
  </keep-alive>
  
</template>

<script>
import PlayerView from './components/TraficantView.vue'
import SelectionList from './components/SelectionList.vue'
import NavBar from './components/navigation/NavBar.vue'
export default {
  name: 'App',
  components: {
    TraficantView,
    SelectionList,
    NavBar
  },
  data() {
    return {
      selectedComponent: 'traficant-view',
      traficantSelection: []
    }
  },
  computed: {
    currentProps() {
      if(this.selectedComponent == "selection-list"){
        return { selection: this.traficantSelection }
      }
      return false
    },
  },
  methods: {
    changeSelectedComponent(value) {
      this.selectedComponent = value
    },
    selectionUpdate(value) {
      this.traficantSelection.push(value)
    }
  }
}
</script>

<style>
 
</style>