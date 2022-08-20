const SW_ROOT = "https://swapi.dev/api/";
const SW_PEOPLE = "people/";

// // вариант с использование промисов
// export const getApiResource = (url) => {
//   fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));
// }

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

(async () => {
  const body = await getApiResource(SW_ROOT+SW_PEOPLE);
  console.log(body);
})();

getApiResource(SW_ROOT+SW_PEOPLE)
  .then(body => console.log(body))