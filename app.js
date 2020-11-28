
function init() {
    d3.json("samples.json").then((data) => {
    
        console.log(data.names);
        console.log(data.metadata);
        console.log(data.samples);
        // console.log(data)
    });

// var names = data.names;
// var metadata = data.metadata;
// var samples = data.samples;

    var sample_values = data.samples.map(row => row[3])
    var otu_ids = data.samples.map(row => row[1])
    var otu_labels = data.samples.map(row => row[2])

    var trace1 = {
        type: "bar",
        x: sample_values,
        y: otu_labels,
        orientation: "h"
    };

    var data = [trace1]

    var layout = {
        title: 'Top 10 OTUs Found in Individuals',
    //   xaxis: sample_values,
    //   yaxis: otu_labels,
    };

    Plotly.newPlot("bar-plot", data, layout);
};