export interface IRouteLink {
    name: string;
    path: string;
    label: string;
}

export const routeLinks:  IRouteLink[] =[
    {
        path: '/',
        name: 'home',
        label: 'Inicio'
    },
    {
        path: '/about',
        name: 'about',
        label: 'Sobre'
    },
    {
        path: '/characters',
        name: 'characters',
        label: 'Personajes',
    }
]