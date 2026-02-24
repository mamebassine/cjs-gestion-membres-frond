<template>
  <div class="login-container">

    <!-- Retour accueil -->
    <router-link to="/" class="back-home">
      ← Retour à l'accueil
    </router-link>

    <div class="login-card">

      <!-- Logo -->
      <img src="@/assets/logo.png" alt="Logo CJS" class="logo" />

      <h2>Connexion</h2>
      <p class="subtitle">
        Accédez à votre espace Consortium Jeunesse Sénégal
      </p>

      <!-- Formulaire -->
      <form @submit.prevent="handleLogin">

        <input
          type="email"
          placeholder="votre.email@exemple.sn"
          v-model="email"
          required
        />

        <div class="password-field">
          <input
            type="password"
            placeholder="••••••••"
            v-model="password"
            required
          />
          <a href="#" class="forgot">Mot de passe oublié ?</a>
        </div>

        <button type="submit">
          Se connecter
        </button>
      </form>

      <p class="register-link">
        Vous n'avez pas de compte ?
        <router-link to="/register">Inscrivez-vous</router-link>
      </p>

      <p class="test-info">
        Pour tester, utilisez n'importe quelle adresse email et mot de passe
      </p>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

const handleLogin = () => {
  // Simulation connexion
  if (email.value && password.value) {
    router.push('/') // redirection vers accueil
  }
}
</script>

<style scoped>
.login-container {
  height: 100vh;
  background: #f3f4f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.back-home {
  position: absolute;
  top: 20px;
  left: 20px;
  text-decoration: none;
  color: #50b150;
  font-weight: 500;
}

.login-card {
  background: white;
  padding: 40px;
  width: 380px;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  text-align: center;
}

.logo {
  width: 80px;
  margin-bottom: 15px;
}

h2 {
  color: #50b150;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 14px;
  color: #666;
  margin-bottom: 25px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input {
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 14px;
}

input:focus {
  outline: none;
  border-color: #50b150;
}

.password-field {
  position: relative;
}

.forgot {
  font-size: 12px;
  color: #50b150;
  text-decoration: none;
  display: block;
  text-align: right;
  margin-top: 5px;
}

button {
  background: #50b150;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: #0f440f;
}

.register-link {
  margin-top: 20px;
  font-size: 14px;
}

.register-link a {
  color: #50b150;
  font-weight: 600;
  text-decoration: none;
}

.test-info {
  font-size: 12px;
  margin-top: 15px;
  color: #888;
}
</style>