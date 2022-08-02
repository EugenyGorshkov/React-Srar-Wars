import { 
    HTTPS, HTTP,
    SWAPI_ROOT, SWAPI_PEOPLE, 
    GUIDE_IMG_EXTENTION, URL_IMG_PERSON, 
    SWAPI_PARAM_PAGE
} from '@constants';

//-----------------------------------------------
// Получить ID страницы для персонажей
//-----------------------------------------------
export const getPeoplePageId = (url:string) => {
    const position = url.lastIndexOf(SWAPI_PARAM_PAGE);
    const id = url.slice(position+SWAPI_PARAM_PAGE.length, url.length);

    return Number(id)
}

//-----------------------------------------------
// Проверка протокола: HTTP или HTTPS
//-----------------------------------------------
const checkProtocol = (url:string) => {
    if (url.indexOf(HTTPS) !== -1) {
        return HTTPS;
    }

    return HTTP;
}

//-----------------------------------------------
// Получить ID персонажа по URL
//-----------------------------------------------
const getId = (url:string, category:string) => {
    const protocol = checkProtocol(url);
    
    const id = url
        .replace(protocol+SWAPI_ROOT+category, '')
        .replace(/\//g, '')
    return id;
}

export const getPeopleId = (url:string) => getId(url, SWAPI_PEOPLE);

//-----------------------------------------------
// Получить изображение для персонажа
//-----------------------------------------------
export const getPeopleImage = (id:string) => `${URL_IMG_PERSON}/${id + GUIDE_IMG_EXTENTION}`;
