import Button from 'components/common/Button';
import PostCreate from 'components/PostCreate';
import _ from 'lodash';
import React from 'react';
import './Feed.scss';
import Flex from "components/common/Flex";
import Post from "components/Post";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ToggledModal from 'components/common/Modal';
import Articles from "./Articles";

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Feed = ({
    posts, getPosts,
}) => {
    const handleGetPosts = () => {
        const filter = document.getElementById('filters').value;
        const query = {
            tag: document.getElementById('tag').value,
            limit: 5,
        };
        getPosts(filter, query);
    };
    return (
        <Wrapper>
            <div className="container" id="content">
                <center><h1>TradeBlogger admin</h1></center>
                <center><h3>Post news</h3></center>
                <Articles/>
                <center><h3>or</h3></center>
                <div className="m-3 w-100">
                    <ToggledModal
                        TogglerElement={Button}
                        ModalBody={PostCreate}
                        headerTitle='Create post in steemit'
                        modalStyles={{ modalStyles: { width: '300px', marginTop: '150px' } }}
                    />
                </div>
                <center><h3>Find Post by tag</h3></center>
                <Flex column>
                    <div className="col-md-4">
                        <div>Filters</div>
                        <select id="filters" className="form-control">
                            <option value="trending">Trending</option>
                            <option value="hot">Hot</option>
                            <option value="created">New</option>
                            <option value="promoted">Promoted</option>
                        </select>
                    </div>
                </Flex>
                <Flex column>
                    <div className="col-md-4">
                        <div>Tag</div>
                        <input id="tag" className="form-control"/>
                    </div>
                </Flex>
                <Flex column>
                    <div className="col-md-4 mt-3">
                        <button className="btn btn-primary" onClick={handleGetPosts}>Get Posts</button>
                    </div>
                </Flex>
                <Flex column>
                    <div className="col-sm list-group mt-3" id="postList">
                        {posts && _.map(posts, post => <Post key={post.id} post={post} />)}
                    </div>
                </Flex>
            </div>
        </Wrapper>
    );
};

Feed.propTypes = {
    posts: PropTypes.object.isRequired,
    getPosts: PropTypes.func.isRequired,
};

export default Feed;
