import { useEffect } from 'react';
import { Chart, initMDB } from 'mdb-ui-kit/js/chart.es.min.js';

export default function HomePage() {
    useEffect(() => {
        // Initialization for ES Users

        initMDB({ Chart });

        // Data
        const dataChartDoubleYAxisExample = {
            type: 'bar',
            data: {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday '],
                datasets: [
                    {
                        label: 'Impressions',
                        yAxisID: 'y',
                        data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
                        order: 2,
                    },
                    {
                        label: 'Impressions (absolute top) %',
                        yAxisID: 'y1',
                        data: [1.5, 2, 0.5, 3, 1.2, 4, 3.4],
                        type: 'line',
                        order: 1,
                        backgroundColor: 'rgba(66, 133, 244, 0.0)',
                        borderColor: '#94DFD7',
                        borderWidth: 2,
                        pointBorderColor: '#94DFD7',
                        pointBackgroundColor: '#94DFD7',
                        lineTension: 0.0,
                    },
                ],
            },
        };

        // Options
        const optionsChartDoubleYAxisExample = {
            options: {
                scales: {
                    y:
                    {
                        display: true,
                        position: 'left' as const,
                    },
                    y1:
                    {
                        display: true,
                        position: 'right' as const,
                        grid: {
                            drawOnChartArea: false,
                        },
                        ticks: {
                            beginAtZero: true,
                        },
                    },
                },
            },
        };

        const chartElement = document.getElementById('chart-double-y-axis-example');
        if (chartElement) {
            new Chart(
                chartElement,
                dataChartDoubleYAxisExample,
                optionsChartDoubleYAxisExample
            );
        }


    }, []);
    return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 mt-5">
                        <canvas id="chart-double-y-axis-example"></canvas>
                    </div>
                </div>
            </div>

    );
}