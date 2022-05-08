<template>

  <div class="container">
    <div class="d-flex justify-content-between align-items-center">
      <button @click="activeComponent = 'RedComponent'" class="red">Red</button>
      <button @click="activeComponent = 'GreenComponent'" class="green">Green</button>
      <button @click="activeComponent = 'BlueComponent'" class="blue">Blue</button>
    </div>

    <!-- <red-component  v-if="activeComponent == 'RedComponent'" class="mb-2"></red-component>
    <green-component v-if="activeComponent == 'GreenComponent'" class="mb-2"></green-component>
    <blue-component v-if="activeComponent == 'BlueComponent'" class="mb-2"></blue-component> -->

    <keep-alive>
      <component :is="activeComponent" />
    </keep-alive>
  </div>


</template>

<script>
import RedComponent from '@/components/RedComponent'
import GreenComponent from '@/components/GreenComponent'
import BlueComponent from '@/components/BlueComponent'

export default {
  components : {
    RedComponent,
    GreenComponent,
    BlueComponent
  },

  data(){
    return {
      activeComponent : 'RedComponent'
    }
  }
  
}
</script>