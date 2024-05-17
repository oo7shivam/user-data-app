import React, { useEffect, useState } from "react";

import { usePapaParse } from "react-papaparse";
import DisplayData from "../DisplayData";

const UserData = () => {
  const { readString } = usePapaParse();
  const [dataFromCSV, setDataFromCSV] = useState([]);
  const [currentPageIndex,setCurrentPageIndex] = useState(0);
  const [newPageData,setNewPageData] = useState([]);

  const CSVString = `
  user1@example.com,Quinn Vega,821,2,***-***-1683
  user2@example.com,Eleanor Galvan,696,5,***-***-7696
  user3@example.com,Wendy Lamb,504,3,***-***-8413
  user4@example.com,Michael Ford,798,3,***-***-2511
  user5@example.com,Anna Soto,838,2,***-***-7747
  user6@example.com,Carter Adkins,569,5,***-***-0118
  user7@example.com,Fiona Chang,637,3,***-***-1759
  user8@example.com,Everleigh Wilkins,809,5,***-***-7463
  user9@example.com,Katherine Leonard,652,5,***-***-9857
  user10@example.com,Anastasia Mitchell,744,2,***-***-5162
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
  user26@example.com,Nora Shaffer,611,3,***-***-0206
  user27@example.com,Wren Villa,797,4,***-***-8026
  user28@example.com,Mia Stanley,651,1,***-***-6313
  user29@example.com,Ian Hudson,621,2,***-***-5140
  user30@example.com,Violet Pope,834,5,***-***-7096
  user31@example.com,Ella Summers,785,4,***-***-1081
  user32@example.com,Zara Burns,846,5,***-***-7729
  user33@example.com,Alina Wilkerson,807,4,***-***-3295
  user34@example.com,Wendy Koch,693,2,***-***-5081
  user35@example.com,Walter Stafford,651,4,***-***-0980
  user36@example.com,Violet Larson,559,4,***-***-2045
  user37@example.com,Aspen Howe,677,5,***-***-3549
  user38@example.com,Evan Randall,759,4,***-***-6733
  user39@example.com,Cora Avery,713,2,***-***-7082
  user40@example.com,Walter Gardner,506,5,***-***-3284
  user41@example.com,Katherine Morrow,504,2,***-***-4034
  user42@example.com,Lily Mccormick,832,1,***-***-7776
  user43@example.com,Armani Mccoy,687,2,***-***-6718
  user44@example.com,Zach Mccormick,837,1,***-***-0240
  user45@example.com,Ben Sullivan,777,5,***-***-1496
  user46@example.com,Madison Gentry,611,2,***-***-0530
  user47@example.com,Caroline Ramirez,805,2,***-***-1810
  user48@example.com,Aspen Middleton,781,4,***-***-0042
  user49@example.com,Xenia Carpenter,743,2,***-***-5750
  user50@example.com,Leo Morrow,639,3,***-***-6610
  user51@example.com,Leo Greer,731,1,***-***-9857
  user52@example.com,Matthew Arias,795,4,***-***-6532
  user53@example.com,Hazel Mcconnell,557,5,***-***-9583
  user54@example.com,David King,727,5,***-***-0153
  user55@example.com,Teagan Cannon,530,4,***-***-9988
  user56@example.com,Aspen Ryan,513,4,***-***-4335
  user57@example.com,Bailey Bowen,802,3,***-***-9248
  user58@example.com,Olivia Sawyer,604,5,***-***-1019
  user59@example.com,Athena Stephenson,728,2,***-***-6832
  user60@example.com,Tina Burgess,501,3,***-***-5204
  user61@example.com,Zane Merritt,611,4,***-***-7876
  user62@example.com,Trinity Sullivan,574,2,***-***-2604
  user63@example.com,Daniel Garrison,542,1,***-***-2836
  user64@example.com,Daisy Humphrey,538,3,***-***-7741
  user65@example.com,Aubrey Gentry,628,2,***-***-7778
  user66@example.com,Lillian Hudson,647,4,***-***-1303
  user67@example.com,Savannah Flowers,591,3,***-***-2254
  user68@example.com,Presley Gould,643,1,***-***-0011
  user69@example.com,Madeline Cameron,613,5,***-***-9499
  user70@example.com,Owen Skinner,552,2,***-***-5510
  user71@example.com,Lydia Strickland,750,5,***-***-6965
  user72@example.com,Quinn Bryant,776,2,***-***-6607
  user73@example.com,Nathan Pope,697,5,***-***-2095
  user74@example.com,Nathan Moon,723,3,***-***-4751
  user75@example.com,Aliyah Craig,686,2,***-***-6734
  user76@example.com,Cora Herrera,841,3,***-***-2003
  user77@example.com,Yara Peters,602,4,***-***-1223
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
  user98@example.com,Aspyn Hansen,636,4,***-***-8757
    `;




  
  useEffect(() => {
    const fetchDataFromCsv = async () => {
      readString(CSVString, {
        worker: true,
        complete: (results) => {
          setDataFromCSV(results?.data);
          console.log('UMANG',results?.data?.length)
        },
      });
    };
    fetchDataFromCsv();
  }, []);

  useEffect(()=>{
   if(dataFromCSV){
      // extract 20 entries from total Data based on current Index
      let startIndex = currentPageIndex * 20;
      let endIndex = startIndex + 20;
      // extract 20 entries from total Data based on current Index
      setNewPageData(dataFromCSV.slice(startIndex, endIndex));
      console.log('neeee', newPageData);
   }
  },[currentPageIndex,dataFromCSV])

  return dataFromCSV && newPageData ? <DisplayData dataFromCSV={dataFromCSV} currentPageIndex={currentPageIndex} setCurrentPageIndex={setCurrentPageIndex} newPageData={newPageData} /> : null;
};
export default UserData;
