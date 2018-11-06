import React from 'react';
import styled from 'styled-components';
import Flex from "components/common/Flex/index";
import PropTypes from 'prop-types';

const PostHeader = styled.div`
  color: green;
  font-size: 1.2em;
  max-wight: 100%;
  margin: 1em;
  padding: 2em;
`;
const Post = ({
    post,
}) => {
    const json = JSON.parse(post.json_metadata);
    const image = json.image ? json.image[0] : '';
    const title = post.title;
    const author = post.author;
    const body = post.body;
    const created = new Date(post.created).toDateString();
    return (
        <div className="list-group-item">
            <PostHeader>
                {title}
            </PostHeader>
            <p>
                by
                {author}
            </p>
            <p>
                {body}
            </p>
            <Flex justify='center'>
                <img src={image} className="w-100 img-responsive center-block"/>
            </Flex>
            <p className="list-group-item-text text-right text-nowrap">{created}</p>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired,
};

export default Post;
