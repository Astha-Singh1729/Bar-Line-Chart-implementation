import React from 'react';

import Chart from 'react-apexcharts'


const FirstChart = () => {
    const style = {
        dollor: {
            color: 'grey',
            fontSize: '5vh',
            float: 'left',
        },
        twofour: {
            fontSize: '8vh',
            float: 'left',
            height: '5vh'
        },
        arrow: {
            display: 'inline',
            fontSize: '5vh',
            color: 'white',
            backgroundColor: 'cyan'
        },
        averagedaily: {
            display: 'block',
            fontSize: '5vh',
            color: 'grey'
        }
    }
    const options = {
        chart: {
            id: "basic-bar",
            offsetX: 0,
            offsetY: 0
        },
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 20,
                columnWidth: '45%',
            }
        },
        xaxis: {
            axisBorder: {
                show: false,
            },
            min: 0,
            max: 7,
            floating: true,
            axisTicks: {
                show: false
            },
            labels: {
                show: false
            },
        },
        yaxis: {
            min: 0,
            max: 20,

            floating: true,
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: false
            },
            labels: {
                show: false
            },
        },
        colors: ['#A66CFF'],
        dataLabels: {
            enabled: false
        },
        grid: {
            show: false
        }

    }
    const series = [
        {
            name: "series-1",
            data: [5, 8, 7, 6, 8, 9, 7],
        }
    ]
    return (
        <>
            <div style={{ width: '5vw', float: 'left', height: '5vh' }}></div>
            <div style={style.main}>
                <div>
                    <div style={style.dollor}>$</div>
                    <div style={style.twofour}>2,420</div>
                    <div style={style.arrow}>↑2.6%</div>
                </div>
                <div style={{ width: '5vw', float: 'left', height: '5vh' }}></div>
                <div style={style.averagedaily}>Average Daily Sales</div>
            </div>
            <Chart
                options={options}
                series={series}
                type="bar"
                height="400"
                width="700"

            />
        </>
    )
}

export default FirstChart;