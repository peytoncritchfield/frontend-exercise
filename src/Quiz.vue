<template>
  <div class="main-screen">
    
    <quiz-home
      v-if="activeStep === quizSteps.home"
      @begin="activeStep = quizSteps.main"
    />

    <quiz-main
      v-if="activeStep === quizSteps.main"
      @finish="activeStep = quizSteps.summary"
      @save-answer="buildSummary"
    />

    <quiz-summary
      v-if="activeStep === quizSteps.summary"
      :summary="summary"
      @restart="restart"
    />

  </div>
</template>

<script>
import { quizSteps } from '@/constants.js';
import QuizHome from '@/components/QuizHome.vue';
import QuizMain from '@/components/QuizMain.vue';
import QuizSummary from '@/components/QuizSummary.vue';

export default {
  components: {
    QuizHome,
    QuizMain,
    QuizSummary,
  },
  data() {
    return {
      quizSteps,
      activeStep: quizSteps.home,
      summary: []
    };
  },
  methods: {
    buildSummary(summaryItem) {
      this.summary.push(summaryItem);
    },
    restart() {
      this.activeStep = quizSteps.home;
      this.summary = [];
    },
  }
};
</script>

<style>

* {
  margin: 0px;
  overflow: hidden;
}

.main-screen {
  color: rgb(255, 255, 255);
  background-color: #30414E;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  align-items: center;
}

</style>