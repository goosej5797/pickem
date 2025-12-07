<template>
  <div>
    <GamePickCard
      :game="games[currentGameIndex]"
      :selectedSpread="picks[currentGameIndex]?.spread"
      :selectedTotal="picks[currentGameIndex]?.total"
      @update:spread="updateSpread"
      @update:total="updateTotal"
    />
    <div class="d-flex justify-center mt-6">
      <v-btn @click="prevGame" :disabled="currentGameIndex === 0" class="mx-2">Previous</v-btn>
      <v-btn
        v-if="currentGameIndex < games.length - 1"
        @click="nextGame"
        :disabled="!canProceed"
        class="mx-2"
      >Next</v-btn>
      <v-btn
        v-else
        color="success"
        :disabled="!canProceed"
        class="mx-2"
        @click="submitPicks"
      >Submit Picks</v-btn>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const games = [
  {
    homeTeam: 'Eagles',
    awayTeam: 'Giants',
    gameTime: '2025-11-24T13:00:00Z',
    spread: -6.5,
    total: 44.5,
  },
  {
    homeTeam: 'Patriots',
    awayTeam: 'Jets',
    gameTime: '2025-11-24T16:25:00Z',
    spread: -3.0,
    total: 41.0,
  },
  {
    homeTeam: 'Cowboys',
    awayTeam: 'Packers',
    gameTime: '2025-11-24T20:20:00Z',
    spread: -2.5,
    total: 47.0,
  },
]

const currentGameIndex = ref(0)
const picks = ref(Array(games.length).fill().map(() => ({ spread: null, total: null })))

const canProceed = computed(() => {
  const pick = picks.value[currentGameIndex.value]
  return pick.spread !== null && pick.total !== null
})

function updateSpread(value) {
  picks.value[currentGameIndex.value].spread = value
}

function updateTotal(type) {
  picks.value[currentGameIndex.value].total = type
}

function nextGame() {
  if (currentGameIndex.value < games.length - 1) {
    currentGameIndex.value++
  }
}

function prevGame() {
  if (currentGameIndex.value > 0) {
    currentGameIndex.value--
  }
}

function submitPicks() {
  // Dummy server request
  console.log('Submitting picks:', picks.value)
  // Simulate async request
  setTimeout(() => {
    alert('Picks submitted successfully!')
    router.push('/')
  }, 1000)
}
</script>

<style scoped>
h1 {
  margin-bottom: 1rem;
}
</style>
