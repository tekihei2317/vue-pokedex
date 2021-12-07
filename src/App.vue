<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

const { result } = useQuery(gql`
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
</script>

<template>
  <div>
    <h2>ポケモン一覧</h2>
    {{ result }}
  </div>
</template>
