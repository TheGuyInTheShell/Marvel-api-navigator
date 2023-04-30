<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import useGetCharacter from '../utils/useGetCharacter'
import { watch } from 'vue';

type Tprops = {
    label: string,
    visible: boolean
}

const props = defineProps<Tprops>()
props
const route = useRoute()
const id = +route.params.id as number
const router = useRouter()

const { character, isLoading, isError } = useGetCharacter(id)


watch(isError, ()=>{
    if (isError) {
    router.replace({name: 'character-list'})        
    }
 })

</script>

<template>
    <h1 v-show="isLoading">Loading</h1>
   <div v-show="!isLoading && !isError" class="hero min-h-screen bg-yellow-50" v-if="character">
    <div class="hero-content flex-col gap-12 lg:flex-row-reverse">
        <img :src="`${character?.thumbnail.path}.${character?.thumbnail.extension}`" class="max-w-sm rounded-lg shadow-2xl" />
        <div>
        <h1 class="text-5xl font-bold">{{ character?.name }}</h1>
        <pre class="my-2">{{ 'Comics: ' + character?.comics.available + ' / ' + 'Events: ' + character?.events.available }}</pre>
        <p class="py-2 text-center">{{ character?.description || 'No description' }}</p>
        <a target="_blank" class="text-blue-500 flex justify-center" :href="character.urls[0].url">Details</a>
        </div>
    </div>
    </div>
    
</template>