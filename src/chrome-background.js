chrome.app.runtime.onLaunched.addListener(function(launchData) {
  
  chrome.app.window.create('index.html', {
    id: "dnd_management",
    frame: 'none',
    bounds: {
      width: 1280,
      height: 800
    },
    resizable: true
  });

});

chrome.runtime.onInstalled.addListener(function() {
  console.log('installed');
});

chrome.runtime.onSuspend.addListener(function() {
  // Do some simple clean-up tasks.
});
/*
add to manifest?
"require.min.js",
"angular.min.js",
"angular-route.min.js",
"app.min.js"
*/