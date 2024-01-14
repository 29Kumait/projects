// useCreateChart.js
import { useEffect } from 'react';
import { Chart } from 'chart.js/auto';

const useCreateChart = (ref, data) => {
    useEffect(() => {
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

            return () => chart.destroy();
        }
    }, [ref, data]);
};

export default useCreateChart;