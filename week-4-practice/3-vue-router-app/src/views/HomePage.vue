<template>
<div class="card p-2">
    <div class="d-flex justify-content-end">
        <button class="btn btn-sm btn-primary" @click="$router.push({name:'NewBookmark'})">+ New Bookmark</button>
    </div>

    <table v-if="bookmarkList.length > 0" class="table table-hover table-striped mt-2">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Url</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(bookmark, index) in bookmarkList" :key="bookmark.id">
          <td>{{ index + 1 }}</td>
          <td>{{bookmark.title}}</td>
          <td>
            <a :href="bookmark.url" target="_blank">{{bookmark.url}}</a>
          </td>
          <td>
              <button @click="deleteBookmark(bookmark)" class="btn btn-sm btn-danger">Delete</button>
          </td>
        </tr>  
      </tbody>
    </table>
    <div v-else class="card bg-danger mt-2 text-white text-center ">
      <span>There is no registered bookmark</span>
    </div>  
</div>
</template>

<script>
export default {

  data(){
    return {
      bookmarkList: []
    }
  },

  // activated(){
  //   this.$axios.get("http://localhost:3000/bookmarks").then(bookmarks_list_reponse => {
  //     this.bookmarkList = bookmarks_list_reponse.data || [];
  //   });
  // },

  beforeCreate(){
    this.$axios.get("http://localhost:3000/bookmarks").then(bookmarks_list_reponse => {
      this.bookmarkList = bookmarks_list_reponse.data || [];
    });
  },

  methods: {
    deleteBookmark(bookmark){
      this.$axios.delete(`http://localhost:3000/bookmarks/${bookmark.id}`).then(delete_response => {
        if(delete_response.status === 200){
          this.bookmarkList = this.bookmarkList.filter(b => b.id != bookmark.id); 
        }
      })
    }
  }
}
</script>