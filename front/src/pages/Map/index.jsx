import React, { useEffect } from 'react'
import { Icon } from '@iconify/react';


const Map=()=>{

  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new window.kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3
    };
    var map = new window.kakao.maps.Map(container, options);
    }, [])


    return (
        <div  style = {
            {
                display:"flex",

        }
     } >
            <div style = {
            {
                width:"500px",
                // background: "#fff",
        }
     }> 
            <div style = {
                {
                    height: "50px",
                    margin : "10px",
                } 
            }>
                <div className="searchBox" style = {
            {
                display:"flex",

        }
     } >
                    <div className="inputBox" style = {
                {
                    width : "80%",
                    height: "54px",
                    background : "#fff",
                } 
            }></div>
                    <button>
                    <Icon icon="mi:filter" width="50px" height="50px" color="#EEAB73"/>
                    </button> 
                </div>


            </div>

            <div style={
                {
                    display:"flex",
                    margin: "30px",
                    background : "#ffffff",
                }
            }>
                <div padding="30px">
                    <img width="90px" height="90px" src="data:image/jpeg;base64,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"/>
                </div>
                <div>
                    <div>음식점 이름</div>
                    <div>평점</div>
                    <div>주소</div>
                </div>
            </div>
            </div>

        	<div id="map" style = {
                {
                    width: "2000px",
                    height: "830px",
                    margin : "0px",
                }
            }></div>
        </div>
    )
}

export default Map;