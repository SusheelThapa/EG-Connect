import { useRef, useEffect } from "react";
import Typed from "typed.js";
import {Link} from 'react-router-dom'

const LandingPage = () => {
  const typed_text = useRef(null);

  useEffect(() => {
    const typed = new Typed(typed_text.current, {
      strings: ["ABCDE", "FGHIJ", "KLMNO"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 200,
      loop: true,
      showCursor: true,
      cursorChar: "⚖",
      shuffle: true,
    });

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
        Transforming Nation with{" "}
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
