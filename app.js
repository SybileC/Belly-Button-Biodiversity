function buildPlot(){
    dropdownMenu = d3.select("#selDataset");

    d3.json("data/samples.json").then(function(importedData) {
        samples = importedData.samples;
        names = importedData.names;
        metadata = importedData.metada;;
        
        console.log(samples);
        console.log(names);
        console.log(metadata);
    
    
        sample_values = samples[0]['sample_values'].slice(0,10).reverse();
        otu_ids = samples[0]['otu_ids'].slice(0,10).reverse();
        otu_labels = samples[0]['otu_labels'].slice(0,10).reverse();
    

        trace1 = [{
            type: "bar",
            x: sample_values,
            y: `OTU${otu_ids}`,
            text: otu_labels,
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

       
        names.forEach((sample) => {
            dropdownMenu
                .append("option")
                .text(sample)
                .property("value", sample);
            });

        d3.selectAll("#selDataset").on("onchange", updatePlot);

        function updatePlot() {
            
        }
        
        // function getSample() {
        //     dataset = d3.select("#selDataset").node().value;
        //     CHART = d3.selectAll("#bar").node()
        //     x = []
        //     y = []

        //     for (var i = 0; i < names.length; i++) {
        //         option = names[i];
        //         if (dataset == option) {
        //             x = samples[i]['otu_ids'];
        //             y = samples[i]['sample_values'];
        //         }
        //     } 
        
        //     Plotly.restyle(CHART, "x", [x]);
        //     Plotly.restyle(CHART, "y", [y]);
        // }
        
    });
};

buildPlot();