import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledModal = styled(Modal)`
    width: ${({ width }) => width};
    margin-top: ${({ marginTop }) => marginTop};
`;
const StyledModalHeader = styled(ModalHeader)`
    background-color: #16254c;
    color: white;
    height: 40px;
`;
const StyledModalBody = styled(ModalBody)`
    padding: 15px;
`;
const withModal = (ToglerElement, ModalBody, headerTitle, modalStyles) => {
    class WithToggleModal extends Component {
        constructor(props) {
            super(props);
            this.state = { isOpen: false };
        }

        toggle() {
            this.setState({ isOpen: false });
        }

        render() {
            const { isOpen } = this.state;
            return (
                <Fragment>
                    <ToglerElement onClick={this.toggle}/>
                    {
                        isOpen && (
                            <StyledModal
                                isOpen={isOpen}
                                toggle={this.toggle}
                                width={modalStyles.width}
                                marginTop={modalStyles.marginTop}
                            >
                                <StyledModalHeader toggle={this.toggle}>
                                    {headerTitle}
                                </StyledModalHeader>
                                <StyledModalBody>
                                    <ModalBody {...this.props} toggle={this.toggle}/>
                                </StyledModalBody>
                            </StyledModal>
                        )
                    }
                </Fragment>
            );
        }
    }
    WithToggleModal.propTypes = {
        isOpen: PropTypes.bool.isRequired,
        toggle: PropTypes.func.isRequired,
        headerTitle: PropTypes.string.isRequired,
        modalStyles: PropTypes.object,
    };

    StyledModal.propTypes = {
        width: PropTypes.string.isRequired,
        marginTop: PropTypes.string.isRequired,
    };
};


export default withModal;
