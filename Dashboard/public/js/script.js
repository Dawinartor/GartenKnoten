// Manipulate DOM elements
var headLine = document.getElementById('headLine'); //Headline is equal to shown data
var ctx = document.getElementById('myChart'); //Visual chart.js component

// TODO: add standard url
const basicURL = "/get";
let currentURL = "";


// Informationen Button
// 
function clickInformationen() {    
    headLine.innerHTML = "Hilfestellung & Letzte Änderungen";
}

// Gesamtübersicht Button
// Übersicht aller Daten in einem Graphen
function clickGesamtübersicht() {    
    headLine.innerHTML = "Übersicht der gesammten Daten";
    currentURL = "/gesamtuebersicht";
    var chartjsObject = {
        Datum: [],
    };

    //TODO: https://github.com/Dawinartor/GartenKnoten/issues/1
    fetch() // fetch from /get/availableDates

    // give fetched information to calender-component


    //collect data by Fetch-API
    fetch(basicURL + currentURL)
        //' feched data as json
        .then((resp) => resp.json()) 

        //' order and sort data
        .then((data) => {
            // +++ sort data by date +++
            var availableDates = new Set();
            for (let entry in data) {
                // ++ collect all available date elements in a set
                availableDates.add(data[entry].DATUM);


                //console.log( moment(data[entry].DATUM).format("DD.MM.YYYY") );
                //console.log(data[entry].DATUM); 
                console.log(availableDates);
            }

            
        })

        //' In case of failure
        .catch((error) => {
            console.log(error);
        })

        //' finalize the action
        .finally(() => {
            console.log("Fetch was successful");
        })


   // example from charjs.org
   createLineGraph(['01.03.22','02.03.22','03.03.22','04.03.22','05.03.22', '06.03.22', '07.03.22', '08.03.22'], [[1,4,3,7,5,8,11,14],[0,3,5,6,9,10,11,17]], ctx);
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



// --- Tools to create chartJS grapghs ---


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
                label: 'TEMPERATUR',
                backgroundColor: 'rgb(255, 99, 232)',
                borderColor: 'rgb(1, 1, 1)',
                data: dataToVisualize[0]
            },
            {
                label: 'FEUCHTIGKEIT',
                backgroundColor: 'rgb(25, 39, 132)',
                borderColor: 'rgb(100, 100, 100)',
                data: dataToVisualize[1]
            },
            {
                label: 'DRUCK',
                backgroundColor: 'rgb(215, 39, 132)',
                borderColor: 'rgb(100, 100, 100)',
                data: dataToVisualize[0]
            },
            {
                label: 'LICHT',
                backgroundColor: 'rgb(25, 139, 132)',
                borderColor: 'rgb(100, 100, 100)',
                data: dataToVisualize[1]
            },
            {
                label: 'WASSERPEGEL',
                backgroundColor: 'rgb(25, 39, 232)',
                borderColor: 'rgb(100, 100, 100)',
                data: dataToVisualize[0]
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
