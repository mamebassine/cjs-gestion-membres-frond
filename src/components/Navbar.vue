<template>
  <nav class="navbar">
    <!-- LOGO -->
    <div class="logo">
      <img src="@/assets/logo.png" alt="CJS Logo" class="logo-img" />
      <div class="logo-text">
        <strong>CJS</strong>
        <span>Consortium Jeunesse Sénégal</span>
      </div>
    </div>

    <!-- MENU DESKTOP -->
    <ul class="links">
      <li>Fonctionnalités</li>
      <li>À propos</li>
      <li>Contact</li>
    </ul>

    <!-- BOUTONS DESKTOP -->
    <div class="auth-buttons">
      <button class="btn-outline">Connexion</button>
      <button class="btn-primary">Inscription</button>
    </div>

    <!-- HAMBURGER MOBILE -->
    <div class="hamburger" @click="toggleMenu">
      {{ menuOpen ? "✖" : "☰" }}
    </div>

    <!-- MENU MOBILE -->
    <div v-if="menuOpen" class="mobile-menu">
      <ul>
        <li>Fonctionnalités</li>
        <li>À propos</li>
        <li>Contact</li>
      </ul>

      <div class="mobile-buttons">
        <button class="btn-outline">Connexion</button>
        <button class="btn-primary">Inscription</button>
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
/* NAVBAR */
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
  color: gray;
  font-size: 18px;
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
  border: none;
  cursor: pointer;
}

.btn-outline {
  border: 1px solid #1e3a8a;
  padding: 8px 15px;
  border-radius: 5px;
  background: transparent;
  cursor: pointer;
}

/* HAMBURGER */
.hamburger {
  display: none;
  font-size: 28px;
  cursor: pointer;
  margin-left: auto;
}

/* MOBILE MENU */
.mobile-menu {
  display: none;
}

/* ========================= */
/* RESPONSIVE */
/* ========================= */
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

  .mobile-buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 15px;
  }

  .mobile-buttons button {
    width: 100%;
  }
}
</style>