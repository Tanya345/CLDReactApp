import React, {useState, useEffect}from 'react';
import data from '../colleges.json'

export const Colleges = () => {

    
    // console.log(college)
    return (
        
        data.colleges.map(clg =>{
            return(
              <div className="ptclg" key={clg.id}>
              
               <div className="clg" >
                 <div className="coldiv">
                   <div className="imgdiv"></div>
     
                 </div>
                 <p id="flag"></p>
                 <p id="promote">Promoted</p>
                 <p className="rate"><b>{clg.rating}</b>/5<br />{clg.rating_remarks}</p>
                 <p className="txt1">{clg.tags[0]}</p>
                 <p className="txt2">{clg.tags[1]}</p>
                 <p className="txt3">{clg.ranking}</p>
     
                 <div className="pDiv">
                   <div className="txtDivLeft">
                     <p className="clgName">{clg.college_name}</p>
                     <p className="add1">{clg.nearest_place}</p>
                     <p className="add2">{clg.famous_nearest_places}</p>
                     <p className="text">{clg.offertext}</p>
                   </div>
                   <div className="txtDivRight">
                     <p className="origFees">&#8377;<strike>{clg.original_fees}    </strike><div id="disc"></div></p>
                     <p className="discount">{clg.discount}</p>
                     <p className="disFees">&#8377;{clg.discounted_fees}</p>
                     <p className="txt4">{clg.fees_cycle}</p>
                     <p className="txt5">{clg.amenties}</p>
                   </div>
                 </div>
     
               </div>
             </div>
                )
               })
     
    );
    
            }