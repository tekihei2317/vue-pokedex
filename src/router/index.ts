import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import PokemonIndex from '../pages/pokemons/index.vue';
import PokemonDetail from '../pages/pokemons/detail.vue';

const routes = [
  { path: '/', redirect: '/pokemons' },
  { path: '/pokemons', component: PokemonIndex },
  { path: '/pokemons/:id', component: PokemonDetail },
];

export const router = createRouter({ routes, history: createWebHistory() });
