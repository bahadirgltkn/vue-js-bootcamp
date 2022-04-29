<template>
    <label for="todoText"></label>
    <!-- <input @keydown.enter="addNewTodo" type="text" id="todoText" placeholder="Bir şeyler yazınız"> -->
    <input v-model="todoText" @keydown.enter="addNewTodo(todoText)" type="text" id="todoText" placeholder="Bir şeyler yazınız">
</template>

<script>
export default {
    props : {
        // bu sekilde parent component içerisindeki fonksiyonu kullanma imkanına sahip olduk ve aynı işi yapan bir method daha yazmamış olduk
        addNewTodo : {
            type : Function,
            required : true
        }
    },

    data(){
        return {    
            todoText: null,
        };
    },

    methods:{
        // addNewTodo(){
        //     this.$emit("add-todo", this.todoText);
        //     this.todoText = null;
        // }
    }
}
</script>