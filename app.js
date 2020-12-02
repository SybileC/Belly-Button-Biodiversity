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
        otu_labels = samples[0]['otu_labels']
    
    
        topSample_values = sample_values.slice(0,10).reverse();
        topOtu_ids = otu_ids.slice(0,10).reverse();
        topOtu_labels = otu_labels.slice(0,10).reverse();
    

        trace1 = [{
            type: "bar",
            x: topSample_values,
            y: `OTU${topOtu_ids}`, // Can't display label
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

       
        firstSample = metadata[0];

        console.log(firstSample);

        panel = d3.select(".panel-body");
        div = panel.select("div");
        panelBody = div.append("ul");
        panelBody.append("li").text(firstSample);

        // d3.select(".panel-body").selectAll("div")
        //  .data(firstSample)
        //  .enter()
        //  .append("ul")
        //  .append("li")
        //  .text(Object.entries(firstSample));


        names.forEach((sample) => {
            dropdownMenu
                .append("option")
                .text(sample)
                .property("value", sample);
            });

        d3.selectAll("#selDataset").on("onchange", updatePlot);

        function updatePlot(sample) {
            for (var i = 0; i < names.length; i++) {
                sample_values = samples.filter(obj => obj.id == sample)[i].sample_values;
                otu_ids = samples.filter(obj => obj.id == sample)[i].otu_ids;
                otu_labels = samples.filter(obj => obj.id == sample)[i].otu_labels;
            }
        };
        
        function getSample() {
            dataset = d3.select("#selDataset").node().value;
            CHART = d3.selectAll("#bar").node()
            x = []
            y = []

            for (var i = 0; i < names.length; i++) {
                option = names[i];
                if (dataset == option) {
                    x = samples[i]['otu_ids'];
                    y = samples[i]['sample_values'];
                }
            } 
        
            Plotly.restyle(CHART, "x", [x]);
            Plotly.restyle(CHART, "y", [y]);
        }
        
    });
};

buildPlot();

//Filter/fetch data
//event handler
//display panel