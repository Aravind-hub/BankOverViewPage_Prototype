(function(window, undefined) {
  var dictionary = {
    "ef6f7c3c-e616-4446-8ae7-1c24313e2b75": "Menu",
    "b4ad3554-e9ed-48dc-ae35-04a31e292acd": "HomeAssistance",
    "35e89752-3716-4f58-be72-a11e290605c1": "Home2",
    "a8c9ffa2-e3a6-47ee-b210-d3a8bc550d16": "Home1",
    "22eed7c9-df2d-4d9d-8559-462c5b7d83aa": "Home",
    "da1dde3f-89ca-4889-82ea-c360bf470e8d": "HomeOffers",
    "482d5014-188e-4073-9abc-4dca4ed95fd8": "HomeSearch",
    "1844ac5c-8f2a-4e1c-9c65-5ca981c1d6aa": "Transactions",
    "97904c60-f0df-4b85-87e2-8e73d871e36e": "Smart Interactions",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);