import { HTTP, HTTPS } from "constants/index";

/** 
 * Изменяет url с HTTP на HTTPS
 * @param {String} url - url для изменения
 * @returns {String} - url с HTTPS
*/

export const changeHTTP = (url:string) => {
    const result = url ? url.replace(HTTP, HTTPS) : url

    return result
}

/**
 * Отправляет запрос fetch
 * @param {String} url - url для запроса
 * @return {Promise} - Promise с результатом запроса
 */

export const getApiResource = async (url:string): Promise<any> => {
    try {
        const res = await fetch(url);

        if(!res.ok) {
            console.error('Could not fetch.', res.status);
            return false;
        }

        return await res.json();
    }
    catch (error) {
        let message = 'Unknown Error'
        if (error instanceof Error) message = error.message;
        reportError({ message })
        // console.error('Could not fetch.', error.message);
        return false;
    }
}

export const makeConcurrentRequest = async (urls: string[]) => {
    const res = await Promise.all(urls.map(async res => {
        return fetch(res).then(res => res.json())
    }))
    return res;
}

// Асинхронная функция

// (async() => {
//     const body = await getApiResource(SWAPI_ROOT+SWAPI_PEOPLE)
//     console.log(body)
// })()

// Вызов функции через промис

// getApiResource(SWAPI_ROOT+SWAPI_PEOPLE)
//     .then(body => console.log(body))