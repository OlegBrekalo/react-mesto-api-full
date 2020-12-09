import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

import CurrentUserContext from '../contexts/currentUser';

function Main({ handlersProfile, cards, handlersCard }) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile content-section">
        <div className="profile__avatar-wrapper">
          <img
            src={currentUser.avatar}
            role="presentation"
            alt="Аватар"
            className="profile__avatar"
            onClick={() => handlersProfile.setOpenEditAvatar(true)}
          />
        </div>
        <div className="profile__profile-info">
          <h2 className="profile__name">{currentUser.name}</h2>
          <button
            type="button"
            aria-label="1"
            className="profile__edit-button"
            onClick={() => handlersProfile.setOpenEditProfile(true)}
          />
          <p className="profile__job">{currentUser.about}</p>
        </div>
        <button
          type="button"
          aria-label="1"
          className="profile__add-button"
          onClick={() => handlersProfile.setOpenAddPlace(true)}
        />
      </section>
      <section className="elements content-section">
        <ul className="elements__img-grid">
          {cards.map(({ _id, ...item }) => (
            <Card
              key={_id}
              id={_id}
              name={item.name}
              link={item.link}
              likes={item.likes}
              owner={item.owner}
              onClick={handlersCard.click}
              onLike={handlersCard.like}
              onDelete={handlersCard.delete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

Main.propTypes = {
  handlersProfile: PropTypes.objectOf(PropTypes.func).isRequired,
  cards: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
  handlersCard: PropTypes.objectOf(PropTypes.func).isRequired,
};

Main.defaultProps = {
  cards: null,
};

export default Main;
