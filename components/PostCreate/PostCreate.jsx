import React, { Fragment } from 'react';
import { PrivateKey } from 'dsteem';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import Flex from "components/common/Flex/index";

const PostCreate = ({ createPost }) => {
    const handleCreatePost = () => {
        const privateKey = PrivateKey.fromString(
            document.getElementById('postingKey').value,
        );
        const account = document.getElementById('username').value;
        const title = document.getElementById('title').value;
        const body = document.getElementById('body').value;
        const tags = document.getElementById('tags').value;
        const taglist = tags.split(' ');
        const jsonMetadata = JSON.stringify({ tags: taglist });
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
        createPost(payload, privateKey);
    };
    return (
        <Fragment>
            <h4>Submit a post to the Steem blockchain</h4>
            Username:
            <input id="username" type="text" size="65" className="form-control"/>
            <br/>
            Posting private key:
            <input id="postingKey" size="65" className="form-control"/>
            <br/>
                Title of post:
            <input
                id="title"
                type="text"
                size="65"
                className="form-control"
            />
            <br/>
            Post body:
            <br/>
            <textarea id="body" className="form-control" rows="3">
                Content of the post
            </textarea>
            <br/>
            Tags:
            <input id="tags" type="text" size="65" className="form-control"/>
            <br/>
            <button onClick={handleCreatePost}>SUBMIT</button>
        </Fragment>
    );
};

PostCreate.propTypes = {
    createPost: PropTypes.func.isRequired,
};

export default PostCreate;
