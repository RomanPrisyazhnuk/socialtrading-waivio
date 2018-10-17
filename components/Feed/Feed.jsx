/* eslint-disable jsx-a11y/label-has-for,jsx-a11y/label-has-associated-control */
import Button from 'components/Button/index';
import _ from 'lodash';
import React from 'react';
import './Feed.scss';
import Flex from "components/common/Flex/index";
import Post from "components/Post";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import WithToggleModal from '../HOC/withModal';

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
    const TogglerElement = Button;
    const ModalBody = Button;
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
                <WithToggleModal
                    TogglerElement={TogglerElement}
                    ModalBody={ModalBody}
                    headerTitle='SomeHeaderTitle'
                />
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
