import { createApi } from "unsplash-js";
console.log(import.meta.env.VITE_ACCESS_KEY);
const unsplash = createApi({
  accessKey: import.meta.env.VITE_ACCESS_KEY,
})

const searchPhotos = async (keyword) => {
  const images = await unsplash.search.getPhotos({
    query: keyword,
    page: 1,
    perPage: 30,
  })
  return images
}

const galeriaPinListeners = async () => {
  const input = document.querySelector("#searchinput")
  const btn = document.querySelector("#searchbtn")
  btn.addEventListener("click", async () => {
    const images = await searchPhotos(input.value)
    printItems(images.response.results)
  })
}

const printTemplate = async () => {
  document.querySelector("main").innerHTML = galleryTemplate()
  galleryListeners()

  const images = await searchPhotos("cat")
  printItems(images.response.results)
}

printTemplate();