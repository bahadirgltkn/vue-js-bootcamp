<template>
  <div class="container">
    <h3 class="text-center"> Todo App</h3>
    <hr class="my-2">
    <AddSection :addNewTodo="addNewTodo" @add-todo="addNewTodo" />
    <TodoList @delete-todo-item="deleteItem" :myData="todoList"/>
    <ResultBar :itemCount="todoList.length"/>
   
  </div>
</template>

<script>
import AddSection from "@/components/AddSection";
import TodoList from "@/components/TodoList";
import ResultBar from "@/components/ResultBar";

export default {
  components:{
    AddSection,
    TodoList,
    ResultBar
  },

  data(){
    return {
      todoList : [
        {id:1, text:"Bootcamp 1"},
        {id:2, text:"Bootcamp 2"},
        {id:3, text:"Bootcamp 3"},
        {id:4, text:"Bootcamp 4"},
        {id:5, text:"Bootcamp 5"},
      ]
    };
  },
  methods:{
    deleteItem(todoItem){
      this.todoList = this.todoList.filter(t => t != todoItem);
      // silmek istedigimiz item filter a takılacak ve onu yeni listeye eklemeyecek

      // silme islemini istersek bu sekilde de yapabiliriz
      // const matchedIndex = this.todoList.findIndex(i => i === todoItem);
      // if(matchedIndex > -1)
      //   this.todoList.splice(this.todoList[matchedIndex], 1);
    },
    addNewTodo(todo){
      this.todoList.push({
        id : new Date().getTime(),
        text : todo
      });
    },
  }
}
</script>
