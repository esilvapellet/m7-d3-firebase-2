<template>
    <div class="user container">
        <header class="py-3">
            <h2>Bienvenido <strong>{{ this.username }}</strong></h2>
        </header>
        <main class="py-3">
            <p class="text-uppercase fw-bold py-3">Iniciaste sesión correctamente.</p>
            <i class="fa-regular fa-thumbs-up fs-1" style="color: #63E6BE;"></i>
        </main>
    </div>
</template>
<script>
export default {
    name: 'UserView',
    components: {

    },
    props: {
        username: String
    }
}
</script>
<style scoped lang="scss"></style>
