# Project Name: Cowin Vaccine Availability Checker

## Overview

The Cowin Vaccine Availability Checker is a web application that provides information about the latest COVID-19 vaccination slots across India. Specifically, users are provided with nearby centers distributing vaccines.

## Features
- Provides information about COVID-19 vaccination slots in India.
- Name of vaccination is provided.
- Key Features:
  - No more OTP needed to book a slot.
  - Available slots can be checked in advance and booked via the Aarogya Setu App.
  - Slot availability can be checked for districts of India or postal codes.
  - Details about whether vaccines are free or paid are provided.
  - Display of the global COVID-19 situation.
  - Map available in desktop version (exact coordinates may be incorrect).
  
## What's Next
- Users will soon have the option to set notification alerts for real-time slot availability.

### Usage Instructions
- Select a search option from the following:
  - Searching by district and date: select a state and district, then select a date from the date picker.
  - Searching by pin code and date:, enter a pin code (6 digits) and select a date from the date picker.
- Available vaccination slots for the next 7 days will be displayed based on the options selected.

## Dependencies
- ReactJS: React was used to build the user interface.
- MaterialUI: MaterialUI was used for UI elements and styling.
- StyledComponents: StyledComponents was used to style React components
- Date-fns: The date-fns library was used for manipulating JavaScript dates.
- PropTypes: PropTypes was used for prop type checking to prevent bugs.

Note that the fetch API was used to make network requests to the CoWIN API to access Covid-19 information.

## Contributions
- Issues:
  - Ensure there are no duplicate issues (check Issues tab) and give details about the issue and how to reproduce it
  - Title should be [TYPE] <description>, with TYPE being ci/cd, fix, build, docs, or feat
- Branches:
  - Use this format: [TYPE]/issue-[issue number]
- Environment Variables
  - Create a Mapbox account and copy the access token
  - To add REACT_APP_MAPBOX_ACCESS_TOKEN, do not delete the .env.example and instead make a copy then paste into the root directory (rename it to .env)

## Installation and Usage

Locally running the application:

1. In local terminal, `cd` to the path where you want to clone the repository. 
2. Use `git clone https://github.com/stephin007/Cowin-Vaccine-Availablity-Checker` to clone the repository and `cd` to the chosen path for the clone.
3. Install dependencies with `npm install`
4. Use `npm start` to run the development server.
5. `http://localhost:3000` in your web browser is where the application will be accessible.

For installation on a mobile device, refer to https://medium.com/progressivewebapps/how-to-install-a-pwa-to-your-device-68a8d37fadc1

## License

This project is open source and available under the [MIT](LICENSE) license. Please refer to the license file for more details.

Copyright (c) 2021 Stephin Reji

## Contact

For any questions about Cowin Vaccine Availability Checker, you may contact Stephin Reji through email at stephinreji123@gmail.com.
