<template>
  <div>
    <GamePickCard :game="game"/>
  </div>
</template>

<script setup>
import GamePickCard from '@/components/GamePickCard.vue';
import Game from '@/models/game'

const games = [
  new Game({
    homeTeam: 'Eagles',
    awayTeam: 'Giants',
    gameTime: '2025-11-24T13:00:00Z',
    spread: -6.5,
    total: 44.5,
  }),
  new Game({
    homeTeam: 'Patriots',
    awayTeam: 'Jets',
    gameTime: '2025-11-24T16:25:00Z',
    spread: -3.0,
    total: 41.0,
  }),
  new Game({
    homeTeam: 'Cowboys',
    awayTeam: 'Packers',
    gameTime: '2025-11-24T20:20:00Z',
    spread: -2.5,
    total: 47.0,
  }),
]

var game = games[0];
console.log(game)
// Add your script logic here
</script>

<style scoped>
h1 {
  margin-bottom: 1rem;
}
</style>
