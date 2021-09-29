import React, {useState, useEffect}from 'react';
import data from '../colleges.json'

export const Colleges = () => {

    
    // console.log(college)
    return (
        
        <div className="ptclg">
            <div className="clg">
                <div className="coldiv">
                    <div className="imgdiv"></div>
                    {/* <img className="clgImg" src={college_02} alt="" /> */}
                    
                </div>
                <p className="rate"><b>3.9</b>/5<br/>Very Good</p>
                <p className="txt1">Best College</p>
                <p className="txt2">2kms away</p>
                <p className="txt3">#7 in 260 colleges in north campus</p>
                <div className="txtDiv">
                    <p className="clgName">College Name</p>
                    <p className="add1">Clg Address</p>
                    <p className="add2">Clg Address</p>
                    <p className="text">Flat.. login</p>
                </div>
                
            </div>
        </div>
    );
    
}