<template>
  <section class="features-section">
    <div class="features-container">
      <div class="features-header">
        <span class="section-badge">✨ Vantagens</span>
        <h2 class="section-title">Por Que Escolher Nossos Projetos 3D?</h2>
        <p class="section-description">
          Qualidade profissional, suporte dedicado e recursos exclusivos para seus projetos
        </p>
      </div>

      <div class="features-grid">
        <div class="feature-card" v-for="feature in features" :key="feature.id">
          <div class="feature-icon">
            <span>{{ feature.icon }}</span>
            <div class="icon-glow"></div>
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </div>
      </div>

      <div class="stats-banner">
        <div class="stat-box">
          <div class="stat-icon">🎯</div>
          <div class="stat-content">
            <span class="stat-value">100%</span>
            <span class="stat-text">Satisfação Garantida</span>
          </div>
        </div>
        <div class="stat-box">
          <div class="stat-icon">⚡</div>
          <div class="stat-content">
            <span class="stat-value">24h</span>
            <span class="stat-text">Entrega Rápida</span>
          </div>
        </div>
        <div class="stat-box">
          <div class="stat-icon">💼</div>
          <div class="stat-content">
            <span class="stat-value">5+</span>
            <span class="stat-text">Anos de Experiência</span>
          </div>
        </div>
        <div class="stat-box">
          <div class="stat-icon">🔄</div>
          <div class="stat-content">
            <span class="stat-value">∞</span>
            <span class="stat-text">Atualizações Gratuitas</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useFeatureSection } from './useFeatureSection'

const { features } = useFeatureSection()
</script>
<style scoped>
.features-section {
  padding: 8rem 2rem;
  position: relative;
  overflow: hidden;
}

.features-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: -50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(118, 75, 162, 0.1) 0%, transparent 70%);
  animation: moveGlow 15s ease-in-out infinite;
}

@keyframes moveGlow {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(100%);
  }
}

.features-container {
  max-width: 1200px;
  margin: 0 auto;
}

.features-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.7) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-description {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.6);
  max-width: 600px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.feature-card {
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  border-color: rgba(102, 126, 234, 0.3);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.15);
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-icon {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  margin-bottom: 1.5rem;
  position: relative;
  transition: all 0.3s ease;
}

.icon-glow {
  position: absolute;
  inset: -2px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 20px;
  opacity: 0;
  filter: blur(15px);
  z-index: -1;
  transition: opacity 0.3s ease;
}

.feature-card:hover .feature-icon {
  transform: scale(1.1) rotate(5deg);
}

.feature-card:hover .icon-glow {
  opacity: 0.5;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: white;
}

.feature-description {
  font-size: 0.9375rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.6);
}

.stats-banner {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  padding: 3rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.stats-banner::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(from 0deg, transparent, rgba(102, 126, 234, 0.1), transparent);
  animation: rotate 10s linear infinite;
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}

.stat-box {
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  z-index: 1;
}

.stat-icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  flex-shrink: 0;
}

.stat-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.stat-value {
  font-size: 1.75rem;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stat-text {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
}

@media (max-width: 768px) {
  .features-section {
    padding: 4rem 1rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .stats-banner {
    grid-template-columns: 1fr;
    padding: 2rem;
    gap: 1.5rem;
  }
}
</style>
