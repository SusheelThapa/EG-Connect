import { useEffect, useState } from "react";
import PetitionCard from "./common/PetitionCard";
import { getPetition } from "../api/petition";

/**
 * @function PetitionContent
 * @description Component for displaying petition information.
 * Fetches petition data from an API and displays it using PetitionCard components.
 *
 * @param {Object} props - The props for the PetitionContent component.
 * @param {boolean} props.isLogin - A boolean indicating whether the user is logged in.
 *
 * @returns {JSX.Element} - A list of petitions displayed in PetitionCard components.
 */
const PetitionContent = ({ isLogin }) => {
  // State hook for storing petition data
  const [petitions, setPetitions] = useState([]);

  // useEffect hook to fetch petition data when the component mounts
  useEffect(() => {
    // Fetching petition data from the API
    getPetition().then((response) => {
      // Setting the fetched petitions in the state
      setPetitions(response);
    });
    // Cleanup function - currently empty as there's no side effect that needs cleanup
    return () => {};
  }, []); // Empty dependency array to ensure this effect runs only once on mount

  // Rendering the petition content
  return (
    <div className="mx-48 my-10">
      <div className="grid grid-cols-2 gap-4">
        {petitions.map((petition) => {
          return (
            <PetitionCard
              key={petition.id}
              detail={petition}
              isLogin={isLogin}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PetitionContent;
