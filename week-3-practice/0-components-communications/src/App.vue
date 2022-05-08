<template>
  <div class="container">
    <h3>Bu benim containerım</h3>
    <!-- <user-section :userList="userList" @new-item="userList.push($event)"></user-section> -->
    <user-section></user-section>
  </div>
</template>

<script>
import UserSection from '@/components/UserSection'

export default {
  components : {
    UserSection
  },

  data(){
    return {
      provideData : {
        userList : ["Bahadır", "Halis", "Enes"],
      }
      // userList : ["Bahadır", "Halis", "Enes"]
    }
  },

  methods : {
    newItem(item){
      this.provideData.userList.push(item);
    }
  },

  provide(){
    return {
      userList : this.provideData.userList,
      newItem : this.newItem
    }

  }
}
</script>