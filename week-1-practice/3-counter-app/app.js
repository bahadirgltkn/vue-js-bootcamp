const app = Vue.createApp({
    data(){
        return {
            counter1 : 0,
            counter2 : 0,
            counter3 : 0,

        }
    },
    methods : {
        inc() { this.counter1++; },
        dec() { this.counter1--; },
        getCounter1Result(){
            console.log("counter 1 çalıştı");
            return this.counter1 > 5 ? 'Büyük' : 'Küçük';
        },
        getCounter2Result(){
            console.log("counter 2 çalıştı");
            return this.counter2 > 5 ? "Büyük" : "Küçük";
        }
    },
    computed : {
        getCounter3Result(){
            console.log("counter 3 çalıştı");
            return this.counter3 > 5 ? "Büyük" : "Küçük";
        }
    }
}).mount("#app");