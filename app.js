// function unpack(rows, index) {
//     return rows.map(function(row) {
//       return row[index];
//     });
//   }
  
// function buildPlot() {
d3.json("data/samples.json").then(function(importedData) {
      
      console.log(importedData.names);
      console.log(importedData.metadata);
      console.log(importedData.samples);

  names = importedData.names;
  metadata = importedData.metadata;
  samples = importedData.samples;

  function filterSample(sample) {
        return sample.id == 940;
  }

  filteredSample = samples.filter(filterSample);

  console.log(filteredSample);

  sliced_sample = Array.prototype.slice.call(filteredSample.sample_values, 10);

  console.log(sliced_sample);

//   sample_values = filteredSample.map(sample => sample.sample_values);

//   console.log(sample_values);

//   sliced_values = sample_values.slice(0, 10);

//   console.log(sliced_values);

//   init () {
//       trace1 = {
//       type: "bar",
//       x: sample['sample_values'],
//       y: otu_ids,
//       text: otu_labels,
//       orientation: "h"
//   };
  
//       data = [trace1];
  
//       layout = {
//           title: 'Top 10 OTUs Found in Individuals'
//       }
  
//       Plotly.newPlot("bar", data, layout);
//       }

//   d3.selectAll("#selDataset").on("onchange", getSample);
      
//   function getSample() {
//       //   return sample.id === 940;
//       dropdownMenu = d3.select("#selDataset").property("value");
//       // data.samples.filter(sampleObj => sampleObj.id == sample)[0].otu_ids

//   }

//   filteredSamples = samples.filter(getSample);

//   console.log(filteredSamples);
       
});