import {API_URL, URL_COMICS} from '../../constants/api.js';
import {getDataApi} from '../../utils/getDataApi';
import { ROOT_INDEX } from '../../constants/root.js';

import './Comics.css'

class Comics {

    async render() {
        const data = await getDataApi.getData(API_URL + URL_COMICS);
        console.log(data);

        ROOT_INDEX.innerHTML = `<h1>Hello</h1>`;
    }
}

export default new Comics();