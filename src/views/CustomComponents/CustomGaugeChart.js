import * as am5 from '@amcharts/amcharts5/index'
import * as am5radar from '@amcharts/amcharts5/radar'
import * as am5xy from '@amcharts/amcharts5/xy'
import * as am5themes_Animated from '@amcharts/amcharts5/themes/Animated'
import { useLayoutEffect } from 'react';

export default function CustomGauge({id}){

    useLayoutEffect(()=>{

        var root = am5.Root.new(id); 
        root._logo.dispose();
        root.setThemes([
          am5themes_Animated.default.new(root)
        ]);
        
        var chart = root.container.children.push(
          am5radar.RadarChart.new(root, {
            panX: false,
            panY: false,
            startAngle: -180,
            endAngle: 0,
            innerRadius: -20
          })
        );
        
        var axisRenderer = am5radar.AxisRendererCircular.new(root, {
          strokeOpacity: 0.1,
          minGridDistance: 30
        });
        
          
        axisRenderer.ticks.template.setAll({
          visible: true,
          strokeOpacity: 0.5
        });
        
        axisRenderer.grid.template.setAll({
          visible: false
        });
        
        var axis = chart.xAxes.push(
          am5xy.ValueAxis.new(root, {
            maxDeviation: 0,
            min: 0,
            max: 100,
            strictMinMax: true,
            renderer: axisRenderer
          })
        );
        
        function createRange(start, end, color, label) {
          
          var rangeDataItem = axis.makeDataItem({
            value: start,
            endValue: end
          });
        
          var range = axis.createAxisRange(rangeDataItem);
          
          rangeDataItem.get("axisFill").setAll({
            visible: true,
            fill: color,
            fillOpacity: 0.8
          });
          
          rangeDataItem.get("tick").setAll({
            visible: false
          });
          
          rangeDataItem.get("label").setAll({
            text: label,
            inside: true,
            radius: 5,
            fontSize: "0.9em",
            fill: am5.color(0xffffff)
          });
        }
        createRange(0, 100, am5.color(0x808080));
        createRange(0, 70, am5.color(0x297373));
        root.current = root;
        return() => {
          root.dispose();
        };
    },[])
    
}