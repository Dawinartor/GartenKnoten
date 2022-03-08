//TODO: Chart.js verfügbar machen & Beispiel charts erstellen
//TODO: Alle Methoden in app.js verfügbar machen
//TODO: Als Parameter db daten verwenden

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

function testCall(was) {
    das = String(was)
    console.log(das);
}

// helligkeit drinnen & draußen
function callHelligkeit(helligkeitsDaten) {
    // Manipulate DOM elements
    headLine.innerHTML = "Hellikeit drinnen & Draußen";

    // example from charjs.org
   createLineGraph(['1','2','3','4','5'], helligkeitsDaten, ctx);
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


module.exports = {
    testCall: testCall,
    callHelligkeit: callHelligkeit
  };