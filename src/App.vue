<script setup lang="ts">
import CTASection from './components/ctaSection/CTASection.vue'
import FeaturesSection from './components/featureSection/FeaturesSection.vue'
import HeroSection from './components/heroProject/HeroSection.vue'
import ProjectsGallery from './components/projectGallery/ProjectsGallery.vue'

const handleExplore = () => {
  const gallery = document.querySelector('.projects-gallery')
  gallery?.scrollIntoView({ behavior: 'smooth' })
}

const handleContact = () => {
  window.location.href = 'mailto:contato@exemplo.com'
}
</script>

<template>
  <div class="app">
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-logo">
          <span class="logo-icon">🎨</span>
          <span class="logo-text">3D<span class="logo-highlight">Store</span></span>
        </div>
        <div class="nav-links">
          <a href="#home" class="nav-link">Início</a>
          <a href="#projects" class="nav-link">Projetos</a>
          <a href="#features" class="nav-link">Recursos</a>
          <a href="#contact" class="nav-link">Contato</a>
        </div>
        <button class="nav-cta">Começar Agora</button>
      </div>
    </nav>

    <main class="main-content">
      <HeroSection />
      <ProjectsGallery />
      <FeaturesSection />
      <CTASection @explore="handleExplore" @contact="handleContact" />
    </main>

    <footer class="footer">
      <div class="footer-container">
        <div class="footer-brand">
          <div class="footer-logo">
            <span class="logo-icon">🎨</span>
            <span class="logo-text">3D<span class="logo-highlight">Store</span></span>
          </div>
          <p class="footer-description">
            Projetos 3D premium para designers, desenvolvedores e criadores de conteúdo.
          </p>
          <div class="footer-social">
            <a href="#" class="social-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                />
              </svg>
            </a>
            <a href="#" class="social-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#" class="social-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                />
              </svg>
            </a>
          </div>
        </div>

        <div class="footer-links">
          <div class="footer-column">
            <h4 class="footer-title">Produtos</h4>
            <a href="#" class="footer-link">Modelos 3D</a>
            <a href="#" class="footer-link">Texturas</a>
            <a href="#" class="footer-link">Materiais</a>
            <a href="#" class="footer-link">Pacotes</a>
          </div>

          <div class="footer-column">
            <h4 class="footer-title">Recursos</h4>
            <a href="#" class="footer-link">Documentação</a>
            <a href="#" class="footer-link">Tutoriais</a>
            <a href="#" class="footer-link">Blog</a>
            <a href="#" class="footer-link">Suporte</a>
          </div>

          <div class="footer-column">
            <h4 class="footer-title">Empresa</h4>
            <a href="#" class="footer-link">Sobre Nós</a>
            <a href="#" class="footer-link">Carreiras</a>
            <a href="#" class="footer-link">Parceiros</a>
            <a href="#" class="footer-link">Contato</a>
          </div>

          <div class="footer-column">
            <h4 class="footer-title">Legal</h4>
            <a href="#" class="footer-link">Privacidade</a>
            <a href="#" class="footer-link">Termos</a>
            <a href="#" class="footer-link">Licenças</a>
            <a href="#" class="footer-link">Cookies</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="footer-copyright">© 2026 3D Store. Todos os direitos reservados.</p>
        <div class="footer-badges">
          <span class="badge">🔒 Pagamento Seguro</span>
          <span class="badge">✅ Garantia de 30 Dias</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background: #0a0a0f;
  color: white;
  overflow-x: hidden;
}

.app {
  width: 100%;
  min-height: 100vh;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(10, 10, 15, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 900;
}

.logo-icon {
  font-size: 2rem;
}

.logo-text {
  color: white;
}

.logo-highlight {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.9375rem;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: white;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-cta {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 0.9375rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
}

.nav-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(102, 126, 234, 0.4);
}

.main-content {
  padding-top: 80px;
}

.footer {
  background: rgba(255, 255, 255, 0.02);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 4rem 2rem 2rem;
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 4rem;
  margin-bottom: 3rem;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 900;
}

.footer-description {
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
  max-width: 400px;
}

.footer-social {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(102, 126, 234, 0.5);
  color: white;
  transform: translateY(-3px);
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-title {
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}

.footer-link {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 0.9375rem;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: white;
}

.footer-bottom {
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-copyright {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.875rem;
}

.footer-badges {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.badge {
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
}

@media (max-width: 968px) {
  .nav-links {
    display: none;
  }

  .footer-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .footer-links {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 640px) {
  .footer-links {
    grid-template-columns: 1fr;
  }
}
</style>
