const app = Vue.createApp({
    data(){
        return {
            name : "Bahadır",
            age : 24,
            imageLink : "https://lh3.googleusercontent.com/-EayHV_hIyNyBjVo-4Ris0y7wix6VC4aq_58N9YIqheErr-uFK7GmWZnzbQUJJG5lSCGxvVGVNmXYFy57aTGZ_68zg=w128-h128-e365-rj-sc0x00ffffff",
            
        };
    },
    methods :{
        getRandom(){
            return Math.random();
        }
    }
}).mount("#exercise");