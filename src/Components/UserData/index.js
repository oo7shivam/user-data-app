import React, { useEffect, useState } from "react";

import { usePapaParse } from "react-papaparse";
import DisplayData from "../DisplayData";

const UserData = () => {
  const { readString } = usePapaParse();
  const [dataFromCSV, setDataFromCSV] = useState([]);

  const CSVString = `
    user1@example.com,Quinn Vega,821,2,***-***-1683
    user2@example.com,Eleanor Galvan,696,5,***-***-7696
    user3@example.com,Wendy Lamb,504,3,***-***-8413
    user4@example.com,Michael Ford,798,3,***-***-2511
    user5@example.com,Anna Soto,838,2,***-***-7747 
    user11@example.com,Savannah Roach,533,5,***-***-3095
user12@example.com,Quincy Shah,507,3,***-***-3443
user13@example.com,Natalia Knox,651,2,***-***-1726
user14@example.com,Aspen Gordon,843,4,***-***-4659
user15@example.com,Owen Walters,552,4,***-***-7484
user16@example.com,Katherine Figueroa,716,2,***-***-4594
user17@example.com,Zariyah York,562,1,***-***-1071
user18@example.com,Sophia Christensen,524,2,***-***-8862
user19@example.com,Sofia Moreno,708,2,***-***-0121
user20@example.com,Hannah Mejia,709,3,***-***-0054
user21@example.com,Julia Diaz,750,1,***-***-4664
user22@example.com,Yara Kerr,724,1,***-***-2053
user23@example.com,Hope Carlson,553,5,***-***-3062
user24@example.com,Elise Brown,609,2,***-***-4864
user25@example.com,Eleanor Montoya,809,4,***-***-0518
user78@example.com,Naomi Mclean,545,2,***-***-1555
user79@example.com,Ruby Decker,627,2,***-***-4521
user80@example.com,Kaylee Parrish,767,5,***-***-6032
user81@example.com,Jane Boone,630,2,***-***-0602
user82@example.com,Faith Dean,572,4,***-***-9632
user83@example.com,Sophia Maldonado,802,2,***-***-0866
user84@example.com,Skylar Yoder,740,5,***-***-3513
user85@example.com,Genesis Herman,506,4,***-***-9146
user86@example.com,Henry Strong,677,1,***-***-3086
user87@example.com,Samantha Hess,513,1,***-***-2083
user88@example.com,Luna Sullivan,544,3,***-***-0460
user89@example.com,Violet Winters,605,2,***-***-2086
user90@example.com,Nathan Howe,802,3,***-***-1939
user91@example.com,Lucas Cabrera,583,4,***-***-7519
user92@example.com,Owen Shannon,529,5,***-***-0438
user93@example.com,Yvonne Vargas,747,4,***-***-2056
user94@example.com,Ellie Warner,538,3,***-***-6545
user95@example.com,Vince Buckley,791,5,***-***-0183
user96@example.com,Madilyn Torres,721,4,***-***-3197
user97@example.com,Autumn Rose,505,4,***-***-7558
    `;

  useEffect(() => {
    const fetchDataFromCsv = async () => {
      readString(CSVString, {
        worker: true,
        complete: (results) => {
          setDataFromCSV(results?.data);
        },
      });
    };
    fetchDataFromCsv();
  }, []);

  return dataFromCSV ? <DisplayData dataFromCSV={dataFromCSV} /> : null;
};
export default UserData;
