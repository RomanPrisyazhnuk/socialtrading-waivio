import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import React, { Fragment } from 'react';
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

class ToggledModal extends React.Component {
    constructor() {
        super();
        this.state = { isOpen: false };
    }

    toggle() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        const { isOpen } = this.state;
        const {
            TogglerElement, ModalBody, headerTitle, modalStyles,
        } = this.props;
        return (
            <Fragment>
                <div onClick={this.toggle}>
                    <TogglerElement />
                </div>
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
ToggledModal.propTypes = {
    headerTitle: PropTypes.string.isRequired,
    modalStyles: PropTypes.object,
};
StyledModal.propTypes = {
    width: PropTypes.string.isRequired,
    marginTop: PropTypes.string.isRequired,
};

export default ToggledModal;
