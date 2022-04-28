<template>
    <div class="ux-container">
        <div class="ux-header">
            Welcome, please enjoy this quiz written in Vue
        </div>
        <div
            class="ux-button ux-navigation-button"
            @click="$emit('begin')"
        >
            Begin
            <quiz-icon class="icon-margin" />
        </div>
    </div>
</template>

<script>
import QuizIcon from '@/components/svg/QuizIcon.vue'

export default {
    name: "quiz-home",
    components: {
        QuizIcon,
    }
}

</script>

<style lang="css" scoped>

.icon-margin {
    margin-left: 10px;
}

</style>