
// function init() {
    d3.json("data/samples.json").then((data) => {
    
        console.log(data.names);
        console.log(data.metadata);
        console.log(data.samples);
        // console.log(data)  
        // console.log(data.samples[0])

        // data.samples.forEach(sample => {
        //     var sample_values = sample.sample_values
        //     var otu_ids = sample.otu_ids
        //     var otu_labels = sample.otu_
        // });
        // var sample_values = data.samples[0].sample_values;
        // var otu_ids = data.samples[0].otu_ids;
        // var otu_labels = data.samples[0].otu_labels;

        var otu_ids = data.samples.filter(sampleObj => sampleObj.id == sample)[0].otu_ids
        var sample_values = data.samples.filter(sampleObj => sampleObj.id == sample)[0].sample_values
        var otu_labels = data.samples.filter(sampleObj => sampleObj.id == sample)[0].otu_labels

        var trace1 = {
            type: "bar",
            x: data.samples.map(row => row.sample_values),
            y: data.samples.map(row => row.otu_labels,
            orientation: "h"
        };

        var data = [trace1]

        var layout = {
        title: 'Top 10 OTUs Found in Individuals',
    //   xaxis: sample_values,
    //   yaxis: otu_labels,
        };

        Plotly.newPlot("bar", data, layout);


    });

// var names = data.names;
// var metadata = data.metadata;
// var samples = data.samples;

  
// };