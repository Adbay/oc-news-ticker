$(function() {
  // load the widget configuration
  var config = new WidgetConfig();
  config.on("config-initialized", function(event, data) {
    //$("#output").text(config.preferences["Article Number"]);
    //load the page
    $.get(
      "https://oilcity.news/wp-json/wp/v2/posts?page=1&per_page=10",
      "",
      function(data, textStatus, jqXHR) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
          $(".ticker").append(
            '<div class="ticker__item">' + data[i].title.rendered + "</div>"
          );
        }
      }
    );
  });
  config.on("config-error", function() {
    $("#output").text("Error loading preferences");
  });
  config.init();
});

function get_random(myList) {
  return Math.floor(Math.random() * 72);
}
