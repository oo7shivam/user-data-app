import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";

const DisplayData = ({
  dataFromCSV,
  currentPageIndex,
  setCurrentPageIndex,
  newPageData,
}) => {
  const entriesPerPage = 20; // now I'm showing 20 entries Per Page

  const changePage = (index) => {
    // for leftMost
    if (index < 0) {
      index = 0;
    }

    setCurrentPageIndex(index);
  };
  return (
    <div className="displayData">
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Name</th>
            <th>Credit Score</th>
            <th>Credit Lines</th>
            <th>Masked Phone Number</th>
            <th>Subsciption Pricing</th>
          </tr>
        </thead>
        <tbody>
          {newPageData?.map((item, index) => (
            <tr key={index}>
              <td>{item[0]}</td>
              <td>{item[1]}</td>
              <td>{item[2]}</td>
              <td>{item[3]}</td>
              <td>{item[4]}</td>
              <td></td>
              {/* TODO */}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="paggination">
        <div className="box1">Row per page: {entriesPerPage}</div>
        <div className="box2">
          {currentPageIndex > 0 && (
            <i
              className="fa fa-angle-left"
              aria-hidden="true"
              onClick={() => changePage(currentPageIndex - 1)}
            ></i>
          )}
          {currentPageIndex * entriesPerPage + 1} -{" "}
          {Math.min(
            (currentPageIndex + 1) * entriesPerPage,
            newPageData.length
          )}{" "}
          out of
        </div>
        <div className="box3">
          {dataFromCSV.length}
          {currentPageIndex <
            dataFromCSV?.length / (newPageData.length - 1) && (
            <i
              className="fa fa-angle-right"
              aria-hidden="true"
              onClick={() => changePage(currentPageIndex + 1)}
            ></i>
          )}
        </div>
      </div>
    </div>
  );
};
export default DisplayData;
