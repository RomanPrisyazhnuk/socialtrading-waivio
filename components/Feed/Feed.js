/* eslint-disable jsx-a11y/label-has-for,jsx-a11y/label-has-associated-control */
import _ from 'lodash';
import React from 'react';
import './Feed.scss';
import PropTypes from 'prop-types';

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
        <div className="container" id="content">
            <div className="row">
                <div className="col-md-4">
                    <label htmlFor="filters">Filters</label>
                    <select id="filters" className="form-control">
                        <option defaultValue>Select filter</option>
                        <option value="trending">Trending</option>
                        <option value="hot">Hot</option>
                        <option value="created">New</option>
                        <option value="promoted">Promoted</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <label htmlFor="tag">Tag</label>
                    <input id="tag" className="form-control"/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 mt-3">
                    <button className="btn btn-primary" onClick={handleClick}>Get Posts</button>
                </div>
            </div>
            <div className="row">
                <div className="col-sm list-group mt-3" id="postList">
                    {posts && _.map(posts, (post) => {
                        const json = JSON.parse(post.json_metadata);
                        const image = json.image ? json.image[0] : '';
                        const title = post.title;
                        const author = post.author;
                        const created = new Date(post.created).toDateString();
                        return (
                            <div className="list-group-item">
                                <h4 className="list-group-item-heading">
                                    {title}
                                </h4>
                                <p>
                                    by
                                    {author}
                                </p>
                                <center>
                                    <img src={image} className="img-responsive center-block"/>
                                </center>
                                <p className="list-group-item-text text-right text-nowrap">{created}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

Feed.propTypes = {
    posts: PropTypes.array.isRequired,
    getPosts: PropTypes.func.isRequired,
};

export default Feed;
