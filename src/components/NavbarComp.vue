<template>
    <nav class="navbar bg-primary navbar-expand-lg p-4 text-ligth" data-bs-theme="dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="/"><i class="fa-solid fa-user-secret"></i> Control de
                <strong>Usuarios</strong></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link"><i class="fa-solid fa-house"></i> Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/sign-up" class="nav-link" v-if="!user"><i class="fa-solid fa-key"></i> Sign
                            Up</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/login" class="nav-link" v-if="!user"><i class="fa-solid fa-user-lock"></i>
                            Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/user" class="nav-link" v-if="user"><i class="fa-solid fa-user"></i>
                            User Site</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/login" class="nav-link" @click.prevent="logout" v-if="user"><i
                                class="fa-solid fa-right-from-bracket"></i> Logout</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
import { auth, signOut } from '@/auth'
import { mapState } from 'vuex';

export default {
    name: "NavbarComp",
    components: {
    },
    computed: {
        ...mapState(["user"]),
    },
    methods: {
        async logout() {
            try {
                await signOut(auth);
                alert("Se ha cerrado la sesión exitosamente.");
                this.$router.push("/");

            } catch (error) {
                console.log(error);
                alert("No se pudo cerrar la sesión. Intenta nuevamente.");
            }
        }
    }
}
</script>