import React from "react";
import { Link } from "react-router-dom";

const TableAdmin = ({ dataTable, columns, Url, onDelete }) => {
  console.log("dataTable", dataTable);
  console.log(`columns`, columns);
  return (
    <>
      <table className="min-w-max w-full table-auto">
        <thead>
          <tr className="bg-blue-100 text-gray-600 uppercase text-sm leading-normal">
            {columns?.map((item, index) => (
              <>
                <th key={index} className="py-3 px-6 text-center">
                  {item.title}
                </th>
              </>
            ))}
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {dataTable.map((itemData, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              {columns?.map((itemColumns, index) => (
                <td key={index} className="py-2 px-6 text-center">
                  {typeof itemColumns?.render === "function"
                    ? itemColumns?.render(itemData[itemColumns?.dataIndex])
                    : itemData[itemColumns?.dataIndex]}
                </td>
              ))}
              <td className="py-2 px-6 text-center">
                <div className="flex item-center justify-center">
                  <div className="mr-2 transform hover:scale-110">
                    <Link to={`${Url}/${itemData.id}`}>
                      <i class="fas fa-pencil-alt w-9 h-9 stroke-current text-purple-600 bg-purple-100 rounded-full pt-[11px]"></i>
                    </Link>
                  </div>
                  <div className="mr-2 transform  hover:scale-110">
                    <i
                      onClick={() => onDelete(itemData.id)}
                      class="fas fa-trash-alt w-9 h-9 stroke-current text-red-600 bg-red-100 rounded-full pt-[11px]"
                    ></i>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableAdmin;
