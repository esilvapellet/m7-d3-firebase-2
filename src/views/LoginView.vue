<template>
  <div class="login container">
    <main class="py-3">
      <FormLogin />
    </main>
  </div>
</template>
<script>
import FormLogin from '@/components/FormLogin.vue'

export default {
  name: 'LoginView',
  components: {
    FormLogin
  }
}
</script>
<style scoped lang="scss"></style>
