<template>
  <nav class="navbar">
    <!-- LOGO -->
    <router-link to="/" class="logo">
      <img src="@/assets/logo.png" alt="CJS Logo" class="logo-img" />
      <div class="logo-text">
        <strong>CJS</strong>
        <span>Consortium Jeunesse Sénégal</span>
      </div>
    </router-link>

    <!-- MENU DESKTOP -->
    <ul class="links">
      <li><router-link to="/fonctionnalites">Fonctionnalités</router-link></li>
      <li><router-link to="/about">À propos</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>

    <!-- BOUTONS DESKTOP -->
    <div class="auth-buttons">
      <router-link to="/login" class="btn-outline">Connexion</router-link>
      <router-link to="/register" class="btn-primary">Inscription</router-link>
    </div>

    <!-- HAMBURGER MOBILE -->
    <div class="hamburger" @click="toggleMenu">
      {{ menuOpen ? "✖" : "☰" }}
    </div>

    <!-- MENU MOBILE -->
    <div v-if="menuOpen" class="mobile-menu">
      <ul>
        <li><router-link to="/fonctionnalites" @click="toggleMenu">Fonctionnalités</router-link></li>
        <li><router-link to="/about" @click="toggleMenu">À propos</router-link></li>
        <li><router-link to="/contact" @click="toggleMenu">Contact</router-link></li>
      </ul>

      <div class="mobile-buttons">
        <router-link to="/login" class="btn-outline" @click="toggleMenu">Connexion</router-link>
        <router-link to="/register" class="btn-primary" @click="toggleMenu">Inscription</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue"

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10%;
  background: white;
  position: relative;
}

/* LOGO */
.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
}

.logo-img {
  width: 50px;
  height: 50px;
}

.logo-text {
  margin-left: 10px;
}

.logo-text span {
  font-size: 18px;
  color: #000;
}

/* LINKS */
.links {
  display: flex;
  gap: 25px;
  list-style: none;
}

.links a {
  text-decoration: none;
  color: gray;
  font-size: 18px;
}

.links a.router-link-active {
  color: #1e3a8a;
  font-weight: bold;
}

/* BUTTONS */
.auth-buttons {
  display: flex;
  gap: 20px;
}

.btn-primary {
  background: #50b150;
  color: white;
  padding: 8px 15px;
  border-radius: 5px;
  text-decoration: none;
}

.btn-outline {
  border: 1px solid #1e3a8a;
  padding: 8px 15px;
  border-radius: 5px;
  background: transparent;
  text-decoration: none;
  color: #1e3a8a;
}

/* HAMBURGER */
.hamburger {
  display: none;
  font-size: 28px;
  cursor: pointer;
  margin-left: auto;
}

/* MOBILE */
.mobile-menu {
  display: none;
}

@media (max-width: 768px) {

  .links,
  .auth-buttons {
    display: none;
  }

  .hamburger {
    display: block;
  }

  .navbar {
    flex-wrap: wrap;
  }

  .mobile-menu {
    display: block;
    width: 100%;
    margin-top: 15px;
    background: white;
    padding: 10px 0;
  }

  .mobile-menu ul {
    list-style: none;
    padding: 0;
  }

  .mobile-menu li {
    padding: 10px 0;
    border-bottom: 1px solid #eee;
  }

  .mobile-menu a {
    text-decoration: none;
    color: gray;
  }

  .mobile-buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 15px;
  }

  .mobile-buttons a {
    width: 100%;
    text-align: center;
  }
}
</style>