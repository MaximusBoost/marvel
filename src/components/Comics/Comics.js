import {API_URL, URL_COMICS, IMG_STANDART_XLARGE, IMG_NOT_AVAILABLE, URL_CHARACTERS} from '../../constants/api.js';
import {getDataApi} from '../../utils/getDataApi';
import { ROOT_INDEX } from '../../constants/root.js';

import Error from '../Error';

import classes from './Comics.css';


class Comics {

    renderComics(data) {
        let htmlContent = '';

        data.forEach( ({id, title, thumbnail: {extension, path}}) => {


            if( !path.includes(IMG_NOT_AVAILABLE) ) {

                const uri = API_URL + URL_COMICS +'/' + id +'/' + URL_CHARACTERS;
                const imgSrc = path + '/' + IMG_STANDART_XLARGE + '.' + extension;

                htmlContent += `
                <li class="comics__item ${classes.comics__item}" data-uri="${uri}">
                    <span class="${classes.comics__name}">${title}</span>
                    <img class="img-contain ${classes.comics__img}" src ="${imgSrc}" />
                </li>
            `;
            };

        } );

        const htmlWrapper = `
            <ul class="${classes.comics__container}">
                ${htmlContent}
            </ul>
        `;

        ROOT_INDEX.innerHTML = htmlWrapper;
    }

    async render() {
        const data = await getDataApi.getData(API_URL + URL_COMICS);

        if(data) {
            this.renderComics(data);
        } else {
            Error.render();
        }
    }

    eventListener() {
        document.querySelectorAll('.comics__item').forEach(element => {

            const uri = element.getAttribute('data-uri')

            element.addEventListener('click', function () {
                console.log(uri);
            });
        });
    }
}

export default new Comics();