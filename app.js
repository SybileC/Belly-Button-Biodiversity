d3.json("samples.json").then(function(data) {
    console.log(data.names);
    console.log(data.metadata);
    console.log(data.samples);
});
