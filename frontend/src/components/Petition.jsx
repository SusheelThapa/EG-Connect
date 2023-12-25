import { useEffect, useState } from "react";
import PetitionCard from "./common/PetitionCard";

import { getPetition } from "../api/petition";

const PetitionContent = () => {
  const [petitions, setPetitions] = useState([]);
  useEffect(() => {
    getPetition().then((response) => {
      console.log(response);
      setPetitions(response);
    });
    return () => {};
  }, []);

  return (
    <div className="mx-48">
      <div className="grid grid-cols-2 gap-4">
        {petitions.map((petition) => {
          return <PetitionCard key={petition.id} petition={petition} />;
        })}
      </div>
    </div>
  );
};

export default PetitionContent;
