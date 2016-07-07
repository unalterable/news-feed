(function(exports, xhttp){
  function fetchContent(url, callback) {
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        callback(xhttp.responseText);
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  };
  exports.fetchContent = fetchContent;
})(this, new (
  typeof exports === "undefined" ? XMLHttpRequest : require('xmlhttprequest').XMLHttpRequest));
