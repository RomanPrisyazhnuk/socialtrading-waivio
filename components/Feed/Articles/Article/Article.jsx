/* eslint-disable react/destructuring-assignment,react/no-access-state-in-setstate */
import './Article.scss';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ModalArticle from './ModalArticle';

const propTypes = {
    language: PropTypes.string,
    article: PropTypes.object.isRequired,
};

export class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalArticleOpen: false,
        };
        this.toggleModalArticle = this.toggleModalArticle.bind(this);
    }

    toggleModalArticle() {
        this.setState({ isModalArticleOpen: !this.state.isModalArticleOpen });
    }

    render() {
        const article = this.props.article;
        return (
            <div>
                <div className="st-article" onClick={this.toggleModalArticle}>
                    {this.props.language !== 'ru' && <img className="st-article-image" src={article.image || 'https://ipfs.busy.org/ipfs/QmTyfJ7V7ynvVfKnmUPo6zfcSVZ3X491uf4eo4K7HYDyna'}/>}
                    <span className="st-article-text">{article.title}</span>
                    (
                    {article.locale}
                    )
                </div>
                <ModalArticle
                    toggleModalArticle={this.toggleModalArticle}
                    isModalArticleOpen={this.state.isModalArticleOpen}
                    article={article}
                />
            </div>
        );
    }
}

Article.propTypes = propTypes;

export default Article;
