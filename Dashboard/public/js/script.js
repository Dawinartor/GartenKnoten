// Manipulate DOM elements
var headLine = document.getElementById('headLine'); //Headline is equal to shown data
var ctx = document.getElementById('myChart'); //Visual chart.js component



// Informationen Button
// 
function clickInformationen() {    
    headLine.innerHTML = "Hilfestellung & Letzte Änderungen";
}

// Gesamtübersicht Button
// Übersicht aller Daten in einem Graphen
function clickGesamtübersicht() {    
    headLine.innerHTML = "Übersicht der gesammten Daten";



        // example from charjs.org
   createLineGraph(['1','2','3','4','5'], [1,2,3,4,5], ctx);
}

// Helligkeit Button
// helligkeit drinnen & draußen
function clickHelligkeit() {
    // Manipulate DOM elements
    headLine.innerHTML = "Hellikeit drinnen & Draußen";



}

// Temperatur Button
// Temperatur drinnen & draußen
function clickTemperatur() {    
    headLine.innerHTML = "Temperatur drinnen & draußen";
}

// Feuchtigkeit Button
// Feuchtigkeit drinnen & draußen
function clickFeuchtigkeit() {
    headLine.innerHTML = "Feuchtigkeit drinnen & Draußen";
}

// Luftdruck Button
// Luftdruck drinnen & draußen
function clickLuftdruck() {
    headLine.innerHTML = "Luftdruck drinnen & Draußen";
}

// WLAN signal Button
// WLAN signal
function clickWlanSignal() {
    headLine.innerHTML = "WLAN Signal";
}

// Spannung Button
// Spannung 
function clickSpannung() {
    headLine.innerHTML = "Spannung";
}



//* --- Tools for collecting & manipulating data ---

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



//* --- Tools to create chartJS grapghs ---


/** Creates a linear graph.
 * 
 * @param {string[]} labels informations for x-axis
 * @param {int[]} dataToVisualize informations for y-axis
 */
 function createLineGraph(labels, dataToVisualize, htmlCompoenent) {

    const data = {
        labels: labels,
        datasets: 
        [
            {
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
            }
        ]
      };

    const config = {
    type: 'line',
    data: data,
    options: {}
    };

    const myChart = new Chart(htmlCompoenent, config);
}