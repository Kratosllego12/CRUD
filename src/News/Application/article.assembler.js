import {Article} from "@/News/Domain/article.entity.js"

export class ArticleAssembler {

    static toEntitiesFromResponse(response) {
        console.log(response)
        if (response.status !== 200) {
            console.error(`${response.status},  ${response.code}, ${response.message}`);
            return [];
        }
        const articlesResponse = response.data;
        return articlesResponse.map((article) => {
            return this.toEntityFromResource(article);
        });
    }

    static toEntityFromResource(resource) {
        let article = new Article(resource);
        return article;
    }
}