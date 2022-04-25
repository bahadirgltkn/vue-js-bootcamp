const app = Vue.createApp({
    data(){
        return {
            boxClass : "border",
            showBorder1 : false,
            showBorder2 : false,
            redBG: false,
            blueBG:false,
            bgColor: "cyan",

        };
    },
    computed : {
        boxClasses() {
            return { border : this.showBorder2, blue : this.blueBG}
        }
    }
});

app.mount("#app");