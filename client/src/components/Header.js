/* eslint-disable jsx-a11y/anchor-is-valid */

import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { UserProvider, UserContext } from '../context/user';
import {
  LoggedInContext,
  loggedIn,
  loggedInContext,
} from '../context/loggedIn';

function Header({}) {
  const { user, setUser } = useContext(UserContext);
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext);

  const navigate = useNavigate();

  function handleLogout() {
    fetch(`/logout`, {
      method: 'DELETE',
    }).then(() => {
      setUser({});
      setLoggedIn(false);
      navigate('/');
    });
  }

  return (
    <div>
      <div className='text-gray-900 bg-primary navbar'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost sm:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='w-56 p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box'>
              {/* <li>
                <NavLink to='/' className='font-bold uppercase'>
                  the best
                </NavLink>
              </li> */}
              {/* <li>
                <NavLink to='/concerts' className='font-bold uppercase'>
                  concerts
                </NavLink>
              </li> */}

              <div>
                {/* {currentUser === (null || '') && (
                  <li>
                    <NavLink className='font-bold uppercase' to='/login'>
                      login
                    </NavLink>
                  </li>
                )} */}
                {/* {currentUser !== (null || '') && (
                  <div>
                    <li>
                      <NavLink className='font-bold uppercase' to='/'>
                        <button
                          className='font-bold uppercase'
                          onClick={handleLogout}>
                          logout {currentUser.username}
                        </button>
                      </NavLink>
                    </li>
                  </div>
                )} */}
              </div>
            </ul>
          </div>
          <div className='navbar-start'>
            <div className='flex-auto p-4'>
              <Link to='/'>
                <h3 className='text-5xl italic text-gray-900 uppercase shadow-2xl btn btn-ghost'>
                  cocktails?
                </h3>
              </Link>
            </div>
          </div>
        </div>

        {loggedIn === true ? (
          user.latitude !== null ? (
            <div className='navbar-center sm:flex'>
              <div className='flex-auto'>
                <ul className='p-0 menu menu-horizontal'>
                  <li>
                    <NavLink
                      to='/addressUpdate'
                      className='font-bold uppercase border-none shadow-2xl btn btn-outline '>
                      <h3 className='font-bold uppercase'>CHANGE ADDRESS</h3>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      // to={`/users/${user.id}`}
                      to='/yourReviews'
                      className='font-bold uppercase border-none shadow-2xl btn btn-outline'>
                      <h3 className='font-bold uppercase'>your Reviews</h3>
                    </NavLink>
                  </li>
                  {/* <li>
                    <NavLink
                      // to={`/users/${user.id}`}
                      to='/yourBarCocktails'
                      className='font-bold uppercase border-none shadow-2xl btn btn-outline'>
                      <h3 className='font-bold uppercase'>your Cocktails</h3>
                    </NavLink>
                  </li> */}
                  <li>
                    <NavLink
                      to='/bars'
                      className='font-bold uppercase border-none shadow-2xl btn btn-outline '>
                      <h3 className='font-bold uppercase'>bars near you</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to='/bar_cocktails'
                      className='font-bold uppercase border-none shadow-2xl btn btn-outline '>
                      <h3 className='font-bold uppercase'>
                        the cocktail library
                      </h3>
                    </NavLink>
                  </li>
                  {/* {loggedIn === true && (
              <li>
                <NavLink
                  to='/thisUser'
                  state={{ thisUser: currentUser }}
                  className='font-bold uppercase border-none btn btn-outline'>
                  Your Activity
                </NavLink>
              </li>
            )} */}
                </ul>
              </div>
            </div>
          ) : (
            <li>
              <NavLink
                to='/addressUpdate'
                className='font-bold uppercase border-none btn btn-outline'>
                <h3 className='font-bold uppercase'>
                  SUBMIT YOUR ADDRESS TO START
                </h3>
              </NavLink>
            </li>
          )
        ) : (
          <li>
            <NavLink
              className='text-4xl font-bold text-gray-900 uppercase border-none shadow-2xl btn btn-outline'
              to='/login'>
              LOGIN
            </NavLink>
          </li>
        )}

        <div className='hidden navbar-end sm:flex'>
          <div className='flex-initial'>
            <ul className='float-right p-0 menu menu-horizontal'>
              {loggedIn === true && (
                <div>
                  <li>
                    <button
                      className='font-bold uppercase border-none shadow-2xl btn btn-outline'
                      onClick={handleLogout}>
                      logout {user.username}
                    </button>
                  </li>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
