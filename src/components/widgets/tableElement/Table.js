import React, { useEffect, useState } from "react";
import "./Table.scss";
import configuration from "../../../configuration.json";
import Button from "../formElements/Button";
import down_arrow from "../../../assets/images/icons/down_arrow.svg";
import up_arrow from "../../../assets/images/icons/up_arrow.svg";
import { Data } from "@react-google-maps/api";
import { convertlocalUtctoLocal } from "../../helpers/timeConversion";

const Table = ({ tableData, tableColumns, dateAndTime }) => {
  const [arrow, setArrow] = useState(false);
  const [selectCol, setSelectCol] = useState(0);
  const [data, setData] = useState(tableData);

  function dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      /* next line works with strings and numbers,
       * and you may want to customize it to your needs
       */
      var result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  }

  const values = {
    1: "first_name",
    2: "last_name",
    3: "email",
    4: "phone",
  };

  const handleSort = (e, id) => {
    const activeCol = values[id];
    if (!arrow && selectCol === id) {
      const sortedData = tableData.sort(dynamicSort(activeCol));
      setData(sortedData);
    } else {
      const reverseddData = tableData.reverse(dynamicSort(activeCol));
      setData(reverseddData);
    }

    setSelectCol(id);
    setArrow(!arrow);
  };

  return (
    <div
      className={`tableContainer  ${configuration?.global?.appearance?.tableStyle}`}
    >
      <div className="tableRow tableHeader">
        {tableColumns &&
          tableColumns.map((item, i) => {
            return (
              <div
                key={i}
                className="text"
                onClick={(e) =>
                  item?.sortable ? handleSort(e, item?.id, item?.sortable) : 0
                }
              >
                {item?.colName}
                {item?.sortable && (
                  <Button
                    url={
                      selectCol === item?.id && arrow ? down_arrow : up_arrow
                    }
                    type="teritary"
                    className="arrowBtn"
                  />
                )}
              </div>
            );
          })}
      </div>
      <div className="tableBody">
        {tableData?.length > 0 ? (
          <>
            {tableData &&
              tableData.map((item, i) => {
                return (
                  <div
                    className="tableRow tableBodyContainer cursorPointer"
                    key={i}
                  >
                    <div className="text">{item?.first_name} </div>
                    <div className="text">{item?.last_name} </div>
                    <div className="text">{item?.email} </div>
                    <div className="text">{item?.phone} </div>
                    <div className="text">
                      {convertlocalUtctoLocal(dateAndTime)}{" "}
                    </div>
                  </div>
                );
              })}
          </>
        ) : (
          <p className="noData">No Data Found</p>
        )}
      </div>
    </div>
  );
};

export default Table;
