export const getLocalStorage = (key: string) => {
    const data = localStorage.getItem(key);

    if(typeof data === 'string') {
        return JSON.parse(data);
    }

    return {}   
}

export const setLocalStorage = (key:string, data: any) => {
    localStorage.setItem(key, JSON.stringify(data));
}   