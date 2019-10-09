import React, { useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { HEADER_ID } from '../config/constants';

import Layout from '../layout/Layout';
import Main from '../components/Main';

Modal.setAppElement('#root');

const Feedback = props => {
  const { title } = props;
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleCloseModal = () => setModalIsOpen(false);
  const handleOpenModal = () => setModalIsOpen(true);

  return (
    <Layout headerText={title} title={title}>
      <Main headerId={HEADER_ID} headerText={title}>
        <p>Send us your feedback!</p>
        <button onClick={handleOpenModal} type="button">
          Tell us your feedback!
        </button>
        <Modal
          aria={{
            describedby: 'feedback_description',
            labelledby: 'feedback_heading',
            modal: modalIsOpen,
          }}
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          shouldCloseOnOverlayClick={false}
        >
          <div
            className="ac-layout--flex ac-layout--justify-between"
            id="feedback_header"
          >
            <h2 id="feedback_heading">AnyCorp Wants Your Feedback!</h2>
            <button
              className="ac-form__button--close"
              onClick={handleCloseModal}
              type="button"
            >
              Close modal
            </button>
          </div>
          <div id="feedback_description">
            <p>
              AnyCorp values your opinion. Please take a moment to fill out our
              simple feedback form and let us know how we can improve your
              experience!
            </p>
          </div>
          <div id="feedback_form">
            <form action="#" className="ac-form">
              <fieldset className="ac-form__fieldset">
                <legend className="ac-form__legend">
                  Your Opinion Matters
                </legend>
                <label className="ac-form__label" htmlFor="name">
                  Your name
                </label>
                <input type="text" id="name" aria-required="true" required />
                <label className="ac-form__label" htmlFor="email">
                  Your email address
                </label>
                <input type="email" id="email" aria-required="true" required />
                <label className="ac-form__label" htmlFor="feedback">
                  Your feedback
                </label>
                <textarea id="feedback" />
                <button
                  className="ac-form__button"
                  onClick={handleCloseModal}
                  type="button"
                >
                  Fake submit and close
                </button>
              </fieldset>
            </form>
          </div>
        </Modal>
      </Main>
    </Layout>
  );
};

Feedback.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Feedback;
