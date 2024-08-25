import { Button } from '@/components/ui/button';
import { fetchMarketChart } from '@/Store/Coin/Action';
import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import { useDispatch, useSelector } from 'react-redux';




const timeSeries = [
    {
        keyword: "DIGITAL_CURRENCY_DAILY",
        key: " Time Series (Daily)",
        label: "1 Dia",
        value: 1
    },
    {
        keyword: "DIGITAL_CURRENCY_WEEKLY",
        key: "Weekly Time Series ",
        label: "1 Semana",
        value: 7
    },
    {
        keyword: "DIGITAL_CURRENCY_MONTHY",
        key: "Monthly Time Series ",
        label: "1 Mes",
        value: 30
    },
    {
        keyword: "DIGITAL_CURRENCY_MONTHY",
        key: " Yearly Time Series ",
        label: "1 Año",
        value: 365
    } 

]


const StockChart = ({ coinId }) => {

    const dispatch = useDispatch();
    const { coin } = useSelector(store => store)
    const [activeLabel, setActiveLable] = useState(timeSeries[0])

    const daysValue = activeLabel.value;
    const series = [
        {
           
            data: coin.marketChart.data,
        },
    ];

   
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

    const handleActiveLable = (value) => {
        setActiveLable(value)
    }
    console.log("coinId:", coinId);  // Debe mostrar un valor válido, no `undefined`
    console.log("days:", activeLabel); // Debe mostrar un valor válido, no un objeto


    useEffect(() => {
        if (coinId && daysValue) {
            
            dispatch(fetchMarketChart({ coinId, days: daysValue, jwt: localStorage.getItem("jwt") }));
        }
    }, [dispatch, coinId, daysValue]);


    return (
        <div>
            <div className='space-x-3'>
                {timeSeries.map((item) => < Button
                    variant={activeLabel.label === item.label ? "" : "outline"}
                    onClick={() => handleActiveLable(item)}
                    key={item.label}>
                    {item.label}
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
