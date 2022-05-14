<template>
<div class="form-area card border-success p-2">
    <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input type="text" v-model="userData.title" class="form-control" id="exampleFormControlInput1" placeholder="iclibimesele">
    </div>
    <div class="mb-3">
        <label for="url" class="form-label">Url</label>
        <input type="text" v-model="userData.url" class="form-control" id="exampleFormControlInput1" 
        placeholder="https://...">
    </div>
    <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea class="form-control" v-model="userData.description" id="description" rows="3"></textarea>
    </div>

    <div class="d-flex justify-content-end align-items-center">
        <button class="btn btn-sm btn-secondary me-2" @click="$router.push({name: 'HomePage'})">İptal</button>
        <button class="btn btn-sm btn-success" @click="onSave">Kaydet</button>
    </div>
</div>
</template>

<script>
export default {

    data(){
        return{
            userData: {
                title: null,
                url: null,
                description: null
            }
        }
    },

    methods: {
        onSave(){
            console.log(this.userData)
            this.$axios.post("http://localhost:3000/bookmarks", this.userData).then(this.resetData(), this.$router.push("/"));
        },

        resetData(){
            Object.keys(this.userData).forEach(key => (this.userData[key] = null));
        }
    }
}
</script>