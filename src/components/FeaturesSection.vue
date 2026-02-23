<template>
  <section class="features">

    <!-- GRAND TITRE -->
    <h2 class="main-title">
      Fonctionnalités Principales
    </h2>

    <!-- SOUS TITRE -->
    <h3 class="sub-title">
      Tout ce dont vous avez besoin pour gérer efficacement votre consortium
    </h3>

    <!-- CARTES -->
    <div class="cards">

      <!-- CARD 1 -->
      <div class="card">
        <div class="icon">👥</div>
        <h3>Gestion des Membres</h3>
        <p>
          Créez, modifiez et gérez facilement les profils des jeunes membres.
          Suivi complet des compétences et des parcours.
        </p>
      </div>

      <!-- CARD 2 -->
      <div class="card">
        <div class="icon">📊</div>
        <h3>Suivi & Statistiques</h3>
        <p>
          Tableaux de bord intuitifs avec filtres avancés et recherche
          pour suivre la progression de vos membres.
        </p>
      </div>

      <!-- CARD 3 -->
      <div class="card">
        <div class="icon">🚀</div>
        <h3>Développement des Talents</h3>
        <p>
          Programmes de formation, mentorat et opportunités
          pour développer les compétences des jeunes.
        </p>
      </div>

    </div>
  </section>
</template>

<style scoped>

.features {
  padding: 100px 10%;
  text-align: center;
  background: #e7e4e4;
}

/* Grand titre */
.main-title {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 15px;
}

/* Sous-titre */
.sub-title {
  font-size: 20px;
  color: #6b7280;
  margin-bottom: 60px;
}

/* Cartes */
.cards {
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Carte individuelle */
.card {
  background: white;
  padding: 23px;
  border-radius: 12px;
  width: 300px;
  text-align: left;
  box-shadow: 0 8px 25px rgba(0,0,0,0.08);
  transition: 0.3s ease;
}

.card:hover {
  transform: translateY(-8px);
}

/* Icône */
.icon {
  font-size: 28px;
  margin-bottom: 20px;
}

/* Titre carte */
.card h3 {
  font-size: 22px;
  margin-bottom: 15px;
}

/* Texte carte */
.card p {
  color: #4b5563;
  line-height: 1.6;
}

/* RESPONSIVE */
@media (max-width: 768px) {

  .main-title {
    font-size: 32px;
  }

  .sub-title {
    font-size: 16px;
  }

  .card {
    width: 100%;
  }

}

</style>