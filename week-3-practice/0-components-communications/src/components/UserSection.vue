<template>
    <!-- <list-section :userList="userList"></list-section> -->
    <list-section></list-section>
    <!-- <add-section @new-item="$emit('new-item', $event)"></add-section> -->
    <add-section></add-section>
</template>

<script>
import ListSection from '@/components/ListSection'
import AddSection from '@/components/AddSection'

export default {
    props : ["userList"],
    emit : ['new-item'],
    components: {
        ListSection,
        AddSection
    }
}
</script>
