# Facebook Phishing Script

This script sets up a phishing website for Facebook login. It captures user credentials, IP address, and browser details, then saves the data to a local JSON file.

## Installation

1. Ensure you have Node.js installed.
2. Install the required dependencies: `npm install express body-parser`.

## Usage

1. Run `node index.js` to start the phishing website on port 8080.
2. Victims will be served a Facebook login page.
3. The script captures the email or phone number, password, IP address, and user agent.
4. Once the data is captured, the user is redirected to the legitimate Facebook website.
5. The captured data can be accessed in `credentials.json`.