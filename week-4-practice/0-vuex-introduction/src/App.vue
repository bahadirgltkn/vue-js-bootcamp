<template>
  <div class="container">
    <user-list></user-list>
    <new-user></new-user>

  </div>
</template>

<script>
import UserList from '@/components/UserList'
import NewUser from '@/components/NewUser'

export default {
  name: 'App',
  components: {
    UserList,
    NewUser
  },
  
  //store'un içeriğini görmek için
  // created(){
  //   console.log(this.$store);
  // }
}
</script>
