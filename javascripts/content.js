function whiff(force) {
  log('whiff');
  
  var selection = getSelectionHtml();

  log (selection);
  
  // Send the request off to background.html, which can make Ajax requests..
  request = {
    action: 'lookupSelection', 
    data: {selection: selection}
  };
  chrome.extension.sendRequest(request, onLookup);
  
}

function onLookup(data) {
  log('onLookup');
  log(data);
}

window.addEventListener("mouseup", whiff);