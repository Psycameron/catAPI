import axios from "axios";

const API_KEY =
  "live_uk9uGYQl9mDPSK4W4zQOPJsphMlcg2HFxaZvQUVplVdNTMBNRqiNwbfGuhwPH8ln";

axios.defaults.baseURL = "https://api.thecatapi.com/v1";

// ======== Images ========

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

export async function getCatsByBreed(id, limit, page = 1) {
  try {
    const response = await axios.get(
      `/images/search?api_key=${API_KEY}&limit=${limit}&breed_ids=${id}&page=${page}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching breeds:", error);
  }
}

// ======== Breeds ========

export async function getAllBreeds() {
  try {
    const response = await axios.get(`/breeds?api_key=${API_KEY}`);
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

// ======== Votes ========

export async function getAllVotes() {
  try {
    const response = await axios.get(`/votes?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function addImageReaction(data) {
  try {
    await axios.post(`/votes?api_key=${API_KEY}`, data);
  } catch (error) {
    console.error(error);
  }
}

// ======== Favourites ========

export async function getFavourites() {
  try {
    const response = await axios.get(`/favourites?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching favourites:", error);
  }
}

export async function addCatToFavourites(data) {
  try {
    const response = await axios.post(`/favourites?api_key=${API_KEY}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteCatFromFavourites(id) {
  try {
    await axios.delete(`/favourites/${id}?api_key=${API_KEY}`);
  } catch (error) {
    console.error(error);
  }
}
