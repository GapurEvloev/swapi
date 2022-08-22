import {
  HTTPS,
  SW_ROOT,
  SW_CHARS,
  SW_PARAM_PAGE,
  URL_CHARS,
  GUIDE_IMG_EXT
} from "../constants/api";

export const getPeoplePageId = url => {
  return Number(url.slice(url.lastIndexOf(SW_PARAM_PAGE)+SW_PARAM_PAGE.length, url.length));
}

const getId = (url, category) => {
  const id = url
    .replace(HTTPS+SW_ROOT+category, "")
    .replace(/\//g, "");
  return id;
}

export const getCharsId = (url) => getId(url, SW_CHARS);
export const getCharsImg = (id) => `${URL_CHARS}${id}${GUIDE_IMG_EXT}`;