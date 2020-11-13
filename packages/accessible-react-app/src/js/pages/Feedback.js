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
      <Main headerId={HEADER_ID} headerText={title} setFocus>
        <p>Tell AnyCorp what you think!</p>
        <button onClick={handleOpenModal} type="button">
          Open our feedback form
        </button>
        {/* SR Talking Point - Modal Window Behavior and Labeling */}
        <Modal
          aria={{
            describedby: 'feedback_description',
            labelledby: 'feedback_heading',
            modal: modalIsOpen,
          }}
          className="ac-modal"
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          shouldCloseOnOverlayClick
        >
          <div
            className="ac-layout--flex ac-layout--justify-between"
            id="feedback_header"
          >
            <h1 className="ac-modal__feedback--heading" id="feedback_heading">
              AnyCorp Wants to Hear From You!
            </h1>
            <button
              aria-label="Close feedback modal"
              className="ac-form__button--close"
              onClick={handleCloseModal}
              type="button"
            >
              <span aria-hidden="true">X</span>
            </button>
          </div>
          <div>
            <p
              className="ac-modal__feedback--description"
              id="feedback_description"
            >
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
                <input
                  aria-required="true"
                  className="ac-form__input"
                  type="text"
                  id="name"
                  required
                />
                {/* FE Talking Point - Linting */}
                {/* eslint-disable-next-line jsx-a11y/label-has-for */}
                <label className="ac-form__label">Your email address</label>
                <input
                  aria-required="true"
                  className="ac-form__input"
                  type="email"
                  id="email"
                  required
                />
                <label className="ac-form__label" htmlFor="feedback">
                  Your feedback
                </label>
                <textarea
                  aria-required="true"
                  className="ac-form__textarea"
                  id="feedback"
                  required
                />
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
