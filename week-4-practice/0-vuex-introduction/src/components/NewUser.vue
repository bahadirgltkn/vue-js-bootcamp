<template>
    <button @click="newElement">Yeni item ekle</button>
</template>

<script>
export default {
    methods:{
        newElement(){
            const item = {id: 6, title: "mouse", type:"teknoloji"};
            this.$store.dispatch('newItem', item);
            //this.$store.commit('newItem', item);
            // this.$store.state.itemList.push({id: 6, title: "mouse", type:"teknoloji"});
            // this.$store.state.fullName = new Date().getTime();
        }
    }
}
</script>