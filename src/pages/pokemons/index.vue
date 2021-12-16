<script lang="ts">
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

export default {
  setup() {
    let { result, loading } = useQuery(gql`
      query fetchPokemons {
        pokemons(first: 10) {
          id
          number
          name
          types
          image
        }
      }
    `);

    return { result, loading };
  },
};
</script>

<template>
  <div class="max-w-3xl mx-auto px-4">
    <h2 class="text-2xl py-2">Pokedex</h2>
    <div v-if="loading">Loading...</div>
    <div v-else class="pokemons mt-8">
      <div v-for="pokemon in result.pokemons" :key="pokemon.id">
        <router-link :to="`/pokemons/${pokemon.id}`" class="block aspect-w-1 aspect-h-1">
          <img :src="pokemon.image" class="object-contain" />
        </router-link>
        <div class="text-sm text-gray-500"># {{ pokemon.number }}</div>
        <div class="font-bold text-lg mt-2">{{ pokemon.name }}</div>
        <div>
          <span v-for="type in pokemon.types" :key="type" class="bg-gray-200 rounded text-xs px-6 py-0.5 mr-1">
            {{ type }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pokemons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}
img {
  max-width: 100%;
}
</style>
