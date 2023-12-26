import PropTypes from "prop-types";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNotice } from "../api/notices";

/**
 * @function NoticePage
 * @description Component for displaying detailed information about a specific notice.
 * Fetches notice data based on an ID from the URL parameters.
 *
 * @returns {JSX.Element} - The detailed view of a specific notice.
 */
const NoticePage = () => {
  // State hook for storing the notice data
  const [notice, setNotice] = useState(null);

  // useParams hook to get the notice ID from URL parameters
  const { id } = useParams();

  // useEffect hook to fetch the specific notice data when the component mounts
  useEffect(() => {
    getNotice(id).then((response) => {
      // Setting the fetched notice in the state
      setNotice(response);
    });
    return () => {}; // Cleanup function
  }, [id]); // Dependency array includes id to refetch data if the id changes

  // Formatting the date for better readability
  const formattedDate = new Date(notice.creation_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "12",
      minute: "2-digit",
    }
  );
  // Rendering the notice details
  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded-lg shadow-md mt-6">
      <h3 className="text-lg font-semibold mb-2">{notice.title}</h3>
      <p className="text-gray-700 mb-4">{notice.description}</p>
      <p className="text-sm text-gray-500">Posted on: {formattedDate}</p>
    </div>
  );
};

// PropTypes validation
NoticePage.propTypes = {
  notice: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    creation_date: PropTypes.string.isRequired,
  }).isRequired,
};

export default NoticePage;
