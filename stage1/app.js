const express = require('express');
const app = express();
const port = 3000;



app.use(express.json());

app.get('/api', (req, res) => {
const currentDate = new Date();
const currentDayOfWeek = currentDate.getUTCDay();
const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const currentDayByName = daysOfWeek[currentDayOfWeek];

const utcTimeFormatted = currentDate.toISOString();
const formattedUTC = utcTimeFormatted.substring(0, 19) + 'Z';


  const { slack_name, track } = req.query;

  const response = {
    slack_name: slack_name,
    current_day: currentDayByName,
    utc_time: formattedUTC,
    track: track,
    github_file_url:
      'https://github.com/Ellajessica/hngix/blob/main/stage1/app.js',
    github_repo_url: 'https://github.com/Ellajessica/hngix/tree/main/stage1',
    status_code: 200,
  };

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
  res.setHeader('Content-Type', 'application/json');

  res.status(200).json(response);
});

app.use((req, res) => {
  res.status(400).send('Sorry, content not found');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
