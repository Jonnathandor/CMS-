# CMS-

## GOAL

Build a system that allows a user to build a personal website with a landing page that displays the information of the user and an admin that allows the user to create, read, update and delete information about the website.
User Stories

## Home Page

- Scenario: A user visits the Home Page.

  - Given: a user with the Home Page URL.
  - When: the user loads the Home Page.
  - Then: a website with: Nav Bar(with a Logo, and 3 menu items), Intro, Projects, and Footer sections is loaded.

- Scenario: A user clicks the logo in the navigation bar.

  - Given: a fully loaded home page
  - When: a user clicks the logo inside the nav bar
  - Then: the Home Page scrolls to the top of page

- Scenario: A user clicks any of the menu items.

  - Given: a fully loaded Home Page
  - When: a user clicks a menu item
  - Then: the Home Page scrolls to the section

- Scenario: A user scrolls down in the Home Page.

  - Given: a fully loaded Home Page
  - When: a user scrolls down in the Home Page
  - Then: the nav bar should remained fixed to the top of the page

- Scenario: A user visits the intro section.

  - Given: a fully loaded Home Page
  - When: the user scrolls to the intro section
  - When: the user clicks the home menu item
  - Then: a section with a title, description, contact info, and a personal picture are displayed.

- Scenario: A user visits the project list section

  - Given: a fully loaded page
  - When: a user scrolls to the projects section
  - When: the user clicks the projects menu item
  - Then: a section that contains a project header and list of all the projects is displayed.

- Scenario: A user visits the form section

  - Given: a fully loaded page
  - When: a user scrolls to the form section
  - When: a user clicks the contact menu item
  - Then: a section that contains a title and a contact form(name, email, message input fields and a submit button) are displayed

- Scenario: A user scrolls down to the bottom of the Home Page
  - Given: a fully loaded page
  - When: a user scrolls down to the bottom of the Home Page
  - Then: a footer with a logo and contact icons are displayed.

## Admin

- Scenario: A user visits the Login Page.

  - Given: a user with the Login Page URL.
  - When: the user loads the Login Page
  - Then: a page with a login form (email input field, password input field, Login button and a Forgot Password link) is loaded.

- Scenario: A user visits the Login Page and clicks the Forgot Password link

  - Given: a user with the Login Page URL.
  - When: the user loads the Login page
  - And: clicks the Forgot Password link
  - Then: a page with a reset form(instructions email input field and a submit button) is displayed.

- Scenario: A user loads the Forgot Password page and enters and incorrect email

  - Given: a fully loaded Forgot Password page
  - When: the user enters an invalid input
  - Then: the page returns an error message

- Scenario: A user loads the Forgot Password page and enters and correct email

  - Given: a fully loaded Forgot Password page
  - When: the user enters a valid input
  - Then: the page sends a reset link to the user email

- Scenario: A user receives a reset password link in their email

  - Given: a user received a reset password email containing a reset password link
  - When: the user clicks the reset password link
  - Then: a page with a password reset form is loaded

- Scenario: A user enters an invalid password in the Reset Password page

  - Given: a fully loaded Reset Password Page
  - When: the user enters an invalid password
  - And: clicks the submit button
  - Then: the app runs password validation
  - And: the app displays the error message returned by the password validation function.

- Scenario: A user enters a valid password in the Reset Password page

  - Given: a fully loaded Reset Password Page
  - When: the user enters a valid password
  - And: clicks the submit button
  - Then: the app runs the password validation function
  - And: redirects the user to the login app

- Scenario: A user visits the Login Page and enters invalid credentials.

  - Given: a fully loaded Login page
  - When: the user enters invalid credentials in the form
  - And: clicks the Login button
  - Then: the app runs the authentication process
  - And: the app displays the error message returned by the authentication process.

- Scenario: A user visits the Login Page and enters valid credentials.

  - Given: a fully loaded page
  - When: the user enters valid credentials in the form
  - And: clicks the Login button
  - Then: The website loads the dashboard.

- Scenario: An authenticated user visits the dashboard page

  - Given: a user with a dashboard page URL
  - And: an authenticated user
  - When: the user loads the dashboard page
  - Then: A web page with a Nav Bar(with a Logo and 2 Menu Items)
  - And: a Personal data section
  - And: a list with at most three Projects is displayed.

- Scenario: An authenticated user visits a restricted page and clicks the “Profile” Menu Item

  - Given: an authenticated user
  - And: a fully loaded restricted page
  - When: the user clicks the “Profile” Menu Item
  - Then: the Profile page loads
  - And: displays the user’s personal data and an edit button.

- Scenario: A user clicks the edit button inside the Profile page

  - Given: an authenticated user
  - And: a fully loaded Profile Page
  - When: the user clicks the edit button
  - Then: a page with editable user data, a save button and a cancel button are loaded.

- Scenario: A user is editing their personal data and clicks the save button

  - Given: an authenticated user
  - And: a fully loaded editable Profile page
  - When: the user clicks the “Save” button
  - Then: the app runs a fields validation
  - And: if data is valid, save data
  - And: the page displays a result message (success or error message)

- Scenario: A user is editing their personal data and clicks the cancel button.

  - Given an authenticated user
  - And: a fully loaded editable Profile page
  - When: the user clicks the cancel button
  - Then: no changes are done to the personal data
  - And: the non-editable Profile page is displayed

- Scenario: A user loads the dashboard and clicks the “Projects” Menu Item

  - Given: an authenticated user
  - And: a fully loaded page
  - When: the user clicks the “Projects” Menu Item
  - Then: the “Projects” Page loads
  - And: a list of five projects loads (each project section has: title field, description field, repo link, image link, edit and delete button).

- Scenario: A user clicks the edit button of a project

  - Given: an authenticated user
  - And: a fully loaded Projects page
  - When: the user clicks the edit button of a project
  - Then: a page with editable project data, a save button and a cancel button are loaded.

- Scenario: A user is editing a project’s data and clicks the save button.

  - Given: an authenticated user
  - And: a fully loaded editable Projects page
  - When: the user clicks the “Save” button
  - Then: the app runs a fields validation
  - And: if data is valid, save data
  - And: the page displays a result message (success or error message)

- Scenario: A user is editing their Project’s data and clicks the cancel button.
  - Given an authenticated user
  - And: a fully loaded editable Projects page
  - When: the user clicks the cancel button
  - Then: no changes are done to the project data
  - And: the non-editable Projects page is displayed

Diagrams

Business Requirements
Allow a user to manage a home page via an admin app so they can perform CRUD operations.

Technical Requirements
Home Page

- Use React and Typescript

API

- Uses Laravel

Admin

- Use React and Typescript
