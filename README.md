

<!-- ABOUT THE PROJECT -->

## About the Project

Automation QA Engineer Assignment - This project is based on Microsoft Playwright which enables reliable testing for modern web apps.

Top Tasks developed:

1. Basic functionalities check on the homepage: verify the presence of the essential
elements.
2. Login functionality: attempt login using incorrect credentials.
3. Destination and date selection: input destination and date details.
4. Offer selection: choose an offer from the search results.
5. Offer page: ensure offer details load correctly

- Patterns used POM, AAA, DRY 

### Built With

- [`Playwright`](https://playwright.dev)
- [`Typescript`](https://www.typescriptlang.org/)
- [`node js`] https://nodejs.org/en

## Getting Started


### Prerequisites

The following software are required:

- nodejs : Download and Install Node JS from
  https://nodejs.org/en/download/
- Install Java 8 or above, Allure Reports require Java 8 or higher.
- Install Java 11 instead of Java 8 if you intend to use Sonar Qube.


### Installation

1. Unpack zip file to the project folder

2. Navigate to folder and install npm packages using:

npm install

3. For first time installation run below command to download required browsers

npx playwright install

4. For MAC and Ubuntu OS before running please exexute below code as per your environment qa|dev

export npm_config_ENV="qa"


<!-- USAGE EXAMPLES-->

## Usage

1. For Browser Configuration, change required parameters in `playwright.config.ts`.
2. For execution entire test suite on all available browsers simultaneously execute below command, `Test Cases are present in "tests" folder`:

- run all tests headless `npx playwright test`,
- run all tests headed `npx playwright test --headed`,
- run holiday page tests `npm run test ./tests/holiday.spec.ts`,
- run login page tests `npm run test ./tests/login.spec.ts`,
- run home tests `npm run test ./tests/home.spec.ts`


3. For executing single test case on Chrome browser execute the below command, you can change the browser for execution e.g. if you want to run test cases on Firefox, you can change `--project=Firefox` against `test:single` in `package.json`, just make sure the browser name given matches the name given in `playwright.config.ts`.

4. For HTML Report generation execute below command , single static HTML report(index.html) which can be sent via email is generated in "html-report" folder playwright-report.
5. Screenshots, Videos and Trace files will be generated in test-results folder.
6. To change your username go to `test-data` folder and login.data.ts file and provide value against `loginEmail`, `userPassword`
7. For viewing trace files, go to folder where `trace.zip` is generated and execute :

- npx playwright show-trace trace.zip

