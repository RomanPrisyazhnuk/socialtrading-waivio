// // import { getArticlesState, getHasMoreNewsState, getNewsLoadedState } from 'redux/selectors/entities/newsSelectors';
// // import { getCurrentUserAssetsState, getCurrentUserLanguageState } from 'redux/selectors/entities/userSelectors';
// // import { getLastNews } from 'redux/actions/entities/newsActions';
// import { connect } from 'react-redux';
// import { makeTags } from 'helpers/makeTags';
// import React from 'react';
export { default } from './Articles';
//
// const ArticlesContainer = props => <Articles {...props}/>;
//
// function mapStateToProps(state) {
//     return {
//         articles: getArticlesState(state),
//         hasMore: getHasMoreNewsState(state),
//         assets: getCurrentUserAssetsState(state),
//         language: getCurrentUserLanguageState(state),
//         isLoaded: getNewsLoadedState(state),
//     };
// }
//
// function mergeProps(stateProps, dispatchProps) {
//     const { language, assets } = stateProps;
//     const { dispatch } = dispatchProps;
//     return {
//         ...stateProps,
//         ...dispatchProps,
//         getEntity: () => dispatch(getLastNews(10, language, makeTags(assets, language))),
//     };
// }
//
// export default connect(mapStateToProps, null, mergeProps)(ArticlesContainer);
