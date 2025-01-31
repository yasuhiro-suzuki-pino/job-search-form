<template>
    <div class="form-container">
      <!-- バージョン1のフォーム -->
      <div v-if="currentStep === 1">
        <h2>Form1 お仕事を探していますか？</h2>
        <div class="button-group">
          <button @click="handleAnswer('yes')">はい</button>
          <button @click="handleAnswer('no')">いいえ</button>
        </div>
      </div>
  
      <div v-if="currentStep === 2">
        <h2>名前を教えてください</h2>
        <input 
          type="text" 
          v-model="formData.name" 
          placeholder="お名前"
        >
        <button @click="nextStep">次へ</button>
      </div>
  
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
    name: 'FormFlow1',
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