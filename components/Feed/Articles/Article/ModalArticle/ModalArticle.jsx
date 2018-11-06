/* eslint-disable react/destructuring-assignment,react/prefer-stateless-function,react/jsx-no-target-blank,react/prop-types */
import './ModalArticle.scss';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
// import moment from 'moment';
import PropTypes from 'prop-types';
import { PrivateKey } from "dsteem";

const propTypes = {
    article: PropTypes.object.isRequired,
};

class ModalArticle extends Component {
    handleCreatePost(article, createPost) {
        const privateKey = PrivateKey.fromString(
            '5JRaypasxMx1L97ZUX7YuC5Psb5EAbF821kkAGtBj7xCJFQcbLg',
        );
        const account = 'guest123';
        const title = article.title;
        const body = `<center><img src=${article.image || 'https://ipfs.busy.org/ipfs/QmTyfJ7V7ynvVfKnmUPo6zfcSVZ3X491uf4eo4K7HYDyna'} alt="asf"></center></br>${article.text}`;
        const tags = ['bla'];
        const jsonMetadata = JSON.stringify(
            {
                tags,
                image: [article.image || 'https://ipfs.busy.org/ipfs/QmTyfJ7V7ynvVfKnmUPo6zfcSVZ3X491uf4eo4K7HYDyna'],
                app: "busy/2.5.6",
            });
        const permlink = Math.random()
            .toString(36)
            .substring(2);
        const payload = {
            author: account,
            body,
            json_metadata: jsonMetadata,
            parent_author: '',
            parent_permlink: tags[0],
            permlink,
            title,
        };
        console.log(payload.toString());
        createPost(payload, privateKey);
    }

    render() {
        const article = this.props.article;
        const createPost = this.props.createPost;
        return (
            <Modal isOpen={this.props.isModalArticleOpen} toggle={this.props.toggleModalArticle} className="modal-article">
                <ModalHeader toggle={this.props.toggleModalArticle}>
                    <span>Article</span>
                </ModalHeader>
                <ModalBody>
                    <div className="modal-article-header">
                        <img className="modal-article-image" src={article.image || 'https://ipfs.busy.org/ipfs/QmTyfJ7V7ynvVfKnmUPo6zfcSVZ3X491uf4eo4K7HYDyna'}/>
                        <div className="modal-article-title">{article.title}</div>
                    </div>
                    <div className="modal-article-top-info">
                        <div className="modal-article-creator">{article.creator}</div>
                    </div>
                    <div className="modal-article-content">
                        {article.text}
                    </div>
                    <div className="modal-article-bottom-info">
                        <a className="modal-article-link" href={article.link} target="_blank">{this.props.intl.formatMessage({ id: 'modalArticle.link' })}</a>
                        {/*<div className="modal-article-created_at">{moment(article.created_at * 1000).format(localeDate('MM/DD/YYYY', this.props.intl.locale))}</div>*/}
                    </div>
                </ModalBody>
                <button className='button btn-primary m-5' onClick={this.handleCreatePost.bind(this, article, createPost)}>Send to Steem</button>
            </Modal>
        );
    }
}

ModalArticle.propTypes = propTypes;

export default injectIntl(ModalArticle);
