import './App.css';
import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_myTheme from "./myTheme";

function App() {
  useEffect(() => {
    // Initialize AmCharts themes
    am4core.useTheme(am4themes_myTheme);
    am4core.useTheme(am4themes_animated);

    // Create a chart instance
    const chart = am4core.create("chartdiv", am4charts.XYChart);

    // Add data
    chart.data = [
      { date: new Date(2022, 0, 1), value: 10 },
      { date: new Date(2022, 1, 1), value: 20 },
      { date: new Date(2022, 2, 1), value: 30 },
      { date: new Date(2022, 3, 1), value: 25 },
      { date: new Date(2022, 4, 1), value: 18 },
      { date: new Date(2022, 5, 1), value: 10 },
      { date: new Date(2022, 6, 1), value: 5 }
    ];

    // Create X-axis
    const xAxis = chart.xAxes.push(new am4charts.DateAxis());
    xAxis.renderer.grid.template.location = 0.5;
    xAxis.renderer.minGridDistance = 50;

    // Create Y-axis
    const yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.renderer.grid.template.location = 0.5;
    yAxis.renderer.minGridDistance = 20;

    // Create a step line series
    const series = chart.series.push(new am4charts.StepLineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";
    series.strokeWidth = 2;
    series.stroke = am4core.color("#64B5F6");

    // Add cursor
    chart.cursor = new am4charts.XYCursor();

    // Add scrollbar
    chart.scrollbarX = new am4core.Scrollbar();

    return () => {
      chart.dispose();
    };
  }, []);
  return (
    <div style={{display:"flex", flexDirection:"row", position:"absolute", width:"100%", height:"100%", justifyContent:"space-evenly", backgroundColor:"black"}}>
      <div className='col' style={{width:"20%"}}>
        <div className='col-1-items' style={{height:"27%"}}></div>
        <div className='col-1-items' style={{height:"6%"}}></div>
        <div className='col-1-items' style={{height:"6%"}}></div>
        <div className='col-1-items' style={{height:"13%"}}></div>
        <div className='col-1-items' style={{height:"7%"}}></div>
        <div className='col-1-items' style={{height:"6%"}}></div>
        <div className='col-1-items' style={{height:"7%"}}></div>
        <div className='col-1-items' style={{height:"22%"}}></div>
      </div>
      <div className='col' style={{width:"79%"}}>
        <div className='col-2-items' style={{height:"21%"}}></div>
        <div className='col-2-items' style={{height:"21%"}}></div>
        <div className='col-2-items' style={{height:"22%"}}><div id="chartdiv" style={{ width: "100%", height: "500px" }}></div></div>
        <div className='col-2-items' style={{height:"32%", flexDirection:"row", backgroundColor:"transparent"}}>
          <div className='col-2-items' style={{width:"50%", height:"100%", flexDirection:"column",backgroundColor:"transparent"}}>
            <div className='col-2-items' style={{height:"30%"}}></div>
            <div className='col-2-items' style={{height:"70%"}}></div>
          </div>
          <div className='col-2-items' style={{width:"50%", height:"100%", flexDirection:"column", backgroundColor:"transparent"}}>
            <div className='col-2-items' style={{height:"30%"}}></div>
            <div className='col-2-items' style={{height:"70%"}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
