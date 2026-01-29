<template>
  <section class="cta-section">
    <div class="cta-container">
      <div class="cta-content">
        <div class="cta-badge">
          <span>🚀 Começar Agora</span>
        </div>
        <h2 class="cta-title">
          Pronto Para Criar Algo
          <span class="gradient-text">Incrível?</span>
        </h2>
        <p class="cta-description">
          Junte-se a milhares de criadores que já transformaram suas ideias em realidade com nossos
          projetos 3D premium.
        </p>
        <div class="cta-buttons">
          <button class="btn btn-primary" @click="handleExplore">
            <span>Explorar Projetos</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <button class="btn btn-outline" @click="handleContact">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
              />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>Entrar em Contato</span>
          </button>
        </div>
        <div class="cta-trust">
          <div class="trust-avatars">
            <div class="avatar" v-for="i in 4" :key="i">
              <span>{{ ['🎨', '💻', '🎯', '✨'][i - 1] }}</span>
            </div>
            <div class="avatar-count">+5k</div>
          </div>
          <div class="trust-text">
            <p class="trust-title">Mais de 5.000 criadores</p>
            <div class="trust-rating">
              <span v-for="i in 5" :key="i" class="star">⭐</span>
              <span class="rating-text">4.9/5.0</span>
            </div>
          </div>
        </div>
      </div>
      <div class="cta-visual">
        <div class="visual-card card-main">
          <div class="card-icon">🎨</div>
          <div class="card-text">
            <span class="card-label">Projetos Vendidos</span>
            <span class="card-value">10,482</span>
          </div>
          <div class="card-chart">
            <div class="chart-bar" style="height: 40%"></div>
            <div class="chart-bar" style="height: 60%"></div>
            <div class="chart-bar" style="height: 80%"></div>
            <div class="chart-bar" style="height: 100%"></div>
            <div class="chart-bar" style="height: 70%"></div>
          </div>
        </div>
        <div class="visual-card card-secondary">
          <div class="notification">
            <div class="notification-icon">✅</div>
            <div class="notification-content">
              <span class="notification-title">Nova Venda!</span>
              <span class="notification-desc">Projeto 3D vendido agora</span>
            </div>
          </div>
        </div>
        <div class="visual-card card-tertiary">
          <div class="badge-item">
            <span class="badge-emoji">🏆</span>
            <span class="badge-text">Top Seller</span>
          </div>
        </div>
      </div>
    </div>

    <div class="particles">
      <div class="particle" v-for="i in 20" :key="i" :style="getParticleStyle(i)"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCtaSection } from './useCtaSection'

const emit = defineEmits<{
  explore: []
  contact: []
}>()

const { getParticleStyle } = useCtaSection()

const handleExplore = () => {
  emit('explore')
}

const handleContact = () => {
  emit('contact')
}
</script>

<style scoped>
.cta-section {
  padding: 8rem 2rem;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05));
}

.cta-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 50%, rgba(118, 75, 162, 0.15) 0%, transparent 50%);
  pointer-events: none;
}

.cta-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 4rem;
  position: relative;
  z-index: 1;
}

.cta-content {
  flex: 1;
  max-width: 600px;
}

.cta-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  font-size: 0.875rem;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
  animation: float 3s ease-in-out infinite;
}

.cta-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}

.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.cta-description {
  font-size: 1.125rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2.5rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.btn {
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
}

.btn-outline {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.btn-outline:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.cta-trust {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  backdrop-filter: blur(10px);
}

.trust-avatars {
  display: flex;
  align-items: center;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
  border: 2px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  margin-left: -12px;
  transition: all 0.3s ease;
}

.avatar:first-child {
  margin-left: 0;
}

.avatar:hover {
  transform: translateY(-4px) scale(1.1);
  z-index: 10;
}

.avatar-count {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border: 2px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  margin-left: -12px;
}

.trust-text {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.trust-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  margin: 0;
}

.trust-rating {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.star {
  font-size: 0.875rem;
}

.rating-text {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  margin-left: 0.25rem;
}

.cta-visual {
  flex: 1;
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.visual-card {
  position: absolute;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  animation: float 6s ease-in-out infinite;
}

.card-main {
  width: 280px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: 0s;
}

.card-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.card-text {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 1.5rem;
}

.card-label {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
}

.card-value {
  font-size: 2rem;
  font-weight: 800;
  color: white;
}

.card-chart {
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  height: 60px;
}

.chart-bar {
  flex: 1;
  background: linear-gradient(180deg, #667eea, #764ba2);
  border-radius: 4px;
  animation: growBar 2s ease-out infinite;
}

@keyframes growBar {
  0%,
  100% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0.8);
  }
}

.card-secondary {
  top: 10%;
  right: 5%;
  animation-delay: 2s;
}

.notification {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.notification-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
}

.notification-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.notification-title {
  font-size: 0.875rem;
  font-weight: 700;
  color: white;
}

.notification-desc {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
}

.card-tertiary {
  bottom: 15%;
  left: 5%;
  animation-delay: 4s;
}

.badge-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.badge-emoji {
  font-size: 2rem;
}

.badge-text {
  font-size: 1rem;
  font-weight: 700;
  color: white;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  animation: particleFloat 6s ease-in-out infinite;
  opacity: 0.3;
}

@keyframes particleFloat {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 0;
  }
  50% {
    transform: translate(calc(var(--x) * 20px), calc(var(--y) * -50px)) scale(1.5);
    opacity: 0.6;
  }
}

@media (max-width: 968px) {
  .cta-section {
    padding: 4rem 1rem;
  }

  .cta-container {
    flex-direction: column;
    text-align: center;
  }

  .cta-content {
    max-width: 100%;
  }

  .cta-buttons {
    justify-content: center;
  }

  .cta-trust {
    justify-content: center;
  }

  .cta-visual {
    height: 300px;
    width: 100%;
  }

  .visual-card {
    scale: 0.8;
  }
}
</style>
