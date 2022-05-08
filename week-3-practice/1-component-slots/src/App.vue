<template>
  <modal-component>

    <!-- v-slot: ile birlikte de slotlarımızı isimlendirmek mümkündür -->
    <!-- <template v-slot:title>
      <h3>Slot ile gönderilen title</h3>
    </template> -->
    
    <template #title>
      <h3>Slot ile gönderilen title</h3>
    </template>

    <template #content>
      <p class="text-green">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil minima dolor nobis perspiciatis reprehenderit eveniet?</p>
    </template>

    <template #default>
      <span>Default olarak bulunacak bir slottur</span>
    </template>

  </modal-component>
</template>

<script>
import ModalComponent from '@/components/ModalComponent'

export default {
  components: {
    ModalComponent,
  }  
}
</script>