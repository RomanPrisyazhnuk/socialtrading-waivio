/* eslint-disable jsx-a11y/label-has-for,jsx-a11y/label-has-associated-control */
import _ from 'lodash';
import React from 'react';
import './Feed.scss';
import Flex from "components/common/Flex";
import Post from "components/Post";
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Feed = ({
    posts, getPosts,
}) => {
    const handleClick = () => {
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
                <Flex column>
                    <div className="col-md-4">
                        <label htmlFor="filters">Filters</label>
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
                        <label htmlFor="tag">Tag</label>
                        <input id="tag" className="form-control"/>
                    </div>
                </Flex>
                <Flex column>
                    <div className="col-md-4 mt-3">
                        <button className="btn btn-primary" onClick={handleClick}>Get Posts</button>
                    </div>
                </Flex>
                <Flex column>
                    <div className="col-sm list-group mt-3" id="postList">
                        {posts && _.map(posts, post => <Post key={post.title} post={post} />)}
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
