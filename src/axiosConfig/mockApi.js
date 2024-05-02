import axios from "axios";

export const productsApi = axios.create({
    baseURL: "https://660492812ca9478ea17e37c0.mockapi.io"
})