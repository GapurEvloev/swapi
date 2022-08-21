import {
  HTTPS,
  SW_ROOT,
  SW_CHARS,
  URL_CHARS,
  GUIDE_IMG_EXT
} from "../constants/api";

const getId = (url, category) => {
  const id = url
    .replace(HTTPS+SW_ROOT+category, "")
    .replace(/\//g, "");
  return id;
}

export const getCharsId = (url) => getId(url, SW_CHARS);
export const getCharsImg = (id) => `${URL_CHARS}${id}${GUIDE_IMG_EXT}`;