
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










// export const getApiResource = (url) => {
//     fetch(url)
//         .then(res => res.json())
//         .then(res => console.log(res))
//         .catch(error => console.log(error.message))
    
// }