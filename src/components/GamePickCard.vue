<template>
  <v-card class="mx-auto my-6" max-width="500">
    <v-card-title>
      <div class="d-flex justify-space-between align-center">
        <span>{{ game.homeTeam }}</span>
        <span>vs</span>
        <span>{{ game.awayTeam }}</span>
      </div>
    </v-card-title>
    <v-card-subtitle>
      <span>Game Time: {{ formattedGameTime }}</span>
    </v-card-subtitle>
    <v-card-text>
      <v-form @submit.prevent="submitSpreadPick">
        <v-row align="center">
          <v-col cols="8">
            <v-text-field
              v-model.number="spreadPick"
              :label="`Pick the spread (${game.spread})`"
              type="number"
              min="-50"
              max="50"
              required
            />
          </v-col>
          <v-col cols="4">
            <v-btn type="submit" color="primary">Pick Spread</v-btn>
          </v-col>
        </v-row>
      </v-form>
      <v-form @submit.prevent="submitTotalPick" class="mt-4">
        <v-row align="center">
          <v-col cols="8">
            <v-text-field
              v-model.number="totalPick"
              :label="`Pick Over/Under (${props.total})`"
              type="number"
              min="0"
              max="200"
              required
            />
          </v-col>
          <v-col cols="4">
            <v-btn type="submit" color="secondary">Pick Total</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, computed, toRefs } from 'vue'
// Accept a game prop
const props = defineProps({
  game: {
    type: Object,
    required: true,
  },
})

// Use toRefs for reactivity if needed
// const { game } = toRefs(props)

const spreadPick = ref(props.game.value.spread)
const totalPick = ref(game.value.total)

const formattedGameTime = computed(() => {
  const date = new Date(game.value.gameTime)
  return date.toLocaleString()
})

console.log(props.game)

function submitSpreadPick() {
  // Handle spread pick submission
  alert(`Spread pick: ${spreadPick.value}`)
}

function submitTotalPick() {
  // Handle total pick submission
  alert(`Total pick: ${totalPick.value}`)
}
</script>

<style scoped>
.v-card {
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
</style>
