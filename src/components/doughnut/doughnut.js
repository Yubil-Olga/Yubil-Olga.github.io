import Chart from 'chart.js';

var ctx = $('#myChart');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            maintainAspectRatio: false,
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            // backgroundColor: [
            //     'red', 
            //     'yellow',
            //     'rgba(255, 206, 86, 0.2)',
            //     'rgba(75, 192, 192, 0.2)',
            //     'rgba(153, 102, 255, 0.2)',
            //     'rgba(255, 159, 64, 0.2)'
            // ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 5
        }]
    },
    options: {
        legend: {
            display: true,
            position: 'right'
        },
        title: {
            display: true,
            text: 'Custom Chart Title'
        }
    }
});
myChart.canvas.parentNode.style.height = '300px';
myChart.canvas.parentNode.style.width = '300px';