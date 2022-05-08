<template>
    <h3 class="bg-blue text-white">Blue Component</h3>
</template>

<script>
export default {
    mounted (){
        console.log("Blue mounted");
    },
    activated(){
        console.log("Blue activeted");
    },
    deactivated(){
        console.log("Blue deactiveted");
    }
}
</script>