<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import type { IRouteLink } from '@/router/links-routes';

interface Props {
    title?: string,
    showIcon?: boolean,
    customClasses?: string,
    links: IRouteLink[],
}
const props = withDefaults(defineProps<Props>(), {
                                showIcon: true,
                                links: ()=> []
                            })
</script>

<template>
    <nav v-show="props.links.length"
    :class="`${props.customClasses}`" 
    class="w-full h-full text-white bg-slate-700 flex items-start text-md text-center px-4">
        <img v-show="props.showIcon" class="mr-1" src="@/assets/logo.svg" alt="Vue Logo" height="25" width="25" />
        <span v-show="props.title" class="mr-3">{{ props.title }}</span>
        <RouterLink v-for="link in props.links" :key="link.name" :to="{name: link.name}" >
            {{ link.label }}
        </RouterLink>
    </nav>
</template>


<style scoped>
    a{
        margin-right: .5rem;
        color: rgb(47, 218, 67);
    }
    .router-link-active{
        color: rgba(47, 218, 67, 0.438);
    }
    .router-link-exact-active{
        text-decoration: underline;
    }

</style>