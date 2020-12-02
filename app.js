function buildPlot(){
    dropdownMenu = d3.select("#selDataset");

    d3.json("data/samples.json").then(function(importedData) {
        samples = importedData.samples;
        names = importedData.names;
        metadata = importedData.metadata;;
        
        console.log(samples);
        console.log(names);
        console.log(metadata);

        sample_values = samples[0]['sample_values'];
        otu_ids = samples[0]['otu_ids'];
        otu_labels = samples[0]['otu_labels'];
    
    
        topSample_values = sample_values.slice(0,10).reverse();
        topOtu_ids = otu_ids.map(id => `OTU${id}`).slice(0,10).reverse();
        topOtu_labels = otu_labels.slice(0,10).reverse();

        console.log(topOtu_ids);
    

        trace1 = [{
            type: "bar",
            x: topSample_values,
            y: topOtu_ids, 
            text: topOtu_labels,
            orientation: "h"
        }];

        layout1 = {
            title: "Top 10 OTUs found in Individuals"
        } 

        Plotly.newPlot("bar", trace1, layout1);

        trace2 = [{
            mode: "markers",
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            marker: {
                color: otu_ids,
                size: sample_values
            }
        }];

        layout2 = {
            title: "Samples"
        };

        Plotly.newPlot("bubble", trace2, layout2)

        firstSample = metadata[0]

        panel = d3.select("#sample-metadata");
        panel.html("");
        Object.entries(firstSample).forEach(([key, value]) => {
            panel.append("div").text(`${key}: ${value}`);
          });


        names.forEach((sample) => {
            dropdownMenu
                .append("option")
                .text(sample)
                .property("value", sample);
            });   
        
    });
};

function optionChanged(sample) {
    d3.json("data/samples.json").then(function(importedData) {
    
    samples = importedData.samples;
    names = importedData.names;
    metadata = importedData.metadata;

    newSample = samples.filter(sampleObj => sampleObj.id == sample);
    newMetadata = metadata.filter(sampleObj => sampleObj.id == sample);

    console.log(newSample);
    console.log(newMetadata);
    
    otu_labels = newSample[0]['otu_labels'];
    otu_ids = newSample[0]['otu_ids'];
    sample_values = newSample[0]['sample_values'];

    topSample_values = sample_values.slice(0,10).reverse();
    topOtu_ids = otu_ids.map(id => `OTU${id}`).slice(0,10).reverse();
    topOtu_labels = otu_labels.slice(0,10).reverse();
    
    trace1 = [{
        type: "bar",
        x: topSample_values,
        y: topOtu_ids, 
        text: topOtu_labels,
        orientation: "h"
    }];

    layout1 = {
        title: "Top 10 OTUs found in Individuals"
    } 

    Plotly.newPlot("bar", trace1, layout1);

    trace2 = [{
        mode: "markers",
        x: otu_ids,
        y: sample_values,
        text: otu_labels,
        marker: {
            color: otu_ids,
            size: sample_values
        }
    }];

    layout2 = {
        title: "Samples"
    };

    Plotly.newPlot("bubble", trace2, layout2)

    selectedSample = newMetadata[0]

    panel = d3.select("#sample-metadata");
    panel.html("");
    Object.entries(selectedSample).forEach(([key, value]) => {
        panel.append("div").text(`${key}: ${value}`);
      });
    
    });
};

buildPlot();

