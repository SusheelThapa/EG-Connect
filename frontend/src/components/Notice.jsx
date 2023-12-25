import { useEffect, useState } from "react";
import { getNotices } from "../api/notices";

const NoticeTable = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    getNotices().then((response) => {
      setNotices(response);
    });
    return () => {};
  },[]);
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
          {notices.map((notice, index) => (
            <tr
              key={notice.id}
              className="text-base border-b  border-gray-200 hover:bg-gray-200"
            >
              <td className="py-2 px-4 text-left">{index + 1}</td>
              <td className="py-2 px-4 text-left">{notice.title}</td>
              <td className="py-2 px-4 text-right">
                <button
                  className="text-green-600 text-right font-semibold py-2 px-4 border border-green-500 hover:text-white hover:border-transparent hover:bg-green-400 rounded-lg"
                  onClick={() => alert("Viewing notice: " + notice.title)}
                >
                  View Notice
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NoticeTable;
