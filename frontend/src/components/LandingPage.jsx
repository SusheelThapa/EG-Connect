import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

// Importing Typed.js for text animation
import Typed from "typed.js";

/**
 * @function LandingPage
 * @description Component for the landing page of the application.
 * It features dynamic text animations and a link to the login page.
 *
 * @returns {JSX.Element} - The landing page component.
 */
const LandingPage = () => {
  // useRef hook to reference the element where the Typed.js animation will be applied
  const typed_text = useRef(null);

  // useEffect hook to initialize the Typed.js animation when the component mounts
  useEffect(() => {
    // Initializing Typed.js with various options like strings, speed, looping, etc.
    const typed = new Typed(typed_text.current, {
      strings: ["COUNTRY", "GOVERNMENT", "PUBLIC"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 200,
      loop: true,
      showCursor: true,
      cursorChar: "⚖",
      shuffle: true,
    });

    // Cleanup function to destroy Typed.js instance when component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="bg-transparent w-screen   h-screen text-white flex flex-col items-center justify-center">
      <h1 className="text-8xl m-10">
        <span className="text-green-500">EG</span>{" "}
        <span className="text-white	bold underline decoration-green-500">
          Connect
        </span>
      </h1>
      <div className="text-4xl  mb-5">
        VOICE IN THE {" "}
        <span
          className="text-orange-500 underline bold"
          ref={typed_text}
        ></span>
        .
      </div>
      <Link to="/login">
        <button className="rounded-[15px] bg-green-500 m-6 py-3 px-4 text-3xl font-semibold  font-family-poppins tracking-wider hover:bg-teal-700">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default LandingPage;
