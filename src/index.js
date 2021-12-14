import express from 'express';

const PORT = process.env.PORT || 8080;
const app = express();

app.use(
  express.json({
    limit: '50mb'
  })
);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Battery Smart API'
  });
});

app.listen(PORT, () =>
  console.log(
    'Expresssdf ssfsdfedsfdsfrver is running on psfdsdfdsfsdfsdfsdfsdfdsfsdfort',
    PORT
  )
);
