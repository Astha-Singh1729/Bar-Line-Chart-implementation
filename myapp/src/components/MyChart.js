import React from 'react';

import Chart from 'react-apexcharts'

const MyChart = () => {
    const style = {
        dollor: {
            color: 'grey',
            fontSize: '3vh',
            float: 'left',
        },
        twofour: {
            fontSize: '5vh',
            float: 'left',
            height: '5vh'
        },
        averagedaily: {
            display: 'block',
            fontSize: '3vh',
            color: 'grey',
        }
    }
    const options = {
        chart: {
            id: "basic-bar",
            offsetX: 0,
            offsetY: 0
        },
        yaxis: {
            min: 10,
            max: 24,
            type: 'mumeric',
            labels: {
                show: true,
                formatter: (value) => {
                    console.log(typeof (value))
                    let str = value.toString();
                    str = str.substring(0, 4);
                    return '$' + str + 'K';
                },
                style: {
                    colors: ['grey'],
                    fontSize: '14px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 400,
                    cssClass: 'apexcharts-yaxis-label',
                }
            },
            tickAmount: 4,
        },
        xaxis: {
            categories: ["Apr 02", "Apr 03", "Apr 04", "Apr 05", "Apr 06", "Apr 07", "Apr 08", "Apr 09", "Apr 10", "Apr 11", "Apr 12", "Apr 13", "Apr 14", "Apr 15", "Apr 16", "Apr 17", "Apr 18", "Apr 19", "Apr 20"],
            labels: {
                show: true,
            },
            min: 0,
            max: 20,
            tickAmount: 6,
            style: {
                color: ['pink']
            },
        },
        stroke: {
            curve: 'smooth',
            width: 5,
            lineCap: 'butt'
        },
        colors: ['#96E5D1'],
        dataLabels: {
            enabled: false
        }
    }
    const series = [
        {
            name: "series-1",
            data: [18, 18, 20, 20, 18, 18, 22, 22, 20.1, 20.1, 18, 18, 20.1, 20.1, 18, 18, 20.1, 20.1, 22],
        }
    ]

    return (
        <>
            <div>
                <div>
                    <div style={{ fontSize: '3vh', display: 'block' }}>Sales This Month</div>
                    <div style={{ fontSize: '2.6vh', color: 'grey', float: 'left', display: 'block', height: '3vh', width: '100vw' }}>Users from all channels</div>
                </div>
                <div style={{ height: '10vh', width: '100vh' }}> </div>
                <div>
                    <div style={style.dollor}>$</div>
                    <div style={style.twofour}>14,094</div>
                </div>
                <div style={{ height: '6vh', width: '100vh' }}> </div>
                <div style={style.averagedaily}>Another $48,346 to Goal</div>
                <div>
                    <Chart
                        options={options}
                        series={series}
                        type="area"
                        height="400"
                        width="700"
                    />
                </div>
            </div>
        </>
    )
}
export default MyChart;