import { useEffect, useState } from "react";
import { getNotices } from "../api/notices";
import Button from "./common/Button";

/**
 * @function NoticeTable
 * @description Component for displaying a table of notices.
 * Fetches notice data from an API and displays it in a tabular format.
 *
 * @returns {JSX.Element} - A table displaying a list of notices with view buttons.
 */
const NoticeTable = () => {
  // State hook for storing notice data
  const [notices, setNotices] = useState([]);

  // useEffect hook to fetch notice data when the component mounts
  useEffect(() => {
    // Fetching notice data from the API
    getNotices().then((response) => {
      // Setting the fetched notices in the state
      setNotices(response);
    });
    // Cleanup function - currently empty as there's no side effect that needs cleanup
    return () => {};
  }, []);

  // Rendering the notice table
  return (
    <div className="overflow-x-auto mt-10 mx-48 mb-10 rounded-lg">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-800 text-white text-xl">
          <tr>
            <th className="text-left py-3 px-4 uppercase font-semibold ">
              S. No.
            </th>
            <th className="text-left py-3 px-4 uppercase font-semibold ">
              Title
            </th>
            <th className="text-right py-3  px-8  uppercase font-semibold ">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {/* Mapping over the notices state to render each notice in a table row */}
          {notices.map((notice, index) => (
            <tr
              key={notice.id}
              className="text-base border-b  border-gray-200 hover:bg-gray-200"
            >
              <td className="py-2 px-4 text-left">{index + 1}</td>
              <td className="py-2 px-4 text-left">{notice.title}</td>
              <td className="py-2 px-4 text-right">
                <Button
                  buttonText={"View Notice"}
                  css={
                    "text-green-600 text-right font-semibold py-2 px-4 border border-green-500 hover:text-white hover:border-transparent hover:bg-green-400 rounded-lg"
                  }
                  handleOnClick={() => alert("Viewing notice: " + notice.title)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NoticeTable;
