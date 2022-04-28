<template>
  <div class="main-screen">
    
    <quiz-home
      v-if="activeStep === quizSteps.home"
      @begin="activeStep = quizSteps.main"
    />

    <quiz-main
      v-if="activeStep === quizSteps.main"
      @finish="activeStep = quizSteps.summary"
      :quizSelection="quizSelections"
    />

    <quiz-summary
      v-if="activeStep === quizSteps.summary"
      @restart="activeStep = quizSteps.home"
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
      quizSelections: []
    };
  },
};
</script>

<style>

* {
  margin: 0px;
  overflow: hidden;
}

.main-screen {
  color: rgb(163, 194, 208);
  background-color: #30414E;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  padding-top: 280px;
  align-items: center;
}

</style>
