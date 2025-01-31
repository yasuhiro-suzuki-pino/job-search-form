<template>
  <div class="form-container">
    <!-- Step 1 -->
    <div v-if="currentStep === 1">
      <h2>お仕事を探していますか？</h2>
      <div class="button-group">
        <button @click="handleAnswer('yes')">はい</button>
        <button @click="handleAnswer('no')">いいえ</button>
      </div>
    </div>

    <!-- Step 2 -->
    <div v-if="currentStep === 2">
      <h2>名前を教えてください</h2>
      <input 
        type="text" 
        v-model="formData.name" 
        placeholder="お名前"
      >
      <button @click="nextStep">次へ</button>
    </div>

    <!-- Step 3 -->
    <div v-if="currentStep === 3">
      <h2>電話番号を教えてください</h2>
      <input 
        type="tel" 
        v-model="formData.phone" 
        placeholder="電話番号"
      >
      <button @click="submit">申し込む</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentStep: 1,
      formData: {
        isSearching: null,
        name: '',
        phone: ''
      }
    }
  },
  methods: {
    handleAnswer(answer) {
      this.formData.isSearching = answer === 'yes'
      this.nextStep()
    },
    nextStep() {
      this.currentStep++
    },
    submit() {
      this.$router.push('/completed')
    }
  }
}
</script>

<style scoped>
.form-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}

.button-group {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
}

input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  font-size: 16px;
}
</style>