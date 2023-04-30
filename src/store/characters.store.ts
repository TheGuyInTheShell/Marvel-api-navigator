import type { ICharacter } from "@/app/characters/types"
import { reactive } from "vue"
import MarvelApi from "@/api/MarvelApi"
import type { IMarvelRoot } from "@/app/characters/types"

interface IStore {
  characters: {
    list: ICharacter[],
    count: number,
    isLoading: boolean,
    isError: boolean,
    errorMessage: string | null,
  },

  // metodos
  startLoidingCharacters:  () => void,
  loadedCharacters: (characters: ICharacter[] | []) => void,
  loadCharactersError: (errorMessage: string) => void,
}

const characterStore: IStore = reactive<IStore>({
    characters: {
        count: 0,
        errorMessage: null,
        isLoading: false,
        isError: false,
        list: [],
    },
    async startLoidingCharacters(){
       try {
        const {data: respAxios} = (await MarvelApi.get<IMarvelRoot>('/characters')).data
        this.loadedCharacters(respAxios.results)
       } catch (error) {
        this.loadCharactersError('Error al cargar los personajes')
        
       }

    },
    loadedCharacters (characters: ICharacter[] | []) {
        this.characters = {
            count: characters.length,
            errorMessage: null,
            isLoading: false,
            isError: false,
            list: characters,
        }
    },
    loadCharactersError(errorMessage: string) {
        this.characters = {
            count: 0,
            errorMessage: errorMessage,
            isLoading: false,
            isError: true,
            list: [],
            }
    },
})


export default characterStore