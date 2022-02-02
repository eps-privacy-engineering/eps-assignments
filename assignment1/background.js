//Code adapted from https://developer.chrome.com/docs/extensions/mv3/getstarted/

chrome.runtime.onInstalled.addListener(() => {
  console.log('Hello, World!');
});
