// Create init function
function buildPlot(){
    // Select id from html file to locate dropdown menu
    dropdownMenu = d3.select("#selDataset");

    // Pull data using d3.json then create function to plot data
    d3.json("data/samples.json").then(function(importedData) {
        
        // Create variables from imported data
        samples = importedData.samples;
        names = importedData.names;
        metadata = importedData.metadata;;
        
        // log variables in console
        console.log(samples);
        console.log(names);
        console.log(metadata);

        // Find data for first sample (id 940)
        sample_values = samples[0]['sample_values'];
        otu_ids = samples[0]['otu_ids'];
        otu_labels = samples[0]['otu_labels'];
    
        // Find top OTUs and their values for first sample and list them in descending order 
        topSample_values = sample_values.slice(0,10).reverse();
        topOtu_ids = otu_ids.map(id => `OTU${id}`).slice(0,10).reverse();
        topOtu_labels = otu_labels.slice(0,10).reverse();

        console.log(topOtu_ids);
    

        // Create the first Trace in an array for the plot
        trace1 = [{
            type: "bar",
            x: topSample_values,
            y: topOtu_ids, 
            text: topOtu_labels,
            // 
            orientation: "h"
        }];

        // Define the first plot layout
        layout1 = {
            title: "Top 10 OTUs found in Individual"
        } 

        // Plot the first chart to a div tag with id "bar"
        Plotly.newPlot("bar", trace1, layout1);

        // Create the second Trace in an array for the plot
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

        // Define the second plot layout
        layout2 = {
            title: "Sample",
            xaxis: { title: "OTU ID"}
        };

        // Plot the second chart to a div tag with id "bubble"
        Plotly.newPlot("bubble", trace2, layout2)

        // Find the metadata for the first sample
        firstSample = metadata[0]

        // Create panel to a div tag with id sample-metadata and populate panel with the first sample's metadata
        panel = d3.select("#sample-metadata");
        panel.html("");
        Object.entries(firstSample).forEach(([key, value]) => {
            panel.append("div").text(`${key}: ${value}`);
          });


        // Populate dropdown menu with names
          names.forEach((sample) => {
            dropdownMenu
                .append("option")
                .text(sample)
                .property("value", sample);
            });   
        
    });
};

// Create listening event for dropdown menu
function optionChanged(sample) {
    // Pull again data using d3.json then create function to plot data
    d3.json("data/samples.json").then(function(importedData) {
    
    samples = importedData.samples;
    names = importedData.names;
    metadata = importedData.metadata;

    // create variable with filtered value of each new sample
    newSample = samples.filter(sampleObj => sampleObj.id == sample);
    newMetadata = metadata.filter(sampleObj => sampleObj.id == sample);

    // log variables in console
    console.log(newSample);
    console.log(newMetadata);
    
   // Find data for each new sample 
    otu_labels = newSample[0]['otu_labels'];
    otu_ids = newSample[0]['otu_ids'];
    sample_values = newSample[0]['sample_values'];

    // Find top OTUs and their values for each sample and list them in descending order
    topSample_values = sample_values.slice(0,10).reverse();
    topOtu_ids = otu_ids.map(id => `OTU${id}`).slice(0,10).reverse();
    topOtu_labels = otu_labels.slice(0,10).reverse();
    
    // Create the first Trace in an array for the plot
    trace1 = [{
        type: "bar",
        x: topSample_values,
        y: topOtu_ids, 
        text: topOtu_labels,
        orientation: "h"
    }];

    // Define the first plot layout
    layout1 = {
        title: "Top 10 OTUs found in Individual"
    } 

    // Plot the first chart to a div tag with id "bar"
    Plotly.newPlot("bar", trace1, layout1);

    // Create the second Trace in an array for the plot
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

    // Define the second plot layout
    layout2 = {
        title: "Sample",
        xaxis: { title: "OTU ID"}
    };

    // Plot the second chart to a div tag with id "bubble"
    Plotly.newPlot("bubble", trace2, layout2)

    // Find the metadata for each new sample
    selectedSample = newMetadata[0]

    // Create panel to a div tag with id sample-metadata and populate panel with each new sample's metadata
    panel = d3.select("#sample-metadata");
    panel.html("");
    Object.entries(selectedSample).forEach(([key, value]) => {
        panel.append("div").text(`${key}: ${value}`);
      });
    
    });
};

// Call init function to display first sample charts and panel everytime page is refreshed
buildPlot();

