<template>
  <section class="about">

    <!-- IMAGE FULL WIDTH SANS MARGE -->
    <div class="about-image">
      <img src="@/assets/about2.jpeg" alt="À propos du Consortium" />
    </div>

    <!-- CONTENU TEXTE -->
    <div class="about-content">

      <h2 class="about-title">
        À propos du Consortium
      </h2>

      <p>
        Le Consortium Jeunesse Sénégal est une initiative dédiée à l'épanouissement 
        et au développement des compétences des jeunes sénégalais. 
        Notre plateforme digitale facilite la gestion, le suivi et l'accompagnement de nos membres.
      </p>

      <p>
        Nous croyons en la puissance de la jeunesse sénégalaise et nous nous engageons 
        à fournir les outils et les ressources nécessaires pour transformer 
        les ambitions en réalité.
      </p>

      <ul class="about-list">
        <li>Plateforme 100% sécurisée et confidentielle</li>
        <li>Interface intuitive et facile à utiliser</li>
        <li>Support technique disponible 24/7</li>
      </ul>

    </div>

  </section>
</template>

<style scoped>

/* SECTION */
.about {
  background: white;
  padding: 80px 0;
}

/* IMAGE AVEC ESPACE SUR LES CÔTÉS */
.about-image {
  width: 90%;              /* espace droite et gauche */
  margin: 0 auto;          /* centre */
  border-radius: 30px;
  overflow: hidden;        /* garde l'image dans le radius */
  border: 5px solid #50b150; /* bordure verte */
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.about-image img {
  width: 100%;
  height: 450px;
  object-fit: cover;
  display: block;
}

/* TEXTE */
.about-content {
  padding: 80px 10%;
  text-align: left;   /* aligné à gauche */
}

.about-title {
  font-size: 52px;
  font-weight: bold;
  margin-bottom: 25px;
}

.about-content p {
  margin-bottom: 20px;
  line-height: 1.7;
  color: #494c4f;
  font-size: 27px;
}

/* LISTE */
.about-list {
  margin-top: 25px;
  padding: 0;
  list-style: none;
}

.about-list li {
  margin-bottom: 12px;
  padding-left: 25px;
  position: relative;
  font-weight: 500;

    font-size: 20px;

}

.about-list li::before {
  content: "✔";
  position: absolute;
  left: 0;
  color: #50b150;
  font-weight: bold;
}

/* RESPONSIVE */
@media (max-width: 768px) {

  .about-image img {
    height: 250px;
  }

  .about-title {
    font-size: 28px;
  }

  .about-content {
    padding: 60px 6%;
  }
}

</style>