var btn = document.querySelector('.btn-slide');

btn.addEventListener('click', function() {
    document.querySelector('.side-nav').classList.toggle('slide');
    document.querySelector('.open').classList.toggle('d-none');
    document.querySelector('.close').classList.toggle('d-none');
});

// myChart1
// const labels = [
//     'January',
    // 'February',
    // 'March',
    // 'April',
    // 'May',
    // 'June',
//   ];

//   const data = {
//     labels: labels,
//     datasets: [{
//       label: 'My First dataset',
//       backgroundColor: 'rgb(255, 99, 132)',
//       borderColor: 'rgb(255, 99, 132)',
//       data: [0, 10, 5, 2, 20, 30, 45],
//     }]
//   };

//   const config = {
//     type: 'line',
//     data: data,
//     options: {}
//   };

//   const myChart1 = new Chart(
//     document.getElementById('myChart1'),
//     config
//   );

// const myChart1 = new Chart(
//     document.getElementById('myChart1'),
//     {
//         type: 'line',
//         data: {
//             labels: ['January', 'February', 'March', 'April', 'May', 'June'],
//             datasets: [{
//                 label: 'My First Dataset',
//                 backgroundColor: 'rgb(255, 99, 132)',
//                 borderColor: 'rgb(255, 99, 132)',
//                 data: [0, 10, 5, 2, 20, 30, 45]
//             }]
//         },
//         options: {}
//     }
// );

const ctx = document.getElementById('myChart1').getContext('2d');

const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'My Bar Chart',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.9)',
                    'rgba(255, 159, 64, 0.9)',
                    'rgba(255, 205, 86, 0.9)',
                    'rgba(75, 192, 192, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(153, 102, 255, 0.9)',
                    'rgba(201, 203, 207, 0.9)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 0.1)',
                    'rgba(255, 159, 64, 0.1)',
                    'rgba(255, 205, 86, 0.1)',
                    'rgba(75, 192, 192, 0.1)',
                    'rgba(54, 162, 235, 0.1)',
                    'rgba(153, 102, 255, 0.1)',
                    'rgba(201, 203, 207, 0.1)'
                ],
                borderWidth: 1
            }]
        },
        options: {}
    }
);
// myChart1

// myChart2
const ctx2 = document.getElementById('myChart2').getContext('2d');

const myChart2 = new Chart(ctx2, {
        type: 'polarArea',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'My Polar Area Chart',
                data: [12, 15, 5, 7, 12, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.9)',
                    'rgba(255, 159, 64, 0.9)',
                    'rgba(255, 205, 86, 0.4)',
                    'rgba(75, 192, 192, 0.4)',
                    'rgba(153, 102, 255, 0.4)',
                    'rgba(54, 162, 235, 0.4)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 0.1)',
                    'rgba(255, 159, 64, 0.1)',
                    'rgba(255, 205, 86, 0.1)',
                    'rgba(75, 192, 192, 0.1)',
                    'rgba(153, 102, 255, 0.1)',
                    'rgba(54, 162, 235, 0.1)'
                ],
                borderWidth: 1
            }]
        },
        options: {}
    }
);
// myChart2

// myChart3
const ctx3 = document.getElementById('myChart3').getContext('2d');

const myChart3 = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'My Line Chart',
            data: [0, 10, 5, 2, 20, 30, 45],
            backgroundColor: 'rgba(255, 99, 132, 0.9)',
            borderColor: 'rgba(255, 99, 132, 0.9)'
        }]
    }
});
// myChart3