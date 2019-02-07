function onCreated(tab) {
	debugger;
	browser.tabs.executeScript(tab.id, {code: 'console.log("Running Content Script from debug-content-scripts-demo-extension"); debugger; console.log("Finished running Content Script from debug-content-scripts-demo-extension");'});
}

function onError(error) {
	console.error(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener(() => {
	var creating = browser.tabs.create({
		url:"https://example.org"
	});
	creating.then(onCreated, onError);
});