import { connect } from 'react-redux';
import { createPost, votePost } from "redux/actions/postsActions";
import ModalArticle from './ModalArticle';

const mapDispatchToProps = dispatch => ({
    createPost: (payload, privateKey) => dispatch(createPost({ payload, privateKey })),
    votePost: (payload, privateKey) => dispatch(votePost({ payload, privateKey })),
});

export default connect(null, mapDispatchToProps)(ModalArticle);
