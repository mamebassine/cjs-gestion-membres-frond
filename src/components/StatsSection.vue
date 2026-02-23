<template>
  <section class="stats">
    <!-- Container pour les 4 chiffres -->
    <div class="stats-numbers">
      <div class="stat">
        <h2>500+</h2>
        <p>Jeunes inscrits</p>
      </div>
      <div class="stat">
        <h2>50+</h2>
        <p>Programmes</p>
      </div>
      <div class="stat">
        <h2>98%</h2>
        <p>Satisfaction</p>
      </div>
      <div class="stat">
        <h2>+45%</h2>
        <p>Croissance mensuelle</p>
      </div>
    </div>

    <!-- Image grande sous les chiffres -->
    <div class="stat-image">
      <img src="@/assets/imageDev.jpeg" alt="Illustration" class="main-image" />
    </div>
  </section>
</template>

<style scoped>
.stats {
  display: flex;
  flex-direction: column; /* chiffres en haut, image en bas */
  align-items: center;
  padding: 60px 10%;
  background: #f3f4f6;
  gap: 40px; /* espace entre chiffres et image */
}

/* Chiffres alignés horizontalement */
.stats-numbers {
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap; /* pour petits écrans */
  gap: 20px;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 10px;
}

.stat h2 {
  color: #1e3a8a;
  font-size: 28px;
  margin: 5px 0;
}

.stat p {
  color: #555;
  font-size: 14px;
}

/* Image unique en bas */
.stat-image {
  width: 100%;
}

.main-image {
  width: 100%;        /* prend toute la largeur du conteneur */
  max-width: 100%;    /* limite à 100% pour pas dépasser le conteneur */
  border-radius: 10px;
  object-fit: cover;  /* garde proportions et couvre le conteneur */
  display: block;     /* supprime l’espace blanc sous l’image */
}
</style>