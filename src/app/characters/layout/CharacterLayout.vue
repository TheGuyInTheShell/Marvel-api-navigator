<script lang="ts" setup>
    import NavBar from '@/shared/components/NavBar.vue';
    import charaterRoutes  from '../router/index'
    import type { IRouteLink } from '@/router/links-routes';
    //import { Suspense } from 'vue';
    import type { Tprops } from '../types';

    const routeLinks: IRouteLink[] = charaterRoutes.children!.filter(route => (route.props as Tprops)?.visible ).map(route =>  ({
            name: route.name as string,
            path: route.path,
            label: (route.props as Tprops)?.label,
            })
    )

</script>

<template>
    <section>
        <NavBar
        custom-classes="py-2" 
        :show-icon="false" 
        :links="routeLinks"/>
        <!-- <Suspense> -->
            <!-- <KeepAlive> -->
                <RouterView />
            <!-- </KeepAlive> -->
        <!-- </Suspense> -->
    </section>
</template>

