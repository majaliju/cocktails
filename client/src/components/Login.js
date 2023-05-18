import { useState, useEffect, useContext } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/user';
import { LoggedInContext } from '../context/loggedIn';

function Login({}) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [errorsExist, setErrorsExist] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { setUser } = useContext(UserContext);
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext);

  function handleSubmit(e) {
    e.preventDefault();
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        response.json().then((info) => {
          console.log('response info in /login submit: ', info);
          setUser(info);
          setLoggedIn(true);
          setError('');
          setErrorsExist(false);
          setSuccess('success!');
          setSubmitted(true);
          navigate('/');
        });
      } else {
        response.json().then((e) => {
          console.log('e: ', e);
          setErrorsExist(true);
          setError(e.error);
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

                <span>{error}</span>
              </div>
            </div>
          ) : null}

          <h1 className='text-2xl font-bold text-center text-white sm:text-3xl'>
            LOGIN
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
                placeholder='first, type your username here'
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
                placeholder='then, type your password and you can log in'
                className='w-full max-w-xl input input-bordered input-primary'
              />
            </div>
            {submitted === false ? (
              username !== '' ? (
                password !== '' ? (
                  <div>
                    <div class='form-control mt-6'>
                      <button class='btn btn-primary'>Login</button>
                    </div>
                  </div>
                ) : null
              ) : null
            ) : (
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
                  <span>Welcome! You're logged in!</span>
                </div>
              </div>
            )}
            <div>
              <label>
                <Link
                  to='/signup'
                  type='submit'
                  class='btn btn-ghost w-full font-bold form-control text-secondary uppercase'>
                  First time here? Sign up!
                </Link>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

// {submitted === false ? (
//   <div>
//     <div class='form-control mt-6'>
//       <button class='btn btn-primary'>Login</button>
//     </div>
//     <label>
//       <Link
//         to='/signup'
//         type='submit'
//         class='btn btn-ghost w-full font-bold form-control text-secondary-content uppercase'>
//         First time here? Sign up!
//       </Link>
//     </label>
//   </div>
// ) : (
//   <div className='shadow-lg alert alert-success'>
//     <div>
//       <svg
//         xmlns='http://www.w3.org/2000/svg'
//         className='flex-shrink-0 w-6 h-6 stroke-current'
//         fill='none'
//         viewBox='0 0 24 24'>
//         <path
//           strokeLinecap='round'
//           strokeLinejoin='round'
//           strokeWidth='2'
//           d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
//         />
//       </svg>
//       <span>Welcome! You're logged in!</span>
//     </div>
//   </div>
// )}
