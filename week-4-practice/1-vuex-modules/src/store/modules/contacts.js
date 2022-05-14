const contacts =  {

    namespaced : true,

    state : {
        list : ["Microfost", "Foggle", "Zapple", "Hacebook"]
    },

    mutations : {
        setItem(state, itemName){
            state.list.push(itemName);
        },

    },
    
    getters : {
        _itemList : state => state.list
    }

}

export default contacts;