import React from 'react';
import PropTypes from 'prop-types';
import { signInUser } from '../api/auth';

export default function SignIn({ user }) {
  return (
    <>
      {user === null ? (
        'Loading...'
      ) : (
        <div className="text-center mt-5">
          <h1>Welcome! Sign In!</h1>
          <button
            type="button"
            className="btn btn-success"
            onClick={signInUser}
          >
            Sign In
          </button>
        </div>
      )}
    </>
  );
}

SignIn.propTypes = {
  user: PropTypes.node,
};
SignIn.defaultProps = {
  user: null,
};
// had to set default props of user to show null for the loading element
