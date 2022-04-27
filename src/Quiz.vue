<template>
  <div class="main-screen">
    Welcome, please enjoy this quiz written in Vue.js
    <div class="ux-button">
      begin
    </div>
  </div>
</template>

<script>
export default {
  props: {
    questions: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeQuestion: 0,
    };
  }
};
</script>

<style>

* {
  margin: 0px;
  overflow: hidden;
}

.main-screen {
  color: rgb(210, 235, 247);
  background-color: rgb(41, 52, 58);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.ux-button {
  margin-top: 10px;
  text-align: center;
  width: 50px;
  height: 20px;
  color: rgb(41, 52, 58);
  background-color: rgb(210, 235, 247);
  border-radius: 8px;
  cursor: pointer;
}

</style>
