import characterStore from '@/store/characters.store';
import type { ICharacter, IMarvelRoot } from '../types';
import MarvelApi from '@/api/MarvelApi';
import { useQuery } from '@tanstack/vue-query';
import { isAxiosError } from 'axios';
import { ref } from 'vue';

function* searchCharacter(id: number):  Generator<ICharacter | undefined, void, undefined> {
    for (let i = 0; i < characterStore.characters.list.length; i++) {
        if (characterStore.characters.list[i].id === id) {
            yield characterStore.characters.list[i]
        }
        yield characterStore.characters.list[i]
    }

}

function useGetCharacter(id: number) {
    const character = ref<ICharacter>()
    const isError = ref(false)
    const isLoading = ref(true)

    const getCharacter = async(id: number):Promise<ICharacter> => { 
        
        const characterInCache = await new Promise<ICharacter | undefined>((res)=> {
            const generatorSearch = searchCharacter(id)
            const interval = setInterval(()=>{ 
                const characterFind = generatorSearch.next().value
                if (characterFind?.id === id) {
                        clearInterval(interval)
                        res(characterFind)
                } 
                
                if (generatorSearch.next().done) {
                    clearInterval(interval)
                    res(undefined)
                } 
                    
            }, 0)
            
            if (characterStore.characters.list.length === 0) {
                clearInterval(interval)
                res(undefined)
            }
        })

        if (characterInCache) {
            return characterInCache
        }

        const {data: characterFetch} = (await MarvelApi.get<IMarvelRoot>(`/characters/${id}`)).data

        characterStore.characters.list.push(characterFetch.results[0])
        return characterFetch.results[0]
    }

    useQuery(
        ['character', id],
        ()=> getCharacter(id),
        {
            onSuccess(characterRes: ICharacter) {
                character.value = characterRes
                isLoading.value = false
            },
            onError(error){
                if (isAxiosError(error)) {
                    console.error('axios error: ', error)
                }else{
                    console.error(error)
                } 
                isError.value = true
                isLoading.value = false  
            },
            retry: false
        }
    )

    return {
        character,
        isError,
        isLoading,
    }
}

export default useGetCharacter

