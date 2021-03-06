(function() {
    var diameter = 380,
        height = 400,
        width = 400,
        format = d3.format(",d"),
        color = d3.scale.category20()
        buzzwordHeight = 300
        buzzwordWidth = 300;

    var bubble = d3.layout.pack()
        .sort(null)
        .size([diameter, diameter])
        .padding(1.5);

    var svg = d3.select("#chart-buzzwords").append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("class", "bubble")

    var tooltip = d3.select('#chart-buzzwords').append('div')
        .attr('class', 'buzzword')
        .text('Data Visualization')


    d3.json("js/buzzwords.json", function(error, root) {
        var node = svg.selectAll(".node")
            .data(bubble.nodes(classes(root))
                .filter(function(d) {
                    return !d.children;
                }))
            .enter().append("g")
            .attr("class", "node")
            .attr("transform", function(d) {
                return "translate(" + d.x + "," + d.y + ")";
            });

        node.append("circle")
            .attr("r", function(d) {
                return d.r;
            })
            .style("fill", function(d) {
                return color(d.packageName);
            });

        node.append("text")
            .attr("dy", ".3em")
            .style("text-anchor", "middle")
            .text(function(d) {
                return d.className.substring(0, d.r / 3);
            });

        node.on('mouseover', function(d) {
            tooltip.html(d)
                .text(function() {
                    return d.className
                });
        });
    });

    // Returns a flattened hierarchy containing all leaf nodes under the root.

    function classes(root) {
        var classes = [];

        function recurse(name, node) {
            if (node.children) node.children.forEach(function(child) {
                recurse(node.name, child);
            });
            else classes.push({
                packageName: name,
                className: node.name,
                value: node.size
            });
        }

        recurse(null, root);
        return {
            children: classes
        };
    }

})();
