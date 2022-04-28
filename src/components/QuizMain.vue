<template>
    <div class="ux-container">
        <div class="progress-container">
            <div
                v-for="(question, index) in questions"
                :key="index"
            >
                <div
                    class="progress-next"
                    :class="{ 'progress-previous' : activeQuestion > index, 'progress-active progress-previous' : activeQuestion === index }"
                >
                    {{index + 1}}
                </div>
            </div>
        </div>
        <div class="ux-header">
            {{questions[activeQuestion].text}}
        </div>
        <div class="buttons-container">
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
            <div
                v-if="hasAnsweredQuestion"
                class="ux-button next-button"
                @click="next"
            >
                <div v-if="activeQuestion < questions.length - 1">
                    Next
                </div>
                <div v-else>
                    Finish
                </div>
            </div>
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
            selectedAnswer: ""
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
        next() {

            const summaryItem = {
                question: this.questions[this.activeQuestion].text,
                selection: this.selectedAnswer
            }
            this.$emit("save-answer", summaryItem);
            this.selectedAnswer = ""

            if (this.activeQuestion === this.questions.length - 1) {
                this.$emit('finish');
                return
            }

            this.activeQuestion++;
        }
    },
}

</script>

<style lang="css" scoped>

.buttons-container {
    display: flex;
    flex-direction: column;
}

.ux-button-active {
    background-color: #a7e1e5;
    color: rgb(41, 52, 58);
}

.next-button {
    background-color: rgb(252, 252, 252);
    width: 70px;
    margin-top: 56px;
    color: rgb(41, 52, 58);
    align-self: flex-end;
}

.progress-container {
    display: flex;
    align-items: center;
    margin-left: 5px;
}

.progress-next {
    height: 30px;
    width: 30px;
    color: rgb(101, 115, 123);
    background: #ADB9C4;
    margin-bottom: 75px;
    border-radius: 10px;
    margin-right: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.progress-active {
    width: 35px;
    height: 35px;
    border: 1.5px solid white;
}

.progress-previous {
    background-color: #a7e1e5;
    color: rgb(41, 52, 58);
}

</style>