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


/* *

import stylex from "@stylexjs/stylex";
import { Chart } from 'chart.js/auto';
import { useEffect, useRef, useState } from 'react';
const styles = stylex.create({
    chartContainer: {
        width: 'auto',
        height: 'auto',
        margin: '20px auto',
        padding: '10px',
        backgroundColor: '#33445788',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
});

function ChartComponent() {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);
    const [trafficData, setTrafficData] = useState([]);
    const defaultData = { views: [], count: 0, uniques: 0 };
    const githubPat = import.meta.env.VITE_GITHUB_PAT;
    useEffect(() => {
        const fetchData = async (repo) => {
            try {
                const response = await fetch(`https://api.github.com/repos/29Kumait/${repo}/traffic/views`, {
                    headers: {
                        'Authorization': `token  ${githubPat}`,
                    }
                }); console.log(response);
                if (!response.ok) {
                    console.error('Error:', response.status, await response.text());
                    return { repo, data: defaultData };
                }
                const data = await response.json();
                return { repo, data: { views: data.views, count: data.count, uniques: data.uniques } };
            } catch (error) {
                console.error('Error:', error);
                return { repo, data: defaultData };
            }
        };
        Promise.all([
            fetchData('homework-ecommerce'),
            fetchData('stylex')
        ]).then(data => setTrafficData(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const createChart = (ref, data) => {
        if (data && data[0] && data[0].data && data[0].data.views) {
            const chart = new Chart(ref.current, {
                type: 'line',
                data: {
                    labels: data[0].data.views.map((_, index) => `Day ${index + 1}`),
                    datasets: data.map((dataset, index) => ({
                        label: dataset.repo,
                        data: dataset.data.views ? dataset.data.views.map(view => view.count) : [],
                        fill: false,
                        backgroundColor: `rgb(${index * 75}, ${index * 192}, ${index * 192})`,
                        borderColor: `rgb(${index * 75}, ${index * 192}, ${index * 192})`,
                        tension: 0.2
                    }))
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            chartInstanceRef.current = chart;
        }
    };

    useEffect(() => {
        createChart(chartRef, trafficData);
    }, [trafficData]);

    return (
        <div>
            <div {...stylex.props(styles.chartContainer)}>
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

*/









// import { useEffect, useRef, useState } from 'react';
// import stylex from "@stylexjs/stylex";
// import { Chart } from 'chart.js/auto';
// import trafficDataJson from '../trafficData';
//
//
//
// const styles = stylex.create({
//     chartContainer: {
//         width: 'auto',
//         height: 'auto',
//         margin: '20px auto',
//         padding: '10px',
//         backgroundColor: '#33445788',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     },
// });
//
//
// function ChartComponent() {
//     const chartRef = useRef(null);
//     const chartInstanceRef = useRef(null);
//     const [trafficData, setTrafficData] = useState([]);
//
//     useEffect(() => {
//         setTrafficData([
//             { repo: 'homework-ecommerce', data: trafficDataJson.homeworkEcommerce },
//             { repo: 'stylex', data: trafficDataJson.stylex }
//         ]);
//     }, []);
//
//     useEffect(() => {
//         createChart(chartRef, trafficData);
//     }, [trafficData]);
//
//     const createChart = (ref, data) => {
//         if (chartInstanceRef.current) {
//             chartInstanceRef.current.destroy();
//         }
//
//         if (Array.isArray(data) && data[0] && typeof data[0].data == 'object' && "views" in data[0].data) {
//             const chart = new Chart(ref.current, {
//                 type: 'line',
//                 data: {
//                     labels: data[0].data.views.map((_, index) => `Day ${index + 1}`),
//                     datasets: data.map((dataset, index) => ({
//                         label: dataset.repo,
//                         data: dataset.data.views.map(view => view.count),
//                         fill: false,
//                         backgroundColor: `rgb(${index * 75}, ${index * 192}, ${index * 192})`,
//                         borderColor: `rgb(${index * 75}, ${index * 192}, ${index * 192})`,
//                         tension: 0.2
//                     }))
//                 },
//                 options: {
//                     responsive: true,
//                     scales: {
//                         y: {
//                             beginAtZero: true
//                         }
//                     }
//                 }
//             });
//             chartInstanceRef.current = chart;
//         }
//     };
//
//     return (
//         <div>
//             <div>
//                 <canvas ref={chartRef}></canvas>
//                 {trafficData.map((data, index) => data && data.data && Array.isArray(data.data.views) ? (
//                     <div key={index}>
//                         <h2>
//                             {data.repo} - Total Views: {data.data.views.reduce((total, view) => total + (view.count || 0), 0)}
//                         </h2>
//                         <p>
//                             Unique Visitors: {data.data.views.reduce((total, view) => total + (view.uniques || 0), 0)}
//                         </p>
//                     </div>
//                 ) : null)}
//             </div>
//         </div>
//     );
// }
//
// export default ChartComponent;
//
//
