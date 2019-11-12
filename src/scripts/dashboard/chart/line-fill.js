const initLineFillChart = (userOptions, colorPool) => {
    const prepareDataset = (dataset, index) => {
        const preparedDataset = {
            ...dataset,
            backgroundColor: [],
            borderColor: [],
            pointBackgroundColor: [],
            pointHoverBackgroundColor: [],
            pointHoverBorderColor: [],
            pointBorderColor: [],
            pointBorderWidth: 2,
            borderWidth: 4,
            pointRadius: 2,
            pointHoverRadius: 5
        };

        dataset.data.forEach(() => {
            preparedDataset.backgroundColor.push(`rgba(${colorPool[index]}, 0.1)`);
            preparedDataset.borderColor.push(`rgba(${colorPool[index]}, 1)`);
            preparedDataset.pointBackgroundColor.push(`rgba(${colorPool[index]}, 1)`);
            preparedDataset.pointHoverBackgroundColor.push(`rgba(${colorPool[index]}, 1)`);
            preparedDataset.pointHoverBorderColor.push(`rgba(${colorPool[index]}, 1)`);
            preparedDataset.pointBorderColor.push(`rgba(${colorPool[index]}, 1)`);
        });

        return preparedDataset;
    };

    const { type, data, options } = userOptions;

    return {
        type,
        data: {
            labels: data.labels,
            datasets: data.datasets.map((dataset, i) => prepareDataset(dataset, i))
        },
        options
    };
};

export default initLineFillChart;
