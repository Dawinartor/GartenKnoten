// Manipulate DOM elements
//const headLine = document.getElementById('headLine'); //Headline is equal to shown data
//const ctx = document.getElementById('myChart'); //Visual chart.js component

// Methods to collect data from app.js and visualize them in script.js
/** Creates a linear graph.
 * 
 * @param {string[]} labels informations for x-axis
 * @param {int[]} dataToVisualize informations for y-axis
 */
function createLineGraph(labels, dataToVisualize, htmlCompoenent) {

    const data = {
        labels: labels,
        datasets: [{
          label: 'Blaaaaaa',
          backgroundColor: 'rgb(255, 99, 232)',
          borderColor: 'rgb(1, 1, 1)',
          data: dataToVisualize
        },
        {
            label: 'Blooooo',
            backgroundColor: 'rgb(25, 39, 132)',
            borderColor: 'rgb(100, 100, 100)',
            data: dataToVisualize
          }]
      };

    const config = {
    type: 'line',
    data: data,
    options: {}
    };

    const myChart = new Chart(htmlCompoenent, config);
}

// helligkeit drinnen & draußen
function callHelligkeit() {
    const headLine = document.getElementById('headLine'); //Headline is equal to shown data
    const ctx = document.getElementById('myChart'); //Visual chart.js component
    // Manipulate DOM elements
    headLine.innerHTML = "Hellikeit drinnen & Draußen";

    // try to access data from '/collectDataFromDB' through fetchAPI
    const url = 'http://localhost:4001/collectDataFromDB';
    var res;
    fetch(url)
    .then((collectedData) => collectedData.json())
    .then(function(data) {
        res = sortDataBy(data ,"TEMPERATUR");
        console.log(res);
    })


    // example from charjs.org
   createLineGraph(['1','2','3','4','5'], [1,2,3,4,5], ctx);
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



//* Tools for collecting & manipulating data
function sortDataBy(data_pack, topic) {

    var sortedDataSet = [];
    var topic_key = String(topic).toLocaleUpperCase();

    data_pack.forEach(element => {
        sortedDataSet.push({
            "DATUM": element.DATUM,
            "ZEIT": element.ZEIT,
            "ORT": element.ORT,
            [topic_key]: element[topic_key]
        });
    });
    return sortedDataSet;


    // sort between indoor & outdoor
}