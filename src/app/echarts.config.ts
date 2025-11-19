import { use, init } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { RadarChart } from 'echarts/charts';
import { TooltipComponent, LegendComponent } from 'echarts/components';

use([CanvasRenderer, RadarChart, TooltipComponent, LegendComponent]);

export const echarts = { init };
