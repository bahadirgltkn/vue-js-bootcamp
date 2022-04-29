<!-- 
  -- .vue uzantılı dosyalar bir component belirtmektedir 
  
  -- component içerisinde temelde 3 tane yapı bulundurmaktadır
      -- template  ( vuejs 2 de template mutlaka olması gerikiyor fakta vue3'te olmasa da hata almıyoruz)
      -- script
      -- style

  -- vue2 de template içerisisinde bir tane parent(root) element olmalıdır ve her şey onun içerisinde olmalıdır diğer türlü hata vermektedir
            
            <h3></h3>         Bu şekilde bir kullanıma izin vermeyecektir
            <p></p> 
            
      
            <div>             Doğru kullanım şekli bu olmaldır (vue2 için)
              <h3></h3>
              <p></p>
            </div>

  -- babel'ın yaptığı ecmascript standartlarına göre convert işlemi yapmaktır

  -- componenti template içerisine eklerken isimlendirme noktasında Vue js esneklik göstermektedir
    -- <CounterItem></CounterItem>
    -- <CounterItem/>
    -- <counter-item/>
    -- <counterItem/> 

-->

<template>
  <app-header></app-header>
  <div class="container">
    <h3>Bu benim ilk vue cli uygulamam</h3>
    <p>Component ve Vue CLI konuları</p>
  </div>
  <counter-item/>

</template>

<script>
// local register
// burada yaptığımız import işlemini daha global bir şekilde yapıyor olmamız lazım
import CounterItem from "@/components/CounterItem.vue";

export default{
  components: {
    CounterItem : CounterItem
  },
};
</script>