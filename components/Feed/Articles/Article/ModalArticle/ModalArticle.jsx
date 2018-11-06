/* eslint-disable react/destructuring-assignment,react/prefer-stateless-function,react/jsx-no-target-blank,react/prop-types */
import './ModalArticle.scss';
import { Modal, ModalBody } from 'reactstrap';
import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
// import moment from 'moment';
import PropTypes from 'prop-types';
import { PrivateKey } from "dsteem";

const propTypes = {
    article: PropTypes.object.isRequired,
};
// 5JRaypasxMx1L97ZUX7YuC5Psb5EAbF821kkAGtBj7xCJFQcbLg
class ModalArticle extends Component {
    handleSetDefaults() {
        document.getElementById('postingKey').value = '5JRaypasxMx1L97ZUX7YuC5Psb5EAbF821kkAGtBj7xCJFQcbLg';
        document.getElementById('username').value = 'monterey';
        document.getElementById('tags').value = 'money trade news';
    }

    handleCreatePost(article, createPost) {
        const key = document.getElementById('postingKey').value;
        const account = document.getElementById('username').value;
        const tags = document.getElementById('tags').value;
        if (key && account && tags) {
            const privateKey = PrivateKey.fromString(
                key,
            );
            const title = article.title;
            const body = `<center><img src=${article.image || 'https://ipfs.busy.org/ipfs/QmTyfJ7V7ynvVfKnmUPo6zfcSVZ3X491uf4eo4K7HYDyna'} alt="asf"></center></br>${article.text}`;
            const taglist = tags.split(' ');
            const jsonMetadata = JSON.stringify(
                {
                    tags: taglist,
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
                parent_permlink: taglist[0],
                permlink,
                title,
            };
            console.log(payload.toString());
            createPost(payload, privateKey);
            this.props.toggleModalArticle();
        }
    }

    render() {
        const article = this.props.article;
        const createPost = this.props.createPost;
        return (
            <Modal isOpen={this.props.isModalArticleOpen} toggle={this.props.toggleModalArticle} className="modal-article">
                <ModalBody>
                    <div className="modal-article-header">
                        <img className="modal-article-image" src={article.image || 'https://ipfs.busy.org/ipfs/QmTyfJ7V7ynvVfKnmUPo6zfcSVZ3X491uf4eo4K7HYDyna'}/>
                        <div className="modal-article-title">{article.title}</div>
                    </div>
                    <div className="modal-article-content">
                        {article.text}
                    </div>
                </ModalBody>
                <div className='m-2'>
                    Username:
                    <input id="username" type="text" size="65" className="form-control"/>
                </div>
                <div className='m-2'>
                    Posting private key:
                    <input id="postingKey" size="65" className="form-control"/>
                </div>
                <div className='m-2'>
                Tags:
                    <input id="tags" type="text" size="65" className="form-control"/>
                </div>
                <button className='btn btn-primary m-2' onClick={this.handleSetDefaults}>Set defaults</button>
                <button className='btn btn-primary m-2' onClick={this.handleCreatePost.bind(this, article, createPost)}>Send to Steem</button>
            </Modal>
        );
    }
}

ModalArticle.propTypes = propTypes;

export default injectIntl(ModalArticle);
