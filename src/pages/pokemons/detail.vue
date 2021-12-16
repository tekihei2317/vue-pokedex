<script lang="ts">
import { useQuery } from '@vue/apollo-composable';
import { useRoute } from 'vue-router';
import gql from 'graphql-tag';

export default {
  setup() {
    const route = useRoute();
    const { result, loading } = useQuery(
      gql`
        query fetchPokemon($id: String) {
          pokemon(id: $id) {
            id
            number
            name
            types
            image
            classification
            height {
              minimum
            }
            weight {
              minimum
            }
            evolutions {
              id
              number
              name
              types
              image
            }
          }
        }
      `,
      { id: route.params.id }
    );

    return { result, loading };
  },
};
</script>

<template>
  <div class="max-w-3xl mx-auto px-4">
    <h2 class="text-2xl py-2">
      <router-link to="/">Pokedex</router-link>
    </h2>
    <div v-if="loading">Loading...</div>
    <div v-else class="mt-8">
      <div class="flex flex-col md:flex-row gap-8">
        <div class="max-w-xs">
          <img :src="result.pokemon.image" />
        </div>
        <div class="rounded-xl border-4 flex-1 px-8 py-4">
          <p class="text-lg text-gray-500">No. {{ result.pokemon.number }}</p>
          <p class="text-2xl font-bold">{{ result.pokemon.name }}</p>
          <div class="mt-12 flex flex-col gap-4">
            <p>
              <span class="font-bold">Classification:</span>
              {{ result.pokemon.classification }}
            </p>
            <p>
              <span class="font-bold">Types: </span>
              <span
                v-for="type in result.pokemon.types"
                :key="type"
                class="bg-gray-200 rounded text-xs px-6 py-0.5 mr-1"
              >
                {{ type }}
              </span>
            </p>
            <div>
              <span>
                <span class="font-bold">Height:</span>
                {{ result.pokemon.height.minimum }}
              </span>
              <span class="ml-4">
                <span class="font-bold">Weight:</span>
                {{ result.pokemon.weight.minimum }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-16">
        <p class="text-xl font-bold">Evolutions</p>
        <div class="flex mt-8 gap-8">
          <div v-for="evolution in result.pokemon.evolutions" :key="evolution.id" class="w-60">
            <router-link :to="`/pokemons/${evolution.id}`" class="block aspect-w-1 aspect-h-1">
              <img :src="evolution.image" class="object-contain" />
            </router-link>
            <div class="text-sm text-gray-500"># {{ evolution.number }}</div>
            <div class="font-bold text-lg mt-2">{{ evolution.name }}</div>
            <div>
              <span v-for="type in evolution.types" :key="type" class="bg-gray-200 rounded text-xs px-6 py-0.5 mr-1">
                {{ type }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
