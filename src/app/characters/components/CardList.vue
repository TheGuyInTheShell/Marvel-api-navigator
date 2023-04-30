<script setup lang="ts">
import CardCharacter from './CardCharacter.vue';
import type { ICharacter } from '../types';

interface IProps {
    characters: ICharacter[] | undefined,
}

const props = defineProps<IProps>()

</script>

<template>


        <div class="p-4 flex flex-wrap justify-center gap-4"
        v-if="!!props?.characters" 
        >
            <li 
            class="card card-character w-96 bg-yellow-50 shadow-xl"
            v-for="character in props?.characters" :key="character.name"
            >
                <CardCharacter :character="character"/>
            </li>
        </div>
</template>


<style scoped>
    .card-character{
        height: 35rem;
    }
</style>