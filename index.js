/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import * as fs from 'fs';

inquirer
  .prompt([
    {   name: 'url',
        message: 'What is the Website URL',
        default: 'https://www.google.com/'
  }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    var qr_png = qr.image(answers.url, {type: 'png'});
    qr_png.pipe(fs.createWriteStream('qr_image.png'));
    
    console.log("The URL is " + answers.url);


    fs.writeFile('myfile.txt', answers.url, { flag: 'w' }, function(err) {
        if (err) 
            return console.error(err); 
            // read
        fs.readFile('myfile.txt', 'utf-8', function (err, data) {
            if (err)
                return console.error(err);
            console.log(data);
        });
    });


  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log("Environment Error");
    } else {
      // Something else went wrong
      console.log("Some other error");
    }
  });