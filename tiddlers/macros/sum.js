/*\
title: $:/plugins/tiddlywiki/sample-plugin/samplemacro.js
type: application/javascript
module-type: macro

This is a sample macro that reverses the order of the characters in its argument

\*/
(function(){

  /*jslint node: true, browser: true */
  /*global $tw: false */
  "use strict";

  /*
  Information about this macro
  */

  exports.name = "sum";

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
    return +currValue + value;
  
  };

})();
