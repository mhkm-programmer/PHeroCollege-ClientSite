import React, { useState } from 'react';

const ITEMS_PER_PAGE = 5; // Number of research papers to display per page

const ResearchPapers = ({ tableItems }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(tableItems.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = tableItems.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="shadow-sm border rounded-lg overflow-x-auto">
      <table className="w-full table-auto text-sm text-left">
        <thead className="bg-gray-50 text-gray-600 font-medium border-b">
          <tr>
            <th className="py-3 px-6">Serial No</th>
            <th className="py-3 px-6">College Name</th>
            <th className="py-3 px-6">Research Content</th>
            <th className="py-3 px-6">Website Link</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 divide-y">
          {currentItems.map((item, index) => (
            <tr key={item._id}>
              <td className="py-3 px-6 whitespace-nowrap">
                {index + 1 + (currentPage - 1) * ITEMS_PER_PAGE}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{item.collegeName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.researchHistory}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <a href={item.website.startsWith('http') ? item.website : `http://${item.website}`} target="_blank" rel="noopener noreferrer">
                  {item.website}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="flex items-center justify-center mt-4">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === page ? 'bg-indigo-500 text-white' : 'bg-white text-indigo-500'
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ResearchPapers;
