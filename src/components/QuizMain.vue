<template>
    <div class="ux-container">
        <div class="ux-header">
            {{questions[activeQuestion].text}}
        </div>
        <div
            v-for="(answer, index) in questions[activeQuestion].answers"
            :key="index"
        >
            <div
                class="ux-button"
                @click="selectAnswer(answer)"
                :class="{ 'ux-button-active': selectedAnswer === answer }"
            >
                {{answer}}
            </div>
        </div>
        <div v-if="hasAnsweredQuestion" class="ux-button next-button" @click="nextQuestion">
            Next
        </div>
    </div>
</template>

<script>
import questions from "@/questions.js";

export default {
    name: "quiz-main",
    props: {
        selections: Array,
    },
    data() {
        return {
            questions,
            activeQuestion: 0,
            selectedAnswer: ''
        }
    },
    computed: {
        hasAnsweredQuestion() {
            return this.selectedAnswer && this.selectedAnswer.length;
        }
    },
    methods: {
        selectAnswer(answer) {
            this.selectedAnswer = answer;

        },
        nextQuestion() {
            this.$emit('save-answer', this.selectedAnswer);
        }
    },
}

</script>

<style lang="css" scoped>

.next-button {
    background-color: white;
    width: 70px;
    align-self: flex-end;
    margin-right: 3px;
    margin: 36px 3px 0px 0px;
}

</style>