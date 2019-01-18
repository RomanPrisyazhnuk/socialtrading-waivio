import './Articles.scss';
import _ from 'lodash';
// import { FormattedMessage } from 'react-intl';
// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import News from 'helpers/News';
import Article from './Article';
import { makeTags } from "../../../helpers/makeTags";

export class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
        };
    }

    componentDidMount() {
        let articles = [];
        News.getLastNews(50, 'en', makeTags(['Currency'], 'en')).then((articlesEN) => {
            this.setState(
                {
                    articles: articlesEN,
                },
            );
        });
    }

    render() {
        return (
            <div className="st-news-articles">
                {
                    !_.isEmpty(this.state.articles)
                        ? this.state.articles && _.map(this.state.articles, (article, index) => (
                            <Article
                                key={index}
                                article={article}
                                language='en'
                            />
                        ),
                        )
                        : (
                            <div className="st-news-not-present">
                                Нет новостей
                                <div>
                                    <img className="st-news-reload-image" src="https://img.freepik.com/free-icon/reload_318-115198.jpg?size=338&ext=jpg"/>
                                </div>
                            </div>
                        )
                }
            </div>
        );
    }
}

// Articles.propTypes = propTypes;

export default Articles;
