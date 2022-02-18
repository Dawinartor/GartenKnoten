// Connect with mariaDB server
const mariadb = require('mariadb');

// Manipulate DOM elements
const headLine = document.getElementById('headLine'); //Headline is equal to shown data
const ctx = document.getElementById('myChart'); //Visual chart.js component

// helligkeit drinnen & draußen
function callHelligkeit() {
    headLine.innerHTML = "Hellikeit drinnen & Draußen";
}

// Temperatur drinnen & draußen
function callTemperatur() {    
    headLine.innerHTML = "Temperatur drinnen & draußen";
}

// Feuchtigkeit drinnen & draußen
function callFeuchtigkeit() {
    headLine.innerHTML = "Feuchtigkeit drinnen & Draußen";
}

// Luftdruck drinnen & draußen
function callLuftdruck() {
    headLine.innerHTML = "Luftdruck drinnen & Draußen";
}

// WLAN signal
function callWlanSignal() {
    headLine.innerHTML = "WLAN Signal";
}

// Spannung 
function callSpannung() {
    headLine.innerHTML = "Spannung";
}



//const ctx = document.getElementById('myChart').getContext('2d');
/*
const myChart = new Chart(ctx, {
    type: 'bar',
    responsive: true,
    maintainAspectRatio: false,
    data: {
        labels: ['Drinnen', 'Draußen'],
        datasets: [
            {
            label: ['# of Votes'],
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 0.5
        }
    ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
*/