// ChartComponent.jsx
import stylex from "@stylexjs/stylex";
import { useRef } from 'react';
import useFetchData from '../hooks/useFetchData';
import useCreateChart from '../hooks/useCreateChart';
import { chartStyles } from '../stylex';

function ChartComponent() {
    const chartRef = useRef(null);
    const trafficData = useFetchData(['homework-ecommerce', 'stylex']);
    useCreateChart(chartRef, trafficData);

    return (
        <div>
            <div {...stylex.props(chartStyles.chartContainer)}>
                <canvas ref={chartRef}></canvas>
                {trafficData.map((data, index) => data && (
                    <div key={index}>
                        <h2>{data.repo} - Total Views: {data.data.views.reduce((total, view) => total + view.count, 0)}</h2>
                        <p>Unique Visitors: {data.data.views.reduce((total, view) => total + view.uniques, 0)}</p>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default ChartComponent;