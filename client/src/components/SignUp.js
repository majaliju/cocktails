import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { user, UserProvider, UserContext } from '../context/user';
import {
  LoggedInContext,
  loggedIn,
  loggedInContext,
} from '../context/loggedIn';

function SignUp({}) {
  //todo
  //^ stylize this page way better

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const [errorArray, setErrorArray] = useState([]);
  const [errorsExist, setErrorsExist] = useState(false);
  const [success, setSuccess] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const { setUser } = useContext(UserContext);
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext);

  function handleSubmit(e) {
    e.preventDefault();
    fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        username: username,
        password: password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        response.json().then((newUser) => {
          console.log('newUser: ', newUser);
          setUser(newUser);
          setLoggedIn(true);
          setErrorArray([]);
          setErrorsExist(false);
          setSuccess('Your post has been created!');
          setSubmitted(true);
          navigate('/');
        });
      } else {
        response.json().then((e) => {
          console.log('e. errors within bad response: ', e.errors);
          // set the errorString to e.errors.join(*join with a comma*)
          setErrorsExist(true);
          setErrorArray(e.errors);
          console.log('errorArray state within bad response: ', errorArray);
        });
      }
    });
  }

  return (
    <div>
      <div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
        <div className='max-w-lg mx-auto'>
          {success !== '' ? (
            <div className='shadow-lg alert alert-success'>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='flex-shrink-0 w-6 h-6 stroke-current'
                  fill='none'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
                <span>{success}</span>
              </div>
            </div>
          ) : null}

          {errorsExist !== false ? (
            <div className='shadow-lg alert alert-warning'>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='flex-shrink-0 w-6 h-6 stroke-current'
                  fill='none'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                  />
                </svg>
                {errorArray.map((eachError) => (
                  <span>{eachError}</span>
                ))}
              </div>
            </div>
          ) : null}

          <h1 className='text-2xl font-bold text-center text-white sm:text-3xl'>
            SIGNUP
          </h1>
          <form
            onSubmit={handleSubmit}
            className='p-8 mt-2 mb-0 space-y-4 rounded-lg shadow-2xl'>
            <div class='form-control'>
              <label class='label'>
                <span class='label-text uppercase'>username</span>
              </label>
              <input
                type='text'
                id='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='first, type your desired username here'
                className='w-full max-w-xl input input-bordered input-primary'
              />
            </div>
            <div class='form-control'>
              <label class='label'>
                <span class='label-text uppercase'>password</span>
              </label>
              <input
                type='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='then, type in a new password'
                className='w-full max-w-xl input input-bordered input-primary'
              />
            </div>
            <div class='form-control'>
              <label class='label'>
                <span class='label-text uppercase'>password confirmation</span>
              </label>
              <input
                type='password'
                id='passwordConfirmation'
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                placeholder='then, type it in again to be sure'
                className='w-full max-w-xl input input-bordered input-primary'
              />
            </div>

            {submitted === false ? (
              username !== '' ? (
                password !== '' ? (
                  passwordConfirmation !== '' ? (
                    <div>
                      <div class='form-control mt-6'>
                        <button type='submit' class='btn btn-primary'>
                          Sign Up!
                        </button>
                      </div>
                    </div>
                  ) : null
                ) : null
              ) : null
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
