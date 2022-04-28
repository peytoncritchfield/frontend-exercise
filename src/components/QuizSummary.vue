<template>
    <div class="ux-container">
        <div class="ux-header">
            Summary
        </div>
            <div
                v-for="(item, index) in summary"
                :key="index"
            >
            <div class="summary-container">
                <div class="questions">
                    {{item.question}}
                </div>
                <div class="selections">
                    {{item.selection}}
                </div>
            </div>
        </div>
        <div class="restart-button-container">
            <div
                class="ux-button ux-navigation-button"
                @click="$emit('restart')"
            >
                Restart
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "quiz-summary",
    props: {
        summary: {
            type: Array,
            required: true
        }
    }
}

</script>

<style lang="css" scoped>

.summary-container {
    display: flex;
    margin-bottom: 35px;
    padding-left: 50px;
}

.questions {
    width: 300px;
    text-align: start;
}

.selections {
    width: 150px;
    margin-left: 50px;
}

.restart-button-container {
    width: 450px;
    display: flex;
    justify-content: flex-end;
}

</style>