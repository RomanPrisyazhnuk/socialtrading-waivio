import { connect } from 'react-redux';
import { getPostsState } from "redux/selectors/postsSelectors";
import { getPosts } from "redux/actions/postsActions";
import Feed from './Feed';

const mapStateToProps = state => ({
    posts: getPostsState(state),
});

const mapDispatchToProps = dispatch => ({
    getPosts: (filter, query) => dispatch(getPosts({ filter, query })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
