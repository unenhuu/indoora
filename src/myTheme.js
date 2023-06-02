import * as am4core from '@amcharts/amcharts4/core';
import * as am4themes_animated from '@amcharts/amcharts4/themes/animated';

export default function myTheme() {
  am4core.useTheme(am4themes_animated);

  // Create your custom theme here
  const theme = am4core.create("myCustomTheme", am4core.Theme);

  // Set some properties of the theme
  theme.padding(20, 20, 20, 20);
  theme.colors.step = 2;
  theme.fontSize = 14;

  // Customize the chart background
  theme.background.fill = am4core.color("#f5f5f5");
  theme.background.stroke = am4core.color("#c3c3c3");
  theme.background.strokeWidth = 1;

  // Customize the axis appearance
  theme.axis.stroke = am4core.color("#c3c3c3");
  theme.axis.fill = am4core.color("#ffffff");
  theme.axis.grid.stroke = am4core.color("#c3c3c3");
  // theme.axis.grid.stroke = am4core.color("#ffffff");

  // Customize the series appearance
  theme.seriesContainer.fill = am4core.color("#ffffff");
  theme.seriesContainer.stroke = am4core.color("#c3c3c3");
  theme.seriesContainer.strokeWidth = 1;

  return theme;
}
