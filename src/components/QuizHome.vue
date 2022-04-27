<template>
    <div class="ux-container">
        <div>
            Welcome, please enjoy this quiz written in Vue
        </div>
        <div
            class="ux-button"
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