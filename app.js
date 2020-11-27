
function buildPlot() {

    d3.json("samples.json").then(function(data) {
    
        // console.log(data.dataset.names);
        // console.log(data.dataset.metadata);
        // console.log(data.dataset.samples);
    
        // var names = data.dataset.names;
        // var metadata = data.metadata;
        console.log(data[0])
    });

    // var trace1 = {
    //     type: "scatter",
    //     mode: "lines",
    //     name: name,
    //     x: dates,
    //     y: closingPrices,
    //     line: {
    //       color: "#17BECF"
    //     }
    //   };
  
}