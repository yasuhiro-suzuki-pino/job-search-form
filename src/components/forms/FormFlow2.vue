<template>
  <div class="form-container">
    <!-- バージョン2のフォーム - デザインや文言を変更 -->
    <div v-if="currentStep === 1">
      <h2>Form2 転職をお考えですか？</h2>
      <div class="button-group">
        <button @click="handleAnswer('yes')" class="primary-button">興味あります</button>
        <button @click="handleAnswer('no')" class="secondary-button">今は考えていません</button>
      </div>
    </div>

    <div v-if="currentStep === 2">
      <h2>お名前をご入力ください</h2>
      <input 
        type="text" 
        v-model="formData.name" 
        placeholder="例：山田太郎"
        class="styled-input"
      >
      <button @click="nextStep" class="primary-button">次のステップへ</button>
    </div>

    <div v-if="currentStep === 3">
      <h2>ご連絡先をご入力ください</h2>
      <input 
        type="tel" 
        v-model="formData.phone" 
        placeholder="例：090-1234-5678"
        class="styled-input"
      >
      <button @click="submit" class="primary-button">送信する</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormFlow2',
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
.primary-button {
  background-color: #4CAF50;
  color: white;
  padding: 12px 24px;
  border-radius: 4px;
  border: none;
}

.secondary-button {
  background-color: #f5f5f5;
  color: #333;
  padding: 12px 24px;
  border-radius: 4px;
  border: 1px solid #ddd;
}

.styled-input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 8px 0 16px;
}
</style>