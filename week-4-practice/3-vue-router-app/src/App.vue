<template>
  <div>
    <app-footer></app-footer>

    <div class="container p-2">
      <h3 class="text-center">Bookmark List</h3>
      <div class="row">
        <div class="col-8 offset-2">
          <router-view></router-view>
        </div>
      </div>
    </div>

  </div>
  
</template>

<script>
import AppFooter from '@/components/AppFooter';

export default {
  components: {
    AppFooter
  }
}
</script>
