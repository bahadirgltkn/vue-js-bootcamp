const app = Vue.createApp({
  data() {
    return {
      value: "",
    };
  },
  methods : {
    showAlert(){
      alert();
    }
  }
});
app.mount("#exercise");
