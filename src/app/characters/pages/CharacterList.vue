<script setup lang="ts">
import CardList from '../components/CardList.vue'
import useGetCharactersLazy from '../utils/useGetCharactersLazy';
// import { ref } from 'vue';

interface IPropsList {
    label: string,
    visible: boolean,
}

const props = defineProps<IPropsList>()
props

// suspense!
//import { useCharacters } from '../utils/useCharacters'
// const { data: MarvelResp } = await MarvelApi.get<IMarvelResp>('/characters')

//composable
// const {MarvelResp, isLoading, hasError} = await useCharacters()

// TansStack
const {isLoading, isError, characters} = useGetCharactersLazy()

</script>

<template>
    <h1 v-show="isLoading">Loading...</h1>
    <h1 v-show="isError">Error!!!...</h1>
    <CardList
    v-if="!isLoading && !isError" 
    :characters="characters" 
    :is-error="isError"
    :is-loading="isLoading"
    />
</template>