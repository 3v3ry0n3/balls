// Hello epic hacker (maybe skid) you are looking at one of the many scripts that powers the site, this script has extra comments and info to help you understand what is going on.

// This code registers a service worker with the browser and checks if it has been installed before. If the service worker has not been installed before, the page is refreshed. If there is an error registering the service worker, an alert is shown with the error message, the URL of the service worker is logged, and an error is thrown. The code uses the navigator.serviceWorker API to register and get a list of service workers.

// Set a variable to false to track if the service worker has been installed
var hasInstalled = false;

// Register the service worker with the browser
navigator.serviceWorker
  .register(`${location.origin}/sw.js`)
  .then((reg) => {
    // If the service worker has not been installed before, refresh the page
    if (!hasInstalled) {
      window.location.reload();
    }
  })
  .catch((e) => {
    // If there is an error registering the service worker, show an alert with the error message, log the URL of the service worker, and throw an error
    alert(e);
    console.log(`${location.origin}/sw.js`);
    throw new Error(e);
  });

// Get a list of all registered service workers and check if the current service worker has been installed
navigator.serviceWorker.getRegistrations().then((registrations) => {
  for (let registration of registrations) {
    if (registration.active.scriptURL == `${location.origin}/sw.js`) {
      hasInstalled = true;
    }
  }
});