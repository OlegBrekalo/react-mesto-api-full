import React from 'react';
import PropTypes from 'prop-types';

function EntryPoint({ inputs: Inputs, onSubmit }) {
  return (
    <main className="main main_type_login">
      <section>
        <form className="form" onSubmit={onSubmit}>
          {Inputs}
        </form>
      </section>
    </main>
  );
}

EntryPoint.propTypes = {
  inputs: PropTypes.element.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default EntryPoint;
