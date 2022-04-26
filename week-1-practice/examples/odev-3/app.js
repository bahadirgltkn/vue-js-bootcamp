const app = Vue.createApp({
    data(){
        return{
            value : 10,

        };
    },
    computed : {
        result(){
            return this.value < 33 ? "henüz bitmedi" : "tamamlandı";
        },
        
    },
    beforeUpdate(){
       
        setTimeout(() => {
            this.value = 0;
        }, 5000);
        
    }
}).mount("#app");