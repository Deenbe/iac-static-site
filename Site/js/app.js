/* eslint-disable */

// Renders the page based on the current URL
function renderApp() {
    var content;
    var title;
    if (window.location.pathname === '/about') {
      title = "SPA - About";
      content = '<h1>Welcome to the About page</h1><p>This a simple demonstration of a SPA behind CloudFront, served from S3 with deep linking capability.</p>';
    }
    else if (window.location.pathname === '/contact') {
        title = "SPA - Contact";
        content = '<h1>Welcome to the Contact page</h1><p>This a simple demonstration of a SPA behind CloudFront, served from S3 with deep linking capability.</p>';
    }
    else if (window.location.pathname === '/') {
      title = "SPA - Home";
      content = '<h1>Welcome to the Demo Single Page App :)</h1><p>This a simple demonstration of a SPA behind CloudFront, served from S3 with deep linking capability.</p>'
    }
    var main = document.getElementsByTagName('main')[0];
    document.title = title;
    main.innerHTML = content;
  }
  
  // Navigate to another URL and re-render the application
  function navigate(evt) {
    evt.preventDefault();
    var href = evt.target.getAttribute('href');
    window.history.pushState({}, undefined, href);
    renderApp();
  }
  
  document.addEventListener('DOMContentLoaded', function(event) {
    // Attach the event listener once the DOM has been loaded
    var nav = document.getElementsByTagName('nav')[0];
    nav.addEventListener("click", navigate, false);
  
    // First initial App rendering
    renderApp();
  });
  