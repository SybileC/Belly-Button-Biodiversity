function unpack(rows, index) {
    return rows.map(function(row) {
      return row[index];
    });
  }
  

d3.json("data/samples.json").then(function(importedData) {
    console.log(importedData.names);
    console.log(importedData.metadata);
    console.log(importedData.samples);

    // importedData.samples.forEach(sample => importedData.samples.filter(sampleObj => sampleObj.id == sample)[0].sample_values);
    otu_labels = unpack(importedData.samples, 2);
    sample_values = unpack(importedData.samples, 3);
    otu_ids = unpack(importedData.samples, 1);

    console.log(otu_ids)

    trace1 = {
        type: "bar",
        x: sample_values,
        y: otu_ids,
        text: otu_labels,
        orientation: "h"
    };

    data = [trace1];

    layout = {
        title: 'Top 10 OTUs Found in Individuals'
    }

    Plotly.newPlot("bar", data, layout);
});