import * as express from 'express';
import * as sqip from 'sqip';
import * as fs from 'fs';
import * as request from 'request';



const app = express();


async function download(url: string, filename: string, callback: (...args: any[]) => any) {
  request.head(url, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(url).pipe(fs.createWriteStream(filename)).on('close', callback)
  });
};


let counter = 0;
app.get('/', async (req, res) => {
  console.log(req.query)
  if (req.query.imageUrl) {
    let currentCount = counter;
    const fileName = 'image-' + currentCount + '.png'
    await download(req.query.imageUrl, fileName, () => {
      console.log('Downloaded image')
      const result = sqip({
        filename: './' + fileName,
        numberOfPrimitives: 80,

      })

      fs.unlink(fileName, () => {
        console.log('Done!')
      })
      counter++
      res.send(result.final_svg)
    })
    // const image = await fetch(req.query.imageUrl);
    // res.send(image)
  } else {
    res.send(500)
  }
})
app.listen(3000, () => console.log('Server running on port 3000'))