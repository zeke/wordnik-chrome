function lookupSelection(data, callback) {
  log('lookupSelection: ' + data.selection);
  // swagger.word.getDefinitions({word:'dog'})
  callback();
  // AjaxRequest(url, callback);
};

// Handles data sent via chrome.extension.sendRequest().
function onRequest(request, sender, callback) {
	switch (request.action) {
		case 'lookupSelection':
			lookupSelection(request.data, callback);
			break;
	}
};

chrome.extension.onRequest.addListener(onRequest);
