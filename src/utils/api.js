import axios from "axios";

axios.defaults.baseURL = "https://api.thecatapi.com/v1";

export async function getRandomCat() {
  try {
    const response = await axios.get("/images/search");
    return response.data[0];
  } catch (error) {
    console.error("Error fetching cat image:", error);
  }
}
