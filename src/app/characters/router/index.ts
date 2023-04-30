import type { RouteRecordRaw } from "vue-router";

const charaterRoutes: RouteRecordRaw = {
    path: '/characters',
    name: 'characters',
    redirect: '/characters/list',
    component: () => import('../layout/CharacterLayout.vue'),
    children: [
        { 
            path: 'by/:id', 
            name: 'character-id',
            props: {label: 'Personaje por id', visible: false},
            component: () => import('../pages/CharacterId.vue')
        },
        {
            path: 'list',
            name: 'character-list',
            props: {label: 'Lista', visible: true},
            component: () => import('../pages/CharacterList.vue')
        },
        {
            path: 'search',
            name: 'character-search',
            props: {label: 'Busqueda', visible: true},
            component: () => import('../pages/CharacterSearch.vue')
        }
    ]
}

export default charaterRoutes;