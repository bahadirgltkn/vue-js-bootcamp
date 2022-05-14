<template>
    <div class="container">
        <h2>Details</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, harum fuga, quae veniam eius rerum architecto eum distinctio fugiat esse quibusdam iure id similique facere molestiae. Voluptas doloremque odio illum.
        </p>
        
        <button class="btn btn-sm btn-primary me-5" @click="goHome">Go Home</button>
        <span>{{ $route.params.userId }}</span>

    </div>
</template>

<script>
export default {
    methods: {
        goHome(){
            this.$router.push("/");
        }
    }
}
</script>