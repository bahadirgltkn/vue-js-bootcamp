const app = Vue.createApp({
    data(){
        return {
            todoList : [
                {id:1, text: "Vue Bootcamp Hafta 1", completed : false},
                {id:2, text: "Vue Bootcamp Hafta 2", completed : false},
                {id:3, text: "Vue Bootcamp Hafta 3", completed : false},
                {id:4, text: "Vue Bootcamp Hafta 4", completed : false},
                {id:5, text: "Vue Bootcamp Hafta 5", completed : false},
                {id:6, text: "Vue Bootcamp Hafta 6", completed : false},
            ],

        };
    },
    methods : {
        addTodo(event){
            this.todoList.push({
                id : new Date().getTime(),
                text : event.target.value,
                completed : false
            });
            event.target.value = "";
        },
        removeItem(todoItem){
            this.todoList = this.todoList.filter(todo => todo.id != todoItem.id);
            //this.todoList = this.todoList.filter(todo => todo != todoItem);

            // sil butonuna tıklanıldığında id değeri tıklanılan item id'sine eşit olmayanlar filtrelenir ve bu sayede istenilen id'ye sahip todo listeden çıkartılmış olur
        }
    },
    computed : {
        completedItemCount(){
            return this.todoList.filter(todo => todo.completed).length;
        },
        uncompletedItemCount(){
            return this.todoList.filter(todo => !todo.completed).length;
        },
    }
}).mount("#app");