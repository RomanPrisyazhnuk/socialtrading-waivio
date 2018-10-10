/* eslint-disable jsx-a11y/label-has-for,jsx-a11y/label-has-associated-control */
import React from 'react';
import './Feed.scss';
// import PropTypes from 'prop-types';
// import { dsteem } from 'dsteem';
const dsteem = require('dsteem');

const Header = () => {
    const opts = {};

    //connect to production server
    opts.addressPrefix = 'STM';
    opts.chainId = '0000000000000000000000000000000000000000000000000000000000000000';

    //connect to server which is connected to the network/production
    const client = new dsteem.Client('https://api.steemit.com');

    //filter change selection function
    const getPosts = async () => {
        const filter = document.getElementById('filters').value;
        const query = {
            tag: document.getElementById('tag').value,
            limit: 5,
        };

        console.log('Post assembled.\nFilter:', filter, '\nQuery:', query);

        client.database
            .getDiscussions(filter, query)
            .then((result) => {
                console.log('Response received:', result);
                if (result) {
                    const posts = [];
                    result.forEach((post) => {
                        const json = JSON.parse(post.json_metadata);
                        const image = json.image ? json.image[0] : '';
                        const title = post.title;
                        const author = post.author;
                        const created = new Date(post.created).toDateString();
                        posts.push(
                            `<div class="list-group-item"><h4 class="list-group-item-heading">${title}</h4><p>by ${author}</p><center><img src="${image}" class="img-responsive center-block" style="max-width: 450px"/></center><p class="list-group-item-text text-right text-nowrap">${created}</p></div>`,
                        );
                    });

                    document.getElementById('postList').innerHTML = posts.join('');
                } else {
                    document.getElementById('postList').innerHTML = 'No result.';
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="container" id="content">
            <div className="row">
                <div className="col-md-4">
                    <label htmlFor="filters">Filters</label>
                    <select id="filters" className="form-control">
                        <option selected>Select filter</option>
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
                    <button className="btn btn-primary" onClick={getPosts}>Get Posts</button>
                </div>
            </div>
            <div className="row">
                <div className="col-sm list-group mt-3" id="postList" />
            </div>
        </div>
    );
};

Header.propTypes = {
    // posts: PropTypes.object.isRequired,
    // getPosts: PropTypes.func.isRequired,
};

export default Header;
