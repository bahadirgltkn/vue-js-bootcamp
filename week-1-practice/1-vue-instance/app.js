// creating vue app

const app = Vue.createApp({
    data(){
        return {
            title: "Vue.js Data Title",
            content : "lorem  ipsum dolor sit amet",
            link : {
                url : "https://vuejs.org/",
                target : "_blank",
                content : "Vue js sitesi",
            },
            coords : {
                x : 0,
                y : 0
            },

        };
    },
    methods : {
        changeTitle1(){
            this.title = "New Title";
        },
        changeTitle2(newTitle){
            this.title = newTitle;
        },
        updateCoords(event){
            //console.log(event.x, event.y);
            this.coords = {
                x : event.x,
                y : event.y
            };
        }
    }
}).mount("#app");

// app.mount("#app");