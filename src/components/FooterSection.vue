<template>
  <footer class="footer">

    <!-- SECTION CTA -->
    <div class="cta">
      <h2>Prêt à rejoindre le mouvement ?</h2>
      <p>
        Inscrivez-vous dès maintenant et commencez votre parcours avec le Consortium Jeunesse Sénégal
      </p>
      <button class="cta-button">
        Créer un compte gratuitement
      </button>
    </div>

    <!-- CONTENU FOOTER -->
    <div class="footer-content">

      <!-- LOGO -->
      <div class="footer-section">
        <h3 class="logo">CJS</h3>
        <p>Consortium Jeunesse Sénégal - Ensemble pour l'avenir</p>
      </div>

      <!-- LIENS RAPIDES -->
      <div class="footer-section">
        <h4>Liens rapides</h4>
        <ul>
          <li>Fonctionnalités</li>
          <li>À propos</li>
          <li>Contact</li>
        </ul>
      </div>

      <!-- RESSOURCES -->
      <div class="footer-section">
        <h4>Ressources</h4>
        <ul>
          <li>Documentation</li>
          <li>Support</li>
          <li>Blog</li>
        </ul>
      </div>

      <!-- CONTACT -->
      <div class="footer-section">
        <h4>Contact</h4>
        <ul>
          <li>Dakar, Sénégal</li>
          <li>contact@cjs.sn</li>
          <li>+221 33 123 45 67</li>
        </ul>
      </div>

    </div>

    <!-- COPYRIGHT -->
    <div class="copyright">
      © 2026 Consortium Jeunesse Sénégal. Tous droits réservés.
    </div>

  </footer>
</template>

<script>
export default {
  name: "FooterSection"
}
</script>

<style scoped>

/* FOOTER GLOBAL */
.footer {
  background: #080808;
  color: white;
}

/* CTA */
.cta {
  text-align: center;
  padding: 60px 20px;
  background: #50b150;
}

.cta h2 {
  font-size: 30px;
  margin-bottom: 15px;
}

.cta p {
  font-size: 17px;
  margin-bottom: 25px;
  color: #f3f4f6;
}

.cta-button {
  background: white;
  color: #111827;
  padding: 12px 24px;
  border-radius: 6px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.cta-button:hover {
  background: #111827;
  color: white;
}

/* FOOTER CONTENT */
.footer-content {
  display: flex;
  justify-content: space-between;
  gap: 40px;
  padding: 50px 10%;
  flex-wrap: wrap;
}

.footer-section {
  flex: 1;
  min-width: 200px;
}

.footer-section h4 {
  margin-bottom: 15px;
  font-size: 18px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section li {
  margin-bottom: 10px;
  color: #d1d5db;
  cursor: pointer;
  transition: 0.3s;
}

.footer-section li:hover {
  color: #50b150;
}

.logo {
  font-size: 24px;
  margin-bottom: 10px;
}

/* COPYRIGHT */
.copyright {
  text-align: center;
  padding: 20px;
  border-top: 1px solid rgba(255,255,255,0.1);
  font-size: 14px;
  color: #9ca3af;
}

/* RESPONSIVE */
@media (max-width: 768px) {

  .cta h2 {
    font-size: 22px;
  }

  .cta p {
    font-size: 15px;
  }

  .footer-content {
    flex-direction: column;
    text-align: center;
  }

}

</style>