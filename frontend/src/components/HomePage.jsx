import Footer from "./Footer";
import Header from "./Header";
import Body from "./Body";

import { useState } from "react";

const HomePage = () => {

  const [showPetitionContent, setShowPetitionContent] = useState(false)


  return (
    <>
      <Header setShowPetitionContent={setShowPetitionContent} />
      <Body showPetitionContent={showPetitionContent} />
      <Footer />
    </>
  );
};

export default HomePage;
