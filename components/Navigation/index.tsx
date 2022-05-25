const Navigation = () => {
  return (
    <div>
      <nav className="font-ibm bg-white border-white px-2 sm:px-4 py-2.5 shadow-sm">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="https://doycoini.com" className="flex items-center">
            <img
              src="/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Doycoini Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-neutral-800">
              DOYCOINI
            </span>
          </a>
          <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1">
            <div className="relative mt-3 md:hidden">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
            <ul className="flex flex-col lg:flex-row mt-4 md:flexRow md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-neutral-600 bg-neutral-800 rounded md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  หน้าหลัก
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-neutral-600 border-b border-gray-100 md:border-0 md:p-0"
                >
                  เรื่องน่าสนใจ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-neutral-600 border-b border-gray-100 md:border-0 md:p-0"
                >
                  ตรวจหวย
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
