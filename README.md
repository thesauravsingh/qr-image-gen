# qr-image-gen
# QR Code Generator

This Node.js script prompts the user to input a website URL and generates a QR code image based on the entered URL using the `inquirer` and `qr-image` npm packages. Additionally, it saves the user input into a text file using the native `fs` module.

## Prerequisites
- Node.js installed on your machine

## Installation
1. Clone this repository to your local machine.
2. Navigate to the directory where you cloned the repository.
3. Install the required npm packages by running the following command:
    ```
    npm install
    ```

## Usage
1. Run the script by executing the following command:
    ```
    node index.js
    ```
2. You will be prompted to enter a website URL.
3. After entering the URL, a QR code image will be generated and saved as `qr_image.png`.
4. The entered URL will be saved in a text file named `myfile.txt`.

## Dependencies
- [inquirer](https://www.npmjs.com/package/inquirer): For prompting user input.
- [qr-image](https://www.npmjs.com/package/qr-image): For generating QR code images.
- [fs](https://nodejs.org/api/fs.html): Node.js native module for file system operations.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
