<template>
    <ul>
        <li v-for="item in techItems" :key="item">{{item.title}}</li>
    </ul>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    computed : {
        ...mapGetters({
            techItems : "_techItems"
        }),
    },
    
}
</script>