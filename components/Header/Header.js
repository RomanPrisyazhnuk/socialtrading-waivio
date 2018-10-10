// import React from 'react';
// import './Header.scss';
// import { Navbar, NavbarToggler } from 'reactstrap';
// import PropTypes from 'prop-types';
//
// const Header = ({
//     isSignIn, name, logOut, toggleMenu,
// }) => {
//     return (
//         <div className="bh-header">
//             <Navbar className="bh-header-fixed" color="faded" light>
//                 {isSignIn && <NavbarToggler className="d-lg-none" onClick={toggleMenu}/>}
//                 <img className="bh-header-logo" src="/static/images/logo.png"/>
//                 {isSignIn
//                     && (
//                         <div className="bh-user-info mr-0 mr-lg-3">
//                             <div className="bh-grey-header-block bh-header-username d-none d-lg-flex">{name}</div>
//                             <img className="bh-grey-header-block bh-grey-block-icon ml-3" src="/static/icons/logOut.svg" onClick={logOut}/>
//                         </div>
//                     )}
//             </Navbar>
//         </div>);
// };
//
// Header.propTypes = {
//     isSignIn: PropTypes.bool.isRequired,
//     logOut: PropTypes.func.isRequired,
//     toggleMenu: PropTypes.func.isRequired,
//     name: PropTypes.string,
// };
//
// export default Header;
