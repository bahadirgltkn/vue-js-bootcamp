const app = Vue.createApp({
    data(){
        return {
            search : "",
            itemList : ["elma", "armut", "karpuz", "kiraz", "çilek"],
            //filteredList : [],
        };
    },
    methods : {
        searchList(){
            //this.filteredList = this.itemList.filter(i => i.includes(this.search));

        }
    },
    computed : {
        filteredList(){
            // search degerindeki her değişiklikte filteredList çalışacaktır
            return this.filteredList = this.itemList.filter(i => i.includes(this.search));
        }
    }
}).mount("#app");