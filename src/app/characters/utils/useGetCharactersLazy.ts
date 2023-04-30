import MarvelApi from "@/api/MarvelApi"
import characterStore from "@/store/characters.store"
import type { ICharacter, IMarvelRoot } from "../types"
import { useQuery } from "@tanstack/vue-query"
import { isAxiosError } from "axios"
import { ref } from "vue"

function useGetCharactersLazy(){
    const characters = ref<ICharacter[]>([])
    const isLoading = ref(true)
    const isError = ref(false)

    const getCharacters = async():Promise<ICharacter[]>=>{
        if(characterStore.characters.count) return characterStore.characters.list
        const {data: res} = (await MarvelApi.get<IMarvelRoot>('/characters')).data
        return res.results
    }
    
    useQuery(
        ['characters'],
        getCharacters,
        {
            onSuccess( charactersRes ) {
                    characterStore.loadedCharacters(charactersRes)
                    characters.value = charactersRes
                    isLoading.value = false
                    isError.value = false
            },
            onError(error){
                if (isAxiosError(error)) {
                    console.error('axios error: ', error)
                }else{
                    console.error(error)
                }
                characters.value = []
                isError.value = true
                isLoading.value= false
            }
        }
        // {
        //     cacheTime: 1000 * 60 * 5,
        //     refetchOnReconnect: 'always',
        // }
    )
    return {
        characters,
        isLoading,
        isError,
    }
}


export default useGetCharactersLazy