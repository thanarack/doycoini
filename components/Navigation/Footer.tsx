import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="font-ibm p-4 bg-white shadow md:px-6 md:py-8">
      <div className="container mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://doycoini.com"
            className="flex items-center mb-4 sm:mb-0"
          >
            <img
              src="/images/logo.svg"
              className="mr-3 h-8"
              alt="Doycoini Logo"
            />
            <span className="self-center text-2xl text-neutral-800 font-semibold whitespace-nowrap">
              DOYCOINI
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-neutral-600 sm:mb-0 font-medium">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                เกี่ยวกับ
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                นโยบายการใช้งาน
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                ติดต่อเรา
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-neutral-200 sm:mx-auto lg:my-8" />
        <div className="text-sm font-semibold justify-center text-neutral-600 sm:text-center flex flex-row mx-auto gap-1">
          <span>© 2022</span>
          <Link href="https://doycoini.com" className="hover:underline">
            Doycoini
          </Link>
          <span>. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
