import { createApi } from "unsplash-js";
console.log(import.meta.env.VITE_ACCESS_KEY);
const unsplash = createApi({
  accessKey: import.meta.env.VITE_ACCESS_KEY,
})
const searchUserPhotos = async () => {
  const images = await unsplash.search.getPhotos({
    query: "portrait",
    page: 1,
    perPage: 1,
    orientation:"squarish"
  })
  return images;
}
export default searchUserPhotos;

