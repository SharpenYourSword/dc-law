# dc-law

Now that the Official DC Code is in beta, here are some utility functions to access the code.

## Installation

`npm install dc-law`

## Usage

```js
    const dclaw = require('dc-law');
    console.log(dclaw.getDCLaw(1, 1));
    // { result: 'https://beta.code.dccouncil.us/dc/council/laws/1-1.html' }

    console.log(dclaw.getDCLaw(1, 1, true));
    // { result: 'https://beta.code.dccouncil.us/dc/council/laws/docs/1-1.pdf' }

    console.log(dclaw.getDCCode(2, 541));
    // { result: 'https://beta.code.dccouncil.us/dc/council/code/sections/2-541.html' }
```

## API

### getDCLaw

This function returns the DC Code url for a title and section.

**Parameters**

-   `councilPeriod` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the Council Period of the Law
-   `lawNo` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the law number of the Law
-   `pdf` **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** flag to to return the pdf

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the url for the Law

### getDCCode

This function returns the DC Code url for a title and section.

**Parameters**

-   `title` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The title of the DC Code
-   `section` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The section of the DC Code

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the url for the section

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

>  This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the CC0 1.0 Universal public domain dedication.
>  All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
