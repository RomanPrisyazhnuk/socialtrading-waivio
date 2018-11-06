/* eslint-disable class-methods-use-this */
import _ from 'lodash';
import ApiClient from 'api/ApiClient';

const apiClient = new ApiClient();
export default class News {
    static async getLastNews(count, lang, tags) {
        return await apiClient.get('https://news.umarkets.com/feed/filter/full', {}, { count, lang, tags }).then(
            (response) => {
                if (response.data) {
                    return this.parseNews(response.data);
                }
            });
    }

    static parseNews(news) {
        return _.map(news, (article) => {
            return {
                title: article.Title,
                image: article.Image && _.last(article.Image.split('/'), 1) === 'default'
                    ? null
                    : article.Image,
                link: article.Link,
                tags: _.map(article.Tags, tag => tag.Name),
                created_at: article.PublishDate,
                creator: article.Creator,
                text: article.Encoded && article.Encoded.replace(/<p>|<\/p>/gi, ''),
            };
        });
    }
}
