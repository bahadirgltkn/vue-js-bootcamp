import {createStore} from 'vuex'

const store = createStore({
    state : {
        user : {
            name: 'Bahadır',
            lname: 'Gültekin',
            age: 24,
            address: "istanbul",
            tckn: 135235125,
        },
        fullName : "Walter White",
        theme: 'dark',
        permissions : [1,2,3,4,5,6],
        userList : ["Can","Ozan","Metin","Defne","Deniz"],
        itemList : [
            {id: 1, title: "Masa", type: "mobilya"},
            {id: 2, title: "Sandalye", type: "mobilya"},
            {id: 3, title: "Monitor", type: "teknoloji"},
            {id: 4, title: "Bilgisayar", type: "teknoloji"},
            {id: 5, title: "Bardak", type: "plastik"},
        ]
    },

    mutations: {
        newItem(state, item){
            state.itemList.push(item);
        }
    },

    actions: {
        // newItem(context, item){
        //     setTimeout(() => {
        //         context.commit('newItem', item);
        //     }, 2000);
        // }

        //destructive olarak tanımlama
        // context objesi içerisindeki bir alana erişmek için kullanmış olduk
        newItem({commit}, item){
            setTimeout(() => {
                commit('newItem', item);
            }, 2000);
        }
    },

    getters:{
        _techItems: state => state.itemList.filter(i => i.type === "teknoloji"),
        
        _activeUser(state){
            const tmpUser = {
                ...state.user
            };
            delete tmpUser.password;
            return tmpUser;
        }
    }
});

export default store;