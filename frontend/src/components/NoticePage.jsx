import PropTypes from "prop-types";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNotice } from "../api/notices";

const NoticePage = () => {
  const [notice, setNotice] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    getNotice(id).then((response) => {
      setNotice(response);
    });
    return () => {};
  }, []);
  
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

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded-lg shadow-md mt-6">
      <h3 className="text-lg font-semibold mb-2">{notice.title}</h3>
      <p className="text-gray-700 mb-4">{notice.description}</p>
      <p className="text-sm text-gray-500">Posted on: {formattedDate}</p>
    </div>
  );
};

NoticePage.propTypes = {
  notice: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    creation_date: PropTypes.string.isRequired,
  }).isRequired,
};

export default NoticePage;
