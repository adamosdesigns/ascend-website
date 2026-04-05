const https = require('https');
https.get('https://ascend-quiz.vercel.app/assets/index-CxGknqYq.js', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    if (data.includes('embed')) console.log('embed found');
    if (data.includes('hideHeader')) console.log('hideHeader found');
    if (data.includes('hideNav')) console.log('hideNav found');
    if (data.includes('hideLogo')) console.log('hideLogo found');
    if (data.includes('hideClose')) console.log('hideClose found');
  });
});
