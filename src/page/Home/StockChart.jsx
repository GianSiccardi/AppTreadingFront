import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

const StockChart = () => {
    const [activeLable,setActiveLable]=useState("1 Day") 
    const series = [
        {
            data: [
                [1721002161002, 60881.48885782499],
                [1721005656227, 61229.480385878865],
                [1721009000503, 61426.756346514296],
                [1721012533357, 62576.12941558953],
                [1721016205138, 62652.102418708375],
                [1721020189582, 62601.21539596413],
                [1721023887097, 62758.97597203408],
                [1721027136325, 62949.67638884755],
                [1721030598690, 62890.40632199661],
                [1721034414460, 62780.86549256509],
                [1721038109337, 62751.71811398488],
                [1721041884499, 62580.176000609245],
                [1721045046838, 62468.314406226025]
            ]
        }
    ];

    const timeSeries=[
        {
            keyword:"DIGITAL_CURRENCY_DAILY",
            key:" Time Series (Daily)",
            lable:"1 Day",
            value: 1
        },
        {
            keyword:"DIGITAL_CURRENCY_WEEKLY",
            key:" Time Series ",
            lable:"1 Week",
            value: 7
        },
        {
            keyword:"DIGITAL_CURRENCY_MONTHY",
            key:" Time Series ",
            lable:"1 Month",
            value: 30
        }
    ]
    const options = {
        chart: {
            id: "area-datetime",
            type: "area",
            height: 350,
            zoom: {
                autoScaleYaxis: true
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            type: "datetime",
            tickAmount: 6
        },
        colors: ["#8A2BE2"],
        markers: {
            colors: ["#fff"],
            strokeColor: "#fff",
            size: 0,
            strokeWidth: 1,
            strokeDashArray: 0,
            fillOpacity: 1,
            style: "hollow"
        },
        tooltip: {
            theme: "dark"
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.8,
                opacityTo: 0.9,
                stops: [0, 100]
            }
        },
        grid: {
            borderColor: "#47535E",
            strokeDashArray: 4,
            show: true
        }
    };

    const handleActiveLable=(value)=>{
        setActiveLable(value)
    }
  return (
    <div>
        <div className='space-x-3'>
{timeSeries.map((item)=>< Button 
variant={activeLable==item.lable?"":"outline"}
onClick={()=>handleActiveLable(item.lable)}
 key={item.lable}>
    {item.lable}
</Button>)}
        </div>
    
    <div id="chart-timelines">
        <ReactApexChart
        options={options}
        series={series}
       height={450}
       type='area'
        >

        </ReactApexChart>
    
    </div>
    </div>
  )
}

export default StockChart
