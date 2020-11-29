function unpack(rows, index) {
    return rows.map(function(row) {
      return row[index];
    });
  }
  
// function buildPlot() {
    d3.json("data/samples.json").then(function(importedData) {
    console.log(importedData.names);
    console.log(importedData.metadata);
    console.log(importedData.samples);

    names = Object.values(importedData.names);
    metadata = Object.values(importedData.metadata);
    samples = Object.values(importedData.samples);

    // importedData.samples.forEach(sample => importedData.samples.filter(sampleObj => sampleObj.id == sample)[0].sample_values);
    otu_labels = samples.map(row => row[2]);
    // sample_values = Object.values(importedData.samples.sample_values);
    // otu_ids = Object.values(importedData.samples.otu_ids);

    console.log(otu_labels);
    // trace1 = {
    //     type: "bar",
    //     x: sample_values,
    //     y: otu_ids,
    //     text: otu_labels,
    //     orientation: "h"
    // };

    // data = [trace1];

    // layout = {
    //     title: 'Top 10 OTUs Found in Individuals'
    // }

    // Plotly.newPlot("bar", data, layout);
    });
    // }


// buildPlot();