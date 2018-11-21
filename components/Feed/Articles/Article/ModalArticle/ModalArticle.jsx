/* eslint-disable react/destructuring-assignment,react/prefer-stateless-function,react/jsx-no-target-blank,react/prop-types */
import './ModalArticle.scss';
import _ from 'lodash';
import { Modal, ModalBody } from 'reactstrap';
import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { PrivateKey } from "dsteem";

const propTypes = {
    article: PropTypes.object.isRequired,
};
// guest123 = 5JRaypasxMx1L97ZUX7YuC5Psb5EAbF821kkAGtBj7xCJFQcbLg
// monterey = '5JKTrjkXrXRsaYRwDpByazkjSm8juahvJLwjdVeRCXTAKFGMSU9'
// stanislavh = '5J9m5YLeCgiMK3duuLhJEsxyRNjEqmPm4o7aSXBvC7wLDAVWq9Q'
const accounts = {
    stanislavh: { name: "stanislavh", postingKey: "5J9m5YLeCgiMK3duuLhJEsxyRNjEqmPm4o7aSXBvC7wLDAVWq9Q", defaultTags: 'spanish' },
    monterey: { name: "monterey", postingKey: "5JKTrjkXrXRsaYRwDpByazkjSm8juahvJLwjdVeRCXTAKFGMSU9", defaultTags: 'money trade news cryptocurrency economics' },
    waiviodev: { name: "waiviodev", postingKey: "5K5f6cnZGDmkugPNZNNYWQ9WZY9j9e5ykepmXK1TeFdY9nUB33Y", defaultTags: 'waivio' },
    eugenezh: { name: "eugenezh", postingKey: "5JEWK6YE4AcjAZDZt7xGKFPznKgijettZip6nWKmdvcsojsGfbG", defaultTags: '' },
    jucci: { name: "jucci", postingKey: "5Hpr4A1QE42fK2GzpewymQ9UrZR7GVaXa9PpbcY8P91qDjmuDae", defaultTags: '' },
    abryukhanova: { name: "abryukhanova", postingKey: "5KenxhsgghyndYq6RFxqQa6Jw7fbdSzDKK5LyW3DfMqchRzSsiS", defaultTags: '' },
    milklim: { name: "milklim", postingKey: "5JHGCV2q1Ef3yNqVd7eLqpiAEZHm8qsujxdXt6ysdLDxn9K9JRq", defaultTags: '' },
    dforbf: { name: "dforbf", postingKey: "5J3dGUiLPFG6MegHRbD5z9zUr7JPE3dgP5r4iMv9ZgtciQUhpqH", defaultTags: '' },
    'taras-7': { name: "taras-7", postingKey: "5K3URoHVuJ8AujGdkaasLCaBQVjoVXwxKhVxeL6cwuV8rxnjeqr", defaultTags: '' },
    grykat: { name: "grykat", postingKey: "5JDfXBckB3viVP55vKyijPF638BReQZ8s8ZP2PYr9bkcXxgdr6d", defaultTags: '' },
    konstantinabr: { name: "konstantinabr", postingKey: "5KTdBZz2NMCztz5qe3LP6iAmexjjniddVUPN3zPatPnCYRJ4gih", defaultTags: '' },
    xiorik: { name: "xiorik", postingKey: "5Jp99AfJTmh2gtGwLPjdJ8RwjfwP8AjpPNZfxSBBaw9AuhFVuc8", defaultTags: '' },
    'eric-mon': { name: "eric-mon", postingKey: "5JnqedZGdEQNN6WugjfEhmnxjTg8soCMdAW1QG7BRbaMSWJUwyR", defaultTags: '' },
    romanprisyazhnuk: { name: "romanprisyazhnuk", postingKey: "5JkfRyyvUccmw7VeR3NVs8YBfDsahDATXpsYQLR4GWyzccc321m", defaultTags: '' },
    guest123: { name: "guest123", postingKey: "5JRaypasxMx1L97ZUX7YuC5Psb5EAbF821kkAGtBj7xCJFQcbLg", defaultTags: '' },
    social: { name: "social", postingKey: "5JrvPrQeBBvCRdjv29iDvkwn3EQYZ9jqfAHzrCyUvfbEbRkrYFC", defaultTags: '' },
};
class ModalArticle extends Component {
    getAccountDefaults(account) {
        document.getElementById('postingKey').value = accounts[account].postingKey;
        document.getElementById('username').value = accounts[account].name;
        document.getElementById('tags').value = accounts[account].defaultTags;
    }

    handleSetGuest123() {
        document.getElementById('postingKey').value = '5JRaypasxMx1L97ZUX7YuC5Psb5EAbF821kkAGtBj7xCJFQcbLg';
        document.getElementById('username').value = 'guest123';
        document.getElementById('tags').value = 'bla';
    }

    votePost(postPermlink, authorName, voterName, privateKey) {
        const vote = {
            voter: voterName,
            author: authorName,
            permlink: postPermlink,
            weight: 10000,
        };
        this.props.votePost(vote, PrivateKey.fromString(privateKey));
    }

    voteAllAccounts(postPermlink, authorName) {
        _.forEach(accounts, (acc) => {
            setTimeout(() => { this.votePost(postPermlink, authorName, acc.name, acc.postingKey); }, _.random(2000, 150000));
        });
    }

    likeAllByPermlink() {
        const postPermlink = document.getElementById('permlinkPostToLike').value;
        const authorName = document.getElementById('authorToLike').value;
        this.voteAllAccounts(postPermlink, authorName);
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
            const body = `<center><img src=${article.image || 'https://ipfs.busy.org/ipfs/QmTyfJ7V7ynvVfKnmUPo6zfcSVZ3X491uf4eo4K7HYDyna'}></center></br>${article.text}</br>  [Russian version](https://www.investforum.ru/)`;
            const taglist = tags.split(' ');
            const jsonMetadata = JSON.stringify(
                {
                    tags: taglist,
                    image: [article.image || 'https://ipfs.busy.org/ipfs/QmTyfJ7V7ynvVfKnmUPo6zfcSVZ3X491uf4eo4K7HYDyna'],
                    app: "busy/2.5.6",
                });
            const permlink = `${document.getElementById('username').value}-best-post-${Math.random()
                .toString(36)
                .substring(2)
            }`;
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
            this.voteAllAccounts(permlink, account);
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
                <div className="d-flex">
                    <button className='btn btn-primary m-2' onClick={this.getAccountDefaults.bind(this, 'stanislavh')}>Stanislavh</button>
                    <button className='btn btn-primary m-2' onClick={this.getAccountDefaults.bind(this, 'monterey')}>Monterey</button>
                    <button className='btn btn-primary m-2' onClick={this.handleSetGuest123}>Guest123</button>
                </div>
                <button className='btn btn-primary m-2' onClick={this.handleCreatePost.bind(this, article, createPost)}>Send to Steem</button>
                <div className='m-2'>
                    permlinkPostToLike:
                    <input id="permlinkPostToLike" type="text" size="65" className="form-control"/>
                </div>
                <div className='m-2'>
                    authorToLike:
                    <input id="authorToLike" type="text" size="65" className="form-control"/>
                </div>
                <button className='btn btn-primary m-2' onClick={this.likeAllByPermlink.bind(this)}>LikeAllByPermlink</button>
            </Modal>
        );
    }
}

ModalArticle.propTypes = propTypes;

export default injectIntl(ModalArticle);
