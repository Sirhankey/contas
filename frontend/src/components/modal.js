/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react';
import Form from './form';
import styled from "styled-components";

const modal = {
    display: 'flex',
    'flexDirection': 'column',
    'align-content': 'center',
    'justifyContent': 'center',
    'align-items': 'center',
}

const Button_red = styled.button`
    cursor: pointer;
    border-radius: 5px;
    border: none;
    height: 30px;
    color: white;
    background-color: red;   
    padding: 5px;
`;

const Button_green = styled.button`
    cursor: pointer;
    border-radius: 5px;
    border: none;
    height: 30px;
    color: white;
    background-color: green;   
    padding: 5px;
`;


const Modal_ = ({ isOpen, onClose, children }) => {

    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div style={modal}>
                <Button_red className="modal-close" onClick={onClose}>
                    Fechar
                </Button_red>
                {children}
            </div>
        </div>
    );
};


const Modal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>

            {!isModalOpen ? (
                <Button_green onClick={openModal}>Adicionar Conta</Button_green>
            ) : (
                ''
            )}

            <Modal_ isOpen={isModalOpen} onClose={closeModal}>
                <Form></Form>
            </Modal_>
        </div>
    );
};

export default Modal;