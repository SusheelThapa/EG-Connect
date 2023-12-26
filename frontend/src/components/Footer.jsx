import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

/**
 * @function Footer
 * @description Component for the footer section of the application.
 * It includes the site title, copyright information, and links to social media.
 *
 * @returns {JSX.Element} - The footer component.
 */
const Footer = () => {
  return (
    <div className="bg-black">
      <div className="bg-black h-20 flex justify-between items-center mx-48 text-white">
        <div>
          <div className="text-lg">
            <Link to={`/`}>
              <span className="text-green-500">EG</span>{" "}
              <span className="text-white	bold underline decoration-green-500">
                Connect
              </span>
            </Link>
          </div>
          <div>&copy; 2023 Nepal Government. All rights reserved.</div>
        </div>
        <div className="flex justify-center mt-4">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white mx-2"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white mx-2"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white mx-2"
          >
            <FaTwitter size={20} />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white mx-2"
          >
            <FaXTwitter size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
