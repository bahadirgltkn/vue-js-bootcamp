const products = {

    namespaced : true,
    
    state : {
        list : ["Fincan", "Kahve Makinesi", "Süpürge", "Blender"]
    },

    mutations : {
        setItem(state, productName){
            state.list.push(productName);
        },

    },
    
    getters : {
        _itemList : state => state.list
    }
}

export default products;

// daha genel isimler (generic) veriyoruz ki başka modüller için de kullanılabilir bir yapı oluşmuş olsun 