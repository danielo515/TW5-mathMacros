/*\
title: $:/widgets/danielo515/substract.js
type: application/javascript
module-type: macro

This macro returns the value of the specified field of the specified tiddler
substracting the provided value

\*/
(function(){

  /*jslint node: true, browser: true */
  /*global $tw: false */
  "use strict";

  /*
  Information about this macro
  */

  exports.name = "substract";

  exports.params = [
  {name: "tiddler"},
  {name: "field"},
  {name: "value"}
  ];

  /*
  Run the macro
  */
  exports.run = function(tiddler,field,value) {
    var tiddler=$tw.wiki.getTiddler(tiddler || this.getVariable("currentTiddler")),
    currValue = tiddler.fields[field] || 0,
    value = value || 1;
    return (+currValue) - (+value);

  };

})();
