<template>
    <div class="ux-container">
        <div class="ux-header">
            Welcome, please enjoy this quiz written in Vue
        </div>
        <div
            class="ux-button ux-button-active"
            @click="$emit('begin')"
        >
            BEGIN
        </div>
    </div>
</template>

<script>

export default {
    name: "quiz-home"
}

</script>

<style lang="css" scoped>


</style>