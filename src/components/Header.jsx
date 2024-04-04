
'use client';
import AppLogo from './AppLogo';
import { Link } from 'react-router-dom';



export default function Header() {

  const logout = () =>{
    localStorage.clear();
    window.location.href = '/login'
  }

    return (
      <header class="bg-gray-900 border-gray-200">
        <nav>
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div
              class="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <AppLogo />
            </div>
            <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                class="flex text-sm md:me-0 text-red-300"
                onClick={logout}
              >
                LOGOUT
              </button>
            </div>
            <div
              class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-user"
            >
              <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    to="/"
                    class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                  >
                    Tasks Manager
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
}
