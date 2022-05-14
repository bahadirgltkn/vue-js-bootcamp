<template>
    <div class="container">
        <h2>Home</h2>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam dicta culpa commodi optio doloremque quas amet quis quae consequuntur ullam voluptatibus nesciunt quisquam, unde odit, eligendi porro exercitationem, sint saepe.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi inventore fugiat quo eveniet tempore, dignissimos magnam harum, blanditiis, iste officia nobis corrupti nam neque. Aliquam excepturi animi iste suscipit vitae?
        </p>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, odio natus ullam assumenda amet, consequuntur quod officia corrupti saepe, deserunt quae? Fuga recusandae id veritatis odio, aut voluptates sit? Iusto vero nobis expedita officia error inventore numquam? Odit, dolorum et?
        </p>
        <input type="text" @keydown.enter="goToDetails">

    </div>

</template>

<script>
export default {
    methods:{
        goToDetails(e){
            // this.$router.push(`/details/${e.target.value}`);

            this.$router.push({
                name: 'DetailsPage',
                params: {
                    userId: e.target.value  
                },
                query: {
                    type: 'detailAuth',
                    user: 'bahadir'
                }
            });
        },

    }
}
</script>