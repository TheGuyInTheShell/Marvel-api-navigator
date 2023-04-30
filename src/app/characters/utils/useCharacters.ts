import type { IMarvelRoot } from '../types'
import { ref } from 'vue'
import MarvelApi from '@/api/MarvelApi'
import { isAxiosError } from 'axios'

const MarvelResp = ref<IMarvelRoot | null>(null)
const isLoading = ref<boolean>(true)
const isError = ref<boolean>(false)

export const useCharacters = async () => {

  if (!MarvelResp.value) {

    MarvelApi.get<IMarvelRoot>('/characters')
        .then((res) => {
            MarvelResp.value = res.data
            isLoading.value = false
        }).catch((err)=> {
            isError.value = true
            if(isAxiosError(err)) console.log(err.response?.data.message)
            else console.log(err.message)
            isLoading.value = false
            console.log(err.toJSON())
        })
  }

  return {
    MarvelResp,
    isLoading,
    isError,
  }
}
