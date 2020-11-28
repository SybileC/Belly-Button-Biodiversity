d3.json("samples.json").then((data) => {
    
    console.log(data.names);
    console.log(data.metadata);
    console.log(data.samples);
    // console.log(data)
});

var names = data.dataset.names;
var metadata = data.metadata;
var samples = data.samples;

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

// }