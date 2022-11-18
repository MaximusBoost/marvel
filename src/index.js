import 'regenerator-runtime/runtime'

import axios from "axios";

import {API_URL, URL_COMICS} from './constants/api.js';
import {getDataApi} from './utils/getDataApi';

(async () => {

    const data = await getDataApi.getData(API_URL + URL_COMICS);
    console.log(data);
})();