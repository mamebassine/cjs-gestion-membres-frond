<template>
  <section class="hero">
    
    <!-- Petit texte vert -->
    <h4 class="subtitle">
      Plateforme de Gestion de la Jeunesse
    </h4>

    <!-- Grand titre noir -->
    <h1>
      Ensemble pour l'épanouissement de la jeunesse sénégalaise
    </h1>

    <!-- Texte moyen noir -->
    <p class="description">
      Une plateforme moderne pour gérer, suivre et accompagner les jeunes talents du Sénégal.
      Développez vos compétences, connectez-vous et construisez votre avenir.
    </p>

    <!-- Boutons -->
    <div class="buttons">
      <button class="btn-primary">Commencer gratuitement</button>
      <button class="btn-outline">Se connecter</button>
    </div>

  </section>
</template>

<style scoped>

.hero {
  max-width: 900px;     /* largeur contrôlée */
  margin: 0 auto;       /* centre le bloc */
  padding: 100px 20px;
  color: #000;
  text-align: left;     /* tout aligné à gauche */
}

/* Petit texte vert */
.subtitle {
  font-size: 16px;
  color: #1b5e20;
  margin-bottom: 15px;
  background: #cdf1cf;
  padding: 9px 19px;
  border-radius: 20px;
  display: inline-block; /* important pour garder la taille du badge */
}

/* Grand titre */
.hero h1 {
  font-size: 58px;
  font-weight: bold;
  margin-bottom: 20px;
}

/* Description */
.description {
  font-size: 22px;
  margin-bottom: 40px;
  line-height: 1.6;
  color: #4f4d4d;
  
}

/* Boutons */
.buttons {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: flex-start; /* aligné à gauche */
}

.btn-primary {
  background: #50b150;
  color: white;
  padding: 12px 22px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

.btn-outline {
  border: 2px solid #1b5e20;
  color: #1b5e20;
  padding: 12px 22px;
  border-radius: 6px;
  background: transparent;
  cursor: pointer;
  font-size: 16px;
}

/* Responsive */
@media (max-width: 768px) {
  .hero {
    padding: 70px 8%;
  }

  .hero h1 {
    font-size: 28px;
  }

  .description {
    font-size: 16px;
  }

  .buttons {
    flex-direction: column;
    gap: 15px;
  }

  .btn-primary,
  .btn-outline {
    width: 100%;
  }
}

</style>