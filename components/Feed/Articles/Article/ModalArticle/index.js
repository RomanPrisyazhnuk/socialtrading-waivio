import { connect } from 'react-redux';
import { createPost, votePost, getStream, resteemPost } from "redux/actions/postsActions";
import ModalArticle from './ModalArticle';

const mapDispatchToProps = dispatch => ({
    createPost: (payload, privateKey) => dispatch(createPost({ payload, privateKey })),
    votePost: (payload, privateKey) => dispatch(votePost({ payload, privateKey })),
    resteemPost: (payload, privateKey) => dispatch(resteemPost({ payload, privateKey })),
    getStream: (payload, privateKey) => dispatch(getStream({ payload, privateKey })),
});

export default connect(null, mapDispatchToProps)(ModalArticle);
