const userInput = document.getElementById("user-input");
const result = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const countryCodeRegex = /(?:^|\s)1(?:\s)(?:\s|-|()(\d\d\d)(?:\s|)|-)(?:\s)(\d\d\d)(?:\s|)|-)(?:\s)(\d\d\d\d)(?:$|\s)/;
const nromalNumberRegex = /(?:^|\s|()(\d\d\d)(?:\s|)|-)(?:\s)(\d\d\d)(?:\s|)|-)(?:\s)(\d\d\d\d)(?:$|\s)/

const regexs = [countryCodeRegex, nromalNumberRegex];

