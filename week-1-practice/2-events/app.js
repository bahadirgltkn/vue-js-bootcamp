const app = Vue.createApp({
    data() {
        return {
            fullName1 : null,
            fullName2 : null,
            fullName3 : null,
        };
    },
    methods : {
        updateValue(event){
            this.fullName1 = event.target.value;
        }
    }
});
app.mount("#app");