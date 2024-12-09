"use client";
import { initFlowbite } from "flowbite";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  useEffect(() => {
    initFlowbite;
  }, []);
  const [isreminder, setIsReminder] = useState(true);
  return (
    <>
      {isreminder && (
        <div
          id="signup-reminder"
          className="bg-black  flex justify-center relative  py-2"
        >
          <span  className="text-sm  text-white">
            Sign up and get 20% off to your first order. <Link href="/signup"><u>Sign Up Now </u></Link>
          </span>
          <span
            onClick={() => setIsReminder(false)}
            className=" hidden md:block absolute right-5  lg:right-24 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#e8eaed"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </span>
        </div>
      )}

      <nav className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0 z-10">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden  focus:outline-none  focus:ring-gray-200 dark:text-gray-400  "
              aria-controls="navbar-user"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>

            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-2xl font-bold whitespace-nowrap  text-black">
                SHOP.CO
              </span>
            </Link>
          </div>
          <div className="flex items-center  md:order-2  rtl:space-x-reverse gap-5">
            <div className="flex ">
              <button
                type="button"
                data-collapse-toggle="navbar-user"
                aria-controls="navbar-user"
                aria-expanded="false"
                className="lg:hidden text-black dark:text-gray-400  focus:outline-none focus:ring-4   rounded-lg text-sm p-2.5 me-1"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>

              <div className="relative hidden lg:block w-96 ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search icon</span>
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-secondary  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                  placeholder="Search for products..."
                />
              </div>
            </div>
            <Link
              href="/carts"
              className="flex text-sm rounded-full "
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.375 20.25C9.375 20.6208 9.26503 20.9834 9.059 21.2917C8.85298 21.6 8.56014 21.8404 8.21753 21.9823C7.87492 22.1242 7.49792 22.1613 7.1342 22.089C6.77049 22.0166 6.4364 21.838 6.17417 21.5758C5.91195 21.3136 5.73337 20.9795 5.66103 20.6158C5.58868 20.2521 5.62581 19.8751 5.76773 19.5325C5.90964 19.1899 6.14996 18.897 6.45831 18.691C6.76665 18.485 7.12916 18.375 7.5 18.375C7.99728 18.375 8.47419 18.5725 8.82582 18.9242C9.17745 19.2758 9.375 19.7527 9.375 20.25ZM17.25 18.375C16.8792 18.375 16.5166 18.485 16.2083 18.691C15.9 18.897 15.6596 19.1899 15.5177 19.5325C15.3758 19.8751 15.3387 20.2521 15.411 20.6158C15.4834 20.9795 15.662 21.3136 15.9242 21.5758C16.1864 21.838 16.5205 22.0166 16.8842 22.089C17.2479 22.1613 17.6249 22.1242 17.9675 21.9823C18.3101 21.8404 18.603 21.6 18.809 21.2917C19.015 20.9834 19.125 20.6208 19.125 20.25C19.125 19.7527 18.9275 19.2758 18.5758 18.9242C18.2242 18.5725 17.7473 18.375 17.25 18.375ZM22.0753 7.08094L19.5169 15.3966C19.3535 15.9343 19.0211 16.4051 18.569 16.739C18.1169 17.0729 17.5692 17.2521 17.0072 17.25H7.77469C7.2046 17.2482 6.65046 17.0616 6.1953 16.7183C5.74015 16.3751 5.40848 15.8936 5.25 15.3459L2.04469 4.125H1.125C0.826631 4.125 0.540483 4.00647 0.329505 3.7955C0.118526 3.58452 0 3.29837 0 3C0 2.70163 0.118526 2.41548 0.329505 2.2045C0.540483 1.99353 0.826631 1.875 1.125 1.875H2.32687C2.73407 1.87626 3.12988 2.00951 3.45493 2.25478C3.77998 2.50004 4.01674 2.84409 4.12969 3.23531L4.81312 5.625H21C21.1761 5.62499 21.3497 5.6663 21.5069 5.74561C21.664 5.82492 21.8004 5.94001 21.905 6.08164C22.0096 6.22326 22.0795 6.38746 22.1091 6.56102C22.1387 6.73458 22.1271 6.91266 22.0753 7.08094ZM19.4766 7.875H5.45531L7.41375 14.7281C7.43617 14.8065 7.48354 14.8755 7.54867 14.9245C7.6138 14.9736 7.69315 15.0001 7.77469 15H17.0072C17.0875 15.0002 17.1656 14.9746 17.2303 14.927C17.2949 14.8794 17.3426 14.8123 17.3662 14.7356L19.4766 7.875Z"
                  fill="black"
                />
              </svg>
            </Link>

            <button
              type="button"
              className="flex text-sm rounded-full md:me-0   "
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 0.875C8.99747 0.875 7.0399 1.46882 5.37486 2.58137C3.70981 3.69392 2.41206 5.27523 1.64572 7.12533C0.879387 8.97543 0.678878 11.0112 1.06955 12.9753C1.46023 14.9393 2.42454 16.7435 3.84055 18.1595C5.25656 19.5755 7.06066 20.5398 9.02471 20.9305C10.9888 21.3211 13.0246 21.1206 14.8747 20.3543C16.7248 19.5879 18.3061 18.2902 19.4186 16.6251C20.5312 14.9601 21.125 13.0025 21.125 11C21.122 8.3156 20.0543 5.74199 18.1562 3.84383C16.258 1.94567 13.6844 0.877978 11 0.875ZM6.45969 17.4284C6.98195 16.7143 7.66528 16.1335 8.45418 15.7331C9.24308 15.3327 10.1153 15.124 11 15.124C11.8847 15.124 12.7569 15.3327 13.5458 15.7331C14.3347 16.1335 15.0181 16.7143 15.5403 17.4284C14.2134 18.3695 12.6268 18.875 11 18.875C9.37323 18.875 7.78665 18.3695 6.45969 17.4284ZM8.375 10.25C8.375 9.73082 8.52896 9.22331 8.8174 8.79163C9.10583 8.35995 9.5158 8.0235 9.99546 7.82482C10.4751 7.62614 11.0029 7.57415 11.5121 7.67544C12.0213 7.77672 12.489 8.02673 12.8562 8.39384C13.2233 8.76096 13.4733 9.22869 13.5746 9.73789C13.6759 10.2471 13.6239 10.7749 13.4252 11.2545C13.2265 11.7342 12.8901 12.1442 12.4584 12.4326C12.0267 12.721 11.5192 12.875 11 12.875C10.3038 12.875 9.63613 12.5984 9.14385 12.1062C8.65157 11.6139 8.375 10.9462 8.375 10.25ZM17.1875 15.8694C16.4583 14.9419 15.5289 14.1914 14.4688 13.6737C15.1444 12.9896 15.6026 12.1208 15.7858 11.1769C15.9689 10.2329 15.8688 9.25583 15.498 8.36861C15.1273 7.4814 14.5024 6.72364 13.702 6.19068C12.9017 5.65771 11.9616 5.37334 11 5.37334C10.0384 5.37334 9.09833 5.65771 8.29797 6.19068C7.49762 6.72364 6.87275 7.4814 6.50198 8.36861C6.13121 9.25583 6.0311 10.2329 6.21424 11.1769C6.39739 12.1208 6.85561 12.9896 7.53125 13.6737C6.4711 14.1914 5.54168 14.9419 4.8125 15.8694C3.89661 14.7083 3.32614 13.3129 3.1664 11.8427C3.00665 10.3725 3.2641 8.88711 3.90925 7.55644C4.55441 6.22578 5.5612 5.10366 6.81439 4.31855C8.06757 3.53343 9.5165 3.11703 10.9953 3.11703C12.4741 3.11703 13.9231 3.53343 15.1762 4.31855C16.4294 5.10366 17.4362 6.22578 18.0814 7.55644C18.7265 8.88711 18.984 10.3725 18.8242 11.8427C18.6645 13.3129 18.094 14.7083 17.1781 15.8694H17.1875Z"
                  fill="black"
                />
              </svg>
            </button>

            {/* <!-- Dropdown menu --> */}
            <div
              className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                  name@flowbite.com
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2  text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border focus:border-gray-500 border-gray-300 rounded-lg bg-gray-50 "
                placeholder="Search for products..."
              />
            </div>

            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <button
                  id="mega-menu-full-dropdown-button"
                  data-collapse-toggle="mega-menu-full-dropdown"
                  className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-500 md:p-0 dark:text-white md:dark:hover:text-gray-500 dark:hover:bg-gray-500 dark:hover:text-gray-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Shop{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <a
                  href="#top-selling"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-500 md:p-0 dark:text-gray-500 md:dark:hover:text-gray-500  dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  On Sale
                </a>
              </li>
              <li>
                <a
                  href="#new-arrival"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-500 md:p-0 dark:text-white md:dark:hover:text-gray-500 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  New Arrivals
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-500 md:p-0 dark:text-gray-500 md:dark:hover:text-gray-500 dark:hover:text-gray-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Brands
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          id="mega-menu-full-dropdown"
          className="mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600 hidden "
        >
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
            <ul>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Online Stores</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Segmentation</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Marketing CRM</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Online Stores</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Segmentation</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Marketing CRM</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
