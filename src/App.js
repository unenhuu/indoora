import './App.css';
import React, { useEffect } from "react";
import CustomChart from './views/CustomComponents/CustomLineChart';
import CustomGauge from './views/CustomComponents/CustomGaugeChart';

function App() {
  return (
    <div style={{display:"flex", flexDirection:"row", position:"absolute", width:"100%", height:"100%", justifyContent:"space-evenly", backgroundColor:"black"}}>
      <div className='col' style={{width:"20%"}}>
        <div className='col-1-items' style={{height:"20%"}}></div>
        <div className='col-1-items' style={{height:"6%", backgroundColor:"green"}}><a>Device status</a><a>Idle</a></div>
        <div className='col-1-items' style={{height:"6%"}}><a>Power source</a><a>Line power + battery</a></div>
        <div id={'gauge'} className='col-1-items' style={{height:"24%"}}><a>Battery level</a><CustomGauge id={'gauge'}/><a>3.7V</a></div>
        <div className='col-1-items' style={{height:"7%"}}><a>WISE-2410 last updated time</a><a>date</a></div>
        <div className='col-1-items' style={{height:"6%" ,backgroundColor:"green"}}><a></a>RSSI<a>-38 dbm</a></div>
        <div className='col-1-items' style={{height:"7%"}}><a>Device EUI (last 8 digits)</a><a>FF45D787</a></div>
        <div className='col-1-items' style={{height:"20%"}}><a>Event</a></div>
      </div>
      <div className='col' style={{width:"79%"}}>
        <div className='title'>Acceleretion RMS value</div>
        <div className='col-2-items' id={'chart1'} style={{height:"18%"}}><CustomChart id={"chart1"} yAxisTitle={"g"}/></div>
        <div className='title'>Velocity RMS</div>
        <div className='col-2-items' id={'chart2'} style={{height:"18%"}}><CustomChart id={"chart2"} yAxisTitle={"mm/s"}/></div>
        <div className='title'>Features data</div>
        <div className='col-2-items' id={'chart3'} style={{height:"18%"}}><CustomChart id={"chart3"} yAxisTitle={"mm/s"}/></div>
        <div className='col-2-items' style={{height:"32%", flexDirection:"row", backgroundColor:"transparent"}}>
          <div className='col-2-items' style={{width:"50%", height:"100%", flexDirection:"column",backgroundColor:"transparent"}}>
            <div className='col-2-items' style={{height:"30%", backgroundColor:"red"}}><a>ISO10816</a><h1>Unacceptable</h1></div>
            <div className='col-2-items' ><a>Picture</a><img  src='./picture2.jpg' style={{ width: "auto", height: "auto" }}></img></div>
          </div>
          <div className='col-2-items' style={{width:"50%", height:"100%", flexDirection:"column", backgroundColor:"transparent"}}>
            <div className='col-2-items' style={{height:"30%", backgroundColor:"orange"}}><a>Temperature</a><h1>29.31 °C</h1></div>
            <div className='col-2-items' id={'chart4'} style={{height:"70%"}}><a>Temperature trend</a><CustomChart id={'chart4'} yAxisTitle={'°C'}/></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
