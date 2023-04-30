<script setup lang="ts">
import { toRef } from 'vue';
import type { ICharacter } from '../types';
import {useRouter} from 'vue-router';

const props = defineProps<{character: ICharacter}>()
const character = toRef(props, 'character')

const router = useRouter()

const goTo = ()=>{
    router.push(`by/${character.value.id}`)
}

</script>

<template>
    <figure class="px-10 pt-10">
        <img :src="character.thumbnail.path + '.' + character.thumbnail.extension" alt="Shoes" class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
        <h2 class="card-title">{{ character.id }}</h2>
        <p>{{ character.name }}</p>
        <div class="card-actions">
        <button @click="goTo" class="btn bg-red-500 border-transparent hover:bg-red-800
        hover:border-transparent text-white">Look it!</button>
        </div>
    </div>
</template>