/*(function($) {
  "use strict";

  var frequency_list = [{"text":"San Diego","size":40},
                        {"text":"El Cajon","size":15},
                        {"text":"Oceanside","size":10},
                        {"text":"Santee","size":15},
                        {"text":"Encinitas","size":10},
                        {"text":"Spring Valley","size":5},
                        {"text":"Escondido","size":10},
                        {"text":"San Marcos","size":5},
                        {"text":"Poway","size":5},
                        {"text":"Chula Vista","size":85},
                        {"text":"National City","size":5},
                        {"text":"Carlsbad","size":5},
                        {"text":"Lakeside","size":15},
                        {"text":"Vista","size":45},
                        {"text":"Ramona","size":30},
                        {"text":"La Mesa","size":5},
                        {"text":"Imperial Beach","size":5},
                        {"text":"Coronado","size":10},
                        {"text":"Lemon Grove","size":120},
                        {"text":"Valley Center","size":5},
                        {"text":"Solana Beach","size":5},
                        {"text":"Alpine","size":10},
                        {"text":"Bonita","size":5},
                        {"text":"Rancho Santa Fe","size":5},
                        {"text":"Jamul","size":85},
                        {"text":"Bonsall","size":5},
                        {"text":"Borrego Springs","size":5},
                        {"text":"Julian","size":15},
                        {"text":"Campo","size":45},
                        {"text":"Pauma Valley","size":30},
                        {"text":"Descanso","size":5},
                        {"text":"Warner Springs","size":5},
                        {"text":"Boulevard","size":10},
                        {"text":"Mount Laguna","size":120},
                        {"text":"Santa Ysabel","size":30},
                        {"text":"Potrero","size":5},
                        {"text":"Jacumba","size":5},
                        {"text":"Dulzura","size":10},
                        {"text":"Ranchita","size":120}];

  var color = d3.scale.linear()
          .domain([0,1,2,3,4,5,6,10,15,20,100])
          .range(["#ddd", "#ccc", "#bbb", "#aaa", "#999", "#888", "#777", "#666", "#555", "#444", "#333", "#222"]);  

  d3.layout.cloud().size([800, 300])
          .words(frequency_list) //d.City??
          .rotate(0)
          .fontSize(function(d) { return d.size; }) // d.avg_value??
          .on("end", draw)
          .start();

  function draw(words) {
      d3.select("body").append("svg")
              .attr("width", 850)
              .attr("height", 350)
              .attr("class", "wordcloud")
              .append("g")
              // without the transform, words words would get cutoff to the left and top, they would
              // appear outside of the SVG area
              .attr("transform", "translate(320,200)")
              .selectAll("text")
              .data(words)
              .enter().append("text")
              .style("font-size", function(d) { return d.size + "px"; })
              .style("fill", function(d, i) { return color(i); })
              .attr("transform", function(d) {
                  return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
              })
              .text(function(d) { return d.text; });
  }

  d3.json("/delphidata", function(err, dat) {
        console.log("data: " + dat);
        if (err) {
            console.log(err);
            return;
        }
        var data = dat;

        d3.layout.cloud().size([800, 300])
                .words(data.City) //d.City??
                .rotate(0)
                .fontSize(function(d) { return d.avg_value; }) // d.avg_value??
                .on("end", draw)
                .start();

        function draw(words) {
            d3.select("body").append("svg")
                    .attr("width", 850)
                    .attr("height", 350)
                    .attr("class", "wordcloud")
                    .append("g")
                    // without the transform, words words would get cutoff to the left and top, they would
                    // appear outside of the SVG area
                    .attr("transform", "translate(320,200)")
                    .selectAll("text")
                    .data(words)
                    .enter().append("text")
                    .style("font-size", function(d) { return d.size + "px"; })
                    .style("fill", function(d, i) { return color(i); })
                    .attr("transform", function(d) {
                        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                    })
                    .text(function(d) { return d.text; });
        }
  });

})(d3);
*/
