'use strict';

module.exports = function (content) {
    this.cacheable();
    let text = content.toString();
    if (text.charCodeAt(0) === 0xFEFF) { text = text.substr(1); } // remove utf8 byte order mark
    const b64 = Buffer.from(text).toString('base64'); // convert to base64
    return `export default "${b64}"`; // es6 module default export
};

module.exports.raw = true;
