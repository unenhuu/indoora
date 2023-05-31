import * as am5 from '@amcharts/amcharts5/index'
import * as am5xy from '@amcharts/amcharts5/xy'
import * as am5themes_Animated from '@amcharts/amcharts5/themes/Animated'
import { useLayoutEffect } from 'react';

export default function CustomChart({id, yAxisTitle}){

    useLayoutEffect(()=>{

    let root = am5.Root.new(id);
    var myTheme = am5.Theme.new(root);
    myTheme.rule("ValueAxis").setAll({
      strokeOpacity: 1,
      stroke: am5.color(0xFFFFFF)
    });
    root.setThemes([
        myTheme,
        am5themes_Animated.default.new(root)
    ]);
    root._logo.dispose();

    var value = 100;
    
    function generateChartData() {
        var chartData = [];
        var firstDate = new Date();

        for (var i = 0; i < 16; i++) {
            var newDate = new Date(firstDate);
            newDate.setSeconds(newDate.getSeconds() + 0);
            value += 0;
            chartData.push({
            date: newDate.getTime(),
            value: value
        });
        }
        return chartData;
      }
      
      var data = generateChartData();
      
      var chart = root.container.children.push(am5xy.XYChart.new(root, {
        focusable: true,
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX"
      }));

      

      
      var easing = am5.ease.linear;
      
      
      // Create axes
      // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
      var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
        maxDeviation: 0.5,
        extraMin:-0.1,
        extraMax:0.1,
        groupData: false,
        baseInterval: {
          timeUnit: "second",
          count: 1
        },
        renderer: am5xy.AxisRendererX.new(root, {
          minGridDistance: 50
        }),
        tooltip: am5.Tooltip.new(root, {})
      }));
      
      console.log(xAxis)

      var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {
          fill: am5.color(0xFFFFFF),
        })
      }));
      
      yAxis.children.unshift(am5.Label.new(root, {
        text: yAxisTitle,
        textAlign: 'center',
        y: am5.p50,
        rotation: 0,
        fontWeight: 'bold'
      }));
      
      // Add series
      // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
      
      initSeries()
      initSeries()
      
      // Add cursor
      // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
      var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
        xAxis: xAxis
      }));
      cursor.lineY.set("visible", false);
      var legend = chart.children.push(am5.Legend.new(root, {
        dy: 100,
      }));
      legend.data.setAll(chart.series.values);
      
      // Update data every second
      
      
      function addData(customSeries) {
        var lastDataItem = customSeries.dataItems[customSeries.dataItems.length - 1];
        var lastValue = lastDataItem.get("valueY");
        var newValue = value + ((Math.random() < 0.5 ? 1 : -1) * Math.random() * 6);
        var lastDate = new Date();
       
        var time = am5.time.add(new Date(lastDate), "second", 1).getTime();
        customSeries.data.removeIndex(0);
        customSeries.data.push({
          date: time,
          value: newValue
        })
      
      
        var newDataItem = customSeries.dataItems[customSeries.dataItems.length - 1];
        newDataItem.animate({
          key: "valueYWorking",
          to: newValue,
          from: lastValue,
          duration: 1500,
          easing: easing
        });
        var animation = newDataItem.animate({
          key: "locationX",
          to: 0.5,
          from: -0.5,
          duration: 600
        });
        if (animation) {
          var tooltip = xAxis.get("tooltip");
          if (tooltip && !tooltip.isHidden()) {
            animation.events.on("stopped", function () {
              xAxis.updateTooltip();
            })
          }
        }}
        
      
    function initSeries(){
        let color = am5.color("#"+(Math.floor(Math.random()*16777215).toString(16)).toString())
        var series = chart.series.push(am5xy.StepLineSeries.new(root, {
            minBulletDistance: 10,
            name: "name",
            xAxis: xAxis,
            yAxis: yAxis,
          
            valueYField: "value",
            valueXField: "date",
            // fill : color,
            stroke : color,
            tooltip: am5.Tooltip.new(root, {
              pointerOrientation: "horizontal",
              labelText: "{valueY}"
            })
          }));
          series.data.setAll(data);
          setInterval(function () {
            addData(series);

          }, 1000)
          series.set("fill", am5.color(0x095256))
    } 
    
      chart.appear(1000, 100);
      root.current = root;
        return() => {
          root.dispose();
        };
    },[])
  
}