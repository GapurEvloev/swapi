import { HTTP, HTTPS } from "../constants/api";

/**
 * Changing the url from HTTP to HTTPS
 * @param {String} url - url to change
 * @returns {String} - changed url
 */
export const changeHttp = (url) => {
  const res = url ? url.replace(HTTP, HTTPS) : url;

  return res;
}

/**
 * For sending a request
 * @param url - for request
 * @returns {Promise<boolean|any>} - with request result
 */
// вариант с асинхронной функцией
export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error("Could not fetch.", res.status);
      return false;
    }

    return await res.json();
  }
  catch (error) {
    console.log(error.message);
    return false;
  }
}

// // вариант с использование промисов
// export const getApiResource = (url) => {
//   fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));
// }

// // вызовы
// (async () => {
//   const body = await getApiResource(SW_ROOT+SW_CHARS);
//   console.log(body);
// })();
//
// getApiResource(SW_ROOT+SW_CHARS)
//   .then(body => console.log(body))