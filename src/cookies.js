export const CreateCookie = (pKey, pValue) => {
    const existingCookies = LoadCookiesByKey(pKey);

    existingCookies.push(pValue);

    document.cookie = `${pKey}=${JSON.stringify(existingCookies)}`;
}

export const LoadCookiesByKey = (pKey) => {
    const cookies = document.cookie
                                .split(";")
                                .find(row => row.startsWith(pKey+"="));

    if(cookies)
    {
        const cookieValues = cookies.split("=")[1];
        return JSON.parse(cookieValues);
    }
    else return [];
}

export const RemoveCookie = (pKey, pValue) => {
    const existingCookies = LoadCookiesByKey(pKey);

    existingCookies.splice(existingCookies.findIndex((cookie) => cookie === pValue), 1);

    document.cookie = `${pKey}=${JSON.stringify(existingCookies)}`;
}