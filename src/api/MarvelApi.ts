import axios from 'axios';
import CryptoJs from 'crypto-js';

const MarvelApi = axios.create({  
    baseURL: 'https://gateway.marvel.com/v1/public/',
    params: {
        ts:  Date.now().toString(),
        apikey: '56b0a731c3f9fb703769cb6793caa5d8',
        hash: CryptoJs.MD5(Date.now().toString() +  'bba45e1803f49b7aec0140ce268564d87ce130a4' + '56b0a731c3f9fb703769cb6793caa5d8').toString(),
    },
  
});

export default MarvelApi;