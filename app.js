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
    // otu_labels = unpack(samples, 3);
    // sample_values = Object.values(importedData.samples.sample_values);
    // otu_ids = Object.values(importedData.samples.otu_ids);

    // console.log(otu_labels);
    

    // console.log("buildPlot -> samples -> first object, -> otu_labels", samples[0]['otu_labels']);
    // console.log("buildPlot -> samples -> first object, -> otu_ids", samples[0]['otu_ids']);
    // console.log("buildPlot -> samples -> first object, -> sample_values", samples[0]['sample_values'])
    
    // descendingOrder = Object.keys(samples).sort((a, b) => samples[b] - samples[a]);
    // console.log(descendingOrder)
    
    // sliced = descendingOrder.slice(0, 10);
    // console.log(sliced)

    descendingOrder = samples.sort(function (a, b) { 
        return b.sample_values - a.sample_values
    }).slice(0, 10);
    console.log(descendingOrder);

    // samples.forEach(sample => {
    //     otu_labels = sample['otu_labels'];
    //     otu_ids = sample['otu_ids'];
    //     sample_values = sample['sample_values']
    // }); 

    // console.log(otu_labels);
    // console.log(otu_ids);
    // console.log(sample_values);




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