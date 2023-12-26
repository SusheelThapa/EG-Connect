import { getPolicy } from "../api/policy";
import PetitionCard from "./common/PetitionCard";
import { useEffect, useState } from "react";

/**
 * @function PolicyContent
 * @description Component for displaying policy information.
 * Fetches policy data from an API and displays it using PetitionCard components.
 *
 * @param {Object} props - The props for the PolicyContent component.
 * @param {boolean} props.isLogin - A boolean indicating whether the user is logged in.
 *
 * @returns {JSX.Element} - A list of policies displayed in PetitionCard components.
 */
const PolicyContent = ({ isLogin }) => {
  // State hook for storing policy data
  const [policies, setPolicies] = useState([]);

  // useEffect hook to fetch policy data when the component mounts
  useEffect(() => {
    // Fetching policy data from the API
    getPolicy().then((response) => {
      // Setting the fetched policies in the state
      setPolicies(response);
    });
    // Cleanup function - currently empty as there's no side effect that needs cleanup
    return () => {};
  }, []); // Empty dependency array to ensure this effect runs only once on mount

  // Rendering the policy content
  return (
    <div className="mx-48 my-10">
      <div className="grid grid-cols-2 gap-4">
        {policies.map((policy) => {
          return (
            <PetitionCard key={policy.id} isLogin={isLogin} detail={policy} />
          );
        })}
      </div>
    </div>
  );
};

export default PolicyContent;
