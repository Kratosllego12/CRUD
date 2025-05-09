import axios from "axios";

const newApi = import.meta.env.VITE_NEWS_API_URL;
const headLines = import.meta.env.VITE_TOP_ARTICLE_ENDPOINT_PATH;
const key = import.meta.env.VITE_NEWS_API_KEY

export class ArticleService {
    async getAll() {
        var response = await axios.get(`https://66f221c24153791915531f3c.mockapi.io/operations`)
        return response;
    }

    async getById(id) {
        var response = await axios.get(`https://66f221c24153791915531f3c.mockapi.io/operations/${id}`)
        return response;
    }

    async createArticle(article) {
        var response = await axios.post(`https://66f221c24153791915531f3c.mockapi.io/operations`, article)
        return response;
    }

    async updateArticle(id, article) {
        var response = await axios.put(`https://66f221c24153791915531f3c.mockapi.io/operations/${id}`, article)
        return response;
    }

    async deleteArticle(id) {
        var response = await axios.delete(`https://66f221c24153791915531f3c.mockapi.io/operations/${id}`)
        return response;
    }
}

