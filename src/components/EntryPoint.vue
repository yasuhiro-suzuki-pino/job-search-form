<template>
  <div>
    <!-- このコンポーネントは空です。Google Optimizeによってリダイレクトされます -->
  </div>
</template>

<script>
export default {
  name: 'EntryPoint',
  mounted() {
    // デフォルトのフォームにリダイレクト（Google Optimizeでオーバーライドされます）
    this.$router.push('/form1')
  }
}
</script>