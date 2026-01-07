<template>
  <section class="hero">
    <div class="hero-content">
      <div class="hero-badge">
        <span class="badge-icon">✨</span>
        <span>Projetos 3D Premium</span>
      </div>

      <h1 class="hero-title">
        Transforme Suas Ideias em
        <span class="gradient-text">Realidade 3D</span>
      </h1>

      <p class="hero-description">
        Modelos 3D profissionais e exclusivos para elevar seu projeto ao próximo nível. Design de
        alta qualidade, prontos para uso imediato.
      </p>

      <div class="hero-buttons">
        <button class="btn btn-primary">
          <span>Ver Projetos</span>
        </button>
        <button class="btn btn-secondary">
          <span>Saiba Mais</span>
        </button>
      </div>

      <!-- STATS -->
      <div class="hero-stats">
        <template v-for="(stat, index) in states" :key="stat.id">
          <div class="stat-item">
            <span class="stat-number"> {{ stat.value }}{{ stat.suffix }} </span>
            <span class="stat-label">
              {{ stat.label }}
            </span>
          </div>

          <div v-if="index < states.length - 1" class="stat-divider"></div>
        </template>
      </div>
    </div>

    <div class="hero-visual">
      <div class="floating-card card-1">
        <div class="card-glow"></div>
        <div class="card-content">🎨</div>
      </div>
      <div class="floating-card card-2">
        <div class="card-glow"></div>
        <div class="card-content">🚀</div>
      </div>
      <div class="floating-card card-3">
        <div class="card-glow"></div>
        <div class="card-content">💎</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useHeroProject } from '@/components/heroProject/useHeroProject'

const { states } = useHeroProject()
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
  border-radius: 50%;
  animation: pulse 8s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

.hero-content {
  flex: 1;
  max-width: 600px;
  z-index: 1;
}

.hero-badge {
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
}

.badge-icon {
  font-size: 1.25rem;
  animation: sparkle 2s ease-in-out infinite;
}

@keyframes sparkle {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

.hero-title {
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
  background-clip: text;
  display: inline-block;
  animation: gradientShift 3s ease infinite;
  background-size: 200% 200%;
}

@keyframes gradientShift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.hero-description {
  font-size: 1.125rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2.5rem;
}

.hero-buttons {
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

.btn-secondary {
  background: rgba(255, 255, 255, 0.05);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  backdrop-filter: blur(10px);
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.stat-number {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stat-label {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.5);
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
}

.hero-visual {
  flex: 1;
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.floating-card {
  position: absolute;
  width: 150px;
  height: 150px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  animation: float 6s ease-in-out infinite;
}

.card-glow {
  position: absolute;
  inset: -2px;
  background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
  border-radius: 24px;
  opacity: 0;
  filter: blur(20px);
  transition: opacity 0.3s ease;
  z-index: -1;
}

.floating-card:hover .card-glow {
  opacity: 0.6;
}

.card-1 {
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.card-2 {
  top: 50%;
  right: 10%;
  animation-delay: 2s;
}

.card-3 {
  bottom: 10%;
  left: 30%;
  animation-delay: 4s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

@media (max-width: 968px) {
  .hero {
    flex-direction: column;
    text-align: center;
  }

  .hero-content {
    max-width: 100%;
  }

  .hero-buttons {
    justify-content: center;
  }

  .hero-stats {
    justify-content: center;
  }

  .hero-visual {
    height: 300px;
    width: 100%;
  }

  .floating-card {
    width: 100px;
    height: 100px;
    font-size: 2.5rem;
  }
}
</style>
