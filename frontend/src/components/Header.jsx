import image from "../img/EG-Connect.png";
import logo from "../img/logo.png";

const Header = () => {
  return (
    <>
      <div className="flex justify-center">
        <img
          src={image}
          alt="Description of the image"
          className="h-500 w-5000 max-h-96 max-w-full"
        />
      </div>

      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl mx-48 py-3   flex justify-between items-center">
          <a href="#" className="flex  jusitems-center">
            <img src={logo} className="h-12" alt="EG Connect Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              EG-Connect
            </span>
          </a>
          <div className="flex items-center justify-center space-x-4"></div>
          <ul className="hidden md:flex space-x-8 rtl:space-x-reverse items-center">
            <li>
              <a
                href="#"
                className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500 p-2 rounded-md"
              >
                Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500 p-2 rounded-md"
              >
                Petition
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500 p-2 rounded-md"
              >
                Notice
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
