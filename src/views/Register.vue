<template>
  <div class="register-container">

    <!-- Retour accueil -->
    <router-link to="/" class="back-home">
      ← Retour à l'accueil
    </router-link>

    <div class="register-card">

      <!-- Logo -->
      <img src="@/assets/logo.png" alt="Logo CJS" class="logo" />

      <h2>Inscription</h2>
      <p class="subtitle">
        Rejoignez le Consortium Jeunesse Sénégal
      </p>

      <!-- Formulaire -->
      <form @submit.prevent="handleRegister">

        <input
          type="text"
          placeholder="Prénom"
          v-model="firstName"
          required
        />
        <input
          type="text"
          placeholder="Nom"
          v-model="lastName"
          required
        />
        <input
          type="email"
          placeholder="votre.email@exemple.sn"
          v-model="email"
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          v-model="password"
          required
        />
        <input
          type="password"
          placeholder="Confirmer mot de passe"
          v-model="confirmPassword"
          required
        />

        <button type="submit">
          S'inscrire
        </button>
      </form>

      <p class="login-link">
        Vous avez déjà un compte ?
        <router-link to="/login">Connectez-vous</router-link>
      </p>

      <p class="test-info">
        Pour tester, utilisez n'importe quelle information
      </p>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const router = useRouter()

const handleRegister = () => {
  if (!firstName.value || !lastName.value || !email.value || !password.value) {
    alert("Veuillez remplir tous les champs")
    return
  }

  if (password.value !== confirmPassword.value) {
    alert("Les mots de passe ne correspondent pas")
    return
  }

  // Simulation inscription
  alert(`Bienvenue ${firstName.value} ! Inscription réussie.`)
  router.push('/login') // redirection vers login
}
</script>

<style scoped>
.register-container {
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

.register-card {
  background: white;
  padding: 40px;
  width: 400px;
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
  gap: 12px;
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

button {
  background: #50b150;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;
  transition: 0.3s;
}

button:hover {
  background: #205420;
}

.login-link {
  margin-top: 15px;
  font-size: 14px;
}

.login-link a {
  color: #50b150;
  font-weight: 600;
  text-decoration: none;
}

.test-info {
  font-size: 12px;
  margin-top: 10px;
  color: #888;
}
</style>