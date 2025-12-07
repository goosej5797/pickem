<template>
  <div class="overview-container pa-6">
    <v-card class="mb-6" max-width="500" elevation="2">
      <v-card-title>
        Welcome, <span class="font-weight-bold">{{ user.name }}</span>
      </v-card-title>
      <v-card-subtitle>
        Current Record: <span class="font-weight-bold">8-3</span>
      </v-card-subtitle>
    </v-card>
    <v-card max-width="700" elevation="2">
      <v-card-title>Weeks Overview</v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item v-for="week in weeks" :key="week.id">
            <v-list-item-title>
              <span v-if="week.upcoming" class="font-weight-bold">Upcoming Week {{ week.label }}</span>
              <span v-else>Week {{ week.label }}</span>
            </v-list-item-title>
            <v-list-item-action>
              <v-btn
                v-if="week.upcoming"
                color="primary"
                @click="goToPicks(week.id)"
              >Make Picks</v-btn>
              <v-chip v-else color="grey lighten-2">{{ week.status }}</v-chip>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'

const router = useRouter()

const user = ref({ name: 'Loading...', email: '' })

const weeks = fetchWeeks()

function fetchWeeks(){
  return [
  { id: 1, label: '10', status: 'Completed', upcoming: false },
  { id: 2, label: '11', status: 'Completed', upcoming: false },
  { id: 3, label: '12', status: 'Upcoming', upcoming: true },
  { id: 4, label: '13', status: 'Upcoming', upcoming: false },
]
}

function goToPicks(weekId) {
  router.push('/picks?weekId=', weekId)
}

onMounted(async () => {
  user = auth();
})

async function auth() {
    try {
      const response = await fetch('/.auth/me')
      const data = await response.json()
    if (data.clientPrincipal) {
      user.value.name = data.clientPrincipal.userDetails || 'Unknown User'
      user.value.email = data.clientPrincipal.userId || ''
    } else {
      user.value.name = 'Guest'
    }
  } catch (e) {
    user.value.name = 'Guest'
  } 
}
</script>

<style scoped>
.overview-container {
  max-width: 800px;
  margin: 0 auto;
}
</style>
