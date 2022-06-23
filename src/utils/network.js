import { HTTP, HTTPS } from "@constants/api";

/** 
 * Изменяет url с HTTP на HTTPS
 * @param {String} url - url для изменения
 * @returns {String} - url с HTTPS
*/
export const changeHTTP = (url) => {
    const result = url ? url.replace(HTTP, HTTPS) : url

    return result
}

/**
 * Отправляет запрос fetch
 * @param {String} url - url для запроса
 * @return {Promise} - Promise с результатом запроса
 */
export const getApiResource = async (url) => {
    try {
        const res = await fetch(url);

        if(!res.ok) {
            console.error('Could not fetch.', res.status);
            return false;
        }

        return await res.json();
    }
    catch (error) {
        console.error('Could not fetch.', error.message);
        return false;
    }
}

// Асинхронная функция

// (async() => {
//     const body = await getApiResource(SWAPI_ROOT+SWAPI_PEOPLE)
//     console.log(body)
// })()

// Вызов функции через промис

// getApiResource(SWAPI_ROOT+SWAPI_PEOPLE)
//     .then(body => console.log(body))

export const makeConcurrentRequest = async (urls) => {
    const res = await Promise.all(urls.map(async res => {
        return fetch(res).then(res => res.json())
    }))
    return res;
}