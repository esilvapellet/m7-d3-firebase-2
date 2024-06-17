<template>
    <div class="py-3">
        <h2>Iniciar sesión</h2>
    </div>
    <div class="row justify-content-center py-3">
        <form class="col-12 col-md-6" @submit.prevent="login">
            <div class="form-floating mb-3">
                <input type="email" class="form-control mt-3" id="floatingInput" placeholder="name@example.com"
                    v-model="email" required>
                <label for="floatingInput" class="mb-5">Correo electrónico</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                    v-model="password" required>
                <label for="floatingPassword">Contraseña</label>
            </div>
            <div class="mb-3">
                <button class="btn btn-primary text-white p-3"><i class="fa-solid fa-right-from-bracket"></i>Iniciar
                    sesión</button>
            </div>
        </form>
    </div>
</template>
<script>
import { auth, signInWithEmailAndPassword } from '@/auth'
export default {
    name: 'FormLogin',
    data() {
        return {
            email: '',
            password: '',
            username: ''
        }
    },
    methods: {
        async login() {
            try {
                console.log(this.email, this.password)
                await signInWithEmailAndPassword(auth, this.email, this.password);
                alert('Usuario autenticado con éxito');
                this.$router.push('/user');
            } catch (error) {
                console.log(error);
                alert('Datos incorrectos. Intenta nuevamente.')
            }
        }
    }
}
</script>
<style scoped lang="scss"></style>