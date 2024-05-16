import React from "react";

const DisplayData = ({ dataFromCSV }) => {
  return <div className="displayData">
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
          {dataFromCSV?.map((item, index) => (
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
  </div>;
};
export default DisplayData;
