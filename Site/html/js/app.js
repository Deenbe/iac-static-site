/* eslint-disable */

// Renders the page based on the current URL
function renderApp() {
    var content;
    var title;
    if (window.location.pathname.endsWith('/about')) {
      title = "SPA - About";
      content = '<h2>Welcome to the About page</h2><p>This a simple demonstration of an IaC deployed Single Page App behind CloudFront, served from a secure S3 bucket with deep linking capability.</p>';
    }
    else if (window.location.pathname.endsWith('/contact')) {
        title = "SPA - Contact";
        content = '<h2>Welcome to the Contact page</h2><p>This a simple demonstration of an IaC deployed Single Page App behind CloudFront, served from a secure S3 bucket with deep linking capability.</p>';
    }
    else if (window.location.pathname.endsWith('/')) {
      title = "SPA - Home";
      content = '<h2>Welcome to the Demo Single Page App :)</h2><p>This a simple demonstration of an IaC deployed Single Page App behind CloudFront, served from a secure S3 bucket with deep linking capability.</p>'
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
  