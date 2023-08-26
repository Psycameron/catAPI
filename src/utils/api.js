import axios from "axios";

const API_KEY =
  "live_uk9uGYQl9mDPSK4W4zQOPJsphMlcg2HFxaZvQUVplVdNTMBNRqiNwbfGuhwPH8ln";

axios.defaults.baseURL = "https://api.thecatapi.com/v1";

const headers = {
  "Content-Type": "application/json",
  "x-api-key": API_KEY,
};

export async function getRandomCat() {
  try {
    const response = await axios.get(`/images/search?api_key=${API_KEY}`);
    return response.data[0];
  } catch (error) {
    console.error("Error fetching cat image:", error);
  }
}

export async function getCatsForGallery(order, type, breedId, limit) {
  try {
    const response = await axios.get(
      `/images/search?api_key=${API_KEY}&order=${order}&mime_types=${type}&breed_ids=${breedId}&limit=${limit}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching cat images:", error);
  }
}

export async function getAllBreeds() {
  try {
    const response = await axios.get(`/breeds?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching breeds:", error);
  }
}

export async function getCatsByBreed(id, limit) {
  try {
    const response = await axios.get(
      `/images/search?api_key=${API_KEY}&limit=${limit}&breed_ids=${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching breeds:", error);
  }
}

export async function getCatInfoByBreed(id) {
  try {
    const response = await axios.get(`/breeds/${id}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching breeds:", error);
  }
}

export async function addImageReaction(data) {
  try {
    await axios.post(`/votes`, data, { headers });
  } catch (error) {
    console.error(error);
  }
}

export async function getFavourites() {
  try {
    const response = await axios.get(`/favourites?api_key=${API_KEY}`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching breeds:", error);
  }
}

export async function addImageToFavourites(data) {
  try {
    const response = await axios.post(`/favourites`, data, { headers });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteImageFromFavourites(id) {
  try {
    console.log(`🚀 ~ deleteImageFromFavourites ~ id:`, id);
    await axios.delete(`/favourites/${id}`, { headers });
  } catch (error) {
    console.error(error);
  }
}
