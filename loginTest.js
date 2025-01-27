const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'

(async () => {
    // Launch the browser
    const browser = await chromium.launch({ headless: false }); // Set headless to false to see the browser
    const page = await browser.newPage();

    // Navigate to Lloyds Bank Login Page
    await page.goto('https://online.lloydsbank.co.uk/personal/logon/login.jsp');

    // Wait for the login form to load
    await page.waitForSelector('#frmLogin\\:strCustomerLogin_userID'); // The username field

    // Enter the username and password (Replace 'your-username' and 'your-password' with your actual login credentials)
    await page.fill('#frmLogin\\:strCustomerLogin_userID', 'your-username');  // User ID
    await page.fill('#frmLogin\\:strCustomerLogin_password', 'your-password');  // Password

    // Click on the 'Login' button
    await page.click('button[name="frmLogin:btnSubmit"]'); // The login button (Make sure this is correct)

    // Wait for navigation (successful login)
    await page.waitForNavigation();

    // Optionally, check if login is successful
    const loggedIn = await page.url();
    console.log('Logged in, current URL:', loggedIn);

    // Close the browser
    await browser.close();
})();
