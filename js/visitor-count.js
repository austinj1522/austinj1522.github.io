// static/js/visitor-count.js
document.addEventListener('DOMContentLoaded', function () {
    // Fetch the visitor count from Google Analytics API
    fetch('https://www.googleapis.com/analytics/v3/data/ga?ids=ga:G-WPK24T662R&metrics=ga:users&start-date=30daysAgo&end-date=today')
      .then(response => response.json())
      .then(data => {
        // Extract and display the visitor count
        const visitorCount = data.rows[0][0];
        document.getElementById('visitor-count').innerText = `Total Visitors: ${visitorCount}`;
      })
      .catch(error => console.error('Error fetching visitor count:', error));
  });
  