# base64-raw-loader

Webpack loader that imports the raw text content of a file as a base-64 encoded string.

https://www.npmjs.com/package/base64-raw-loader

Simple inline usage:

```javascript

import templateContent from 'base64-raw-loader!./template.html';

// export it as a simple string
export { templateContent }

// or use it in code
console.log('encoded:', templateContent);
console.log('decoded:', atob(templateContent));

```
