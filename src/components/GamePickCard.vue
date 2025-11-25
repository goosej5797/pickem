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
          <div class="mb-4">
            <div class="text-subtitle-1 font-weight-bold mb-2">Pick the Spread</div>
            <v-row align="center" justify="center">
              <v-col cols="5" class="d-flex justify-center">
                <v-btn :color="selectedSpread === game.spread ? 'primary' : 'default'" @click="selectSpread(game.spread)">
                  {{ game.homeTeam }} {{ game.spread > 0 ? '+' : '' }}{{ game.spread }}
                </v-btn>
              </v-col>
              <v-col cols="2" class="d-flex justify-center">
                <span>or</span>
              </v-col>
              <v-col cols="5" class="d-flex justify-center">
                <v-btn :color="selectedSpread === -game.spread ? 'primary' : 'default'" @click="selectSpread(-game.spread)">
                  {{ game.awayTeam }} {{ game.spread < 0 ? '+' : '' }}{{ -game.spread }}
                </v-btn>
              </v-col>
            </v-row>
          </div>
          <div class="mb-4">
            <div class="text-subtitle-1 font-weight-bold mb-2">Pick Over/Under</div>
            <v-row align="center" justify="center">
              <v-col cols="4" class="d-flex justify-center">
                <v-btn :color="selectedTotal === 'over' ? 'secondary' : 'default'" @click="selectTotal('over')">Over</v-btn>
              </v-col>
              <v-col cols="4" class="d-flex justify-center align-center">
                <span class="font-weight-bold">{{ game.total }}</span>
              </v-col>
              <v-col cols="4" class="d-flex justify-center">
                <v-btn :color="selectedTotal === 'under' ? 'secondary' : 'default'" @click="selectTotal('under')">Under</v-btn>
              </v-col>
            </v-row>
          </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
const props = defineProps({
  game: {
    type: Object,
    required: true,
  },
  selectedSpread: {
    type: Number,
    default: null,
  },
  selectedTotal: {
    type: String,
    default: null,
  },
})

const emit = defineEmits(['update:spread', 'update:total'])

function selectSpread(value) {
  emit('update:spread', value)
}

function selectTotal(type) {
  emit('update:total', type)
}
</script>

<style scoped>
.v-card {
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
</style>
