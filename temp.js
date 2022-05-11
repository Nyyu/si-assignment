const axios = require("axios");

const baseUrl = "https://adslindo.tk";
const baseLogin = "20200017927";

let startingValue = "57365";
const baseLength = "00000";
let diffAdj = startingValue;

axios({
    method: "post",
    url: baseUrl + "/login",
    data: {
        usuario: baseLogin,
        senha: startingValue,
    },
})
    .then((resp) => {
        console.log(`${resp.status} | Found: ${diffAdj}`);
    })
    .catch((err) => {
        if (err) console.error(`nop ->  ${err.response.status} | ${diffAdj}`);
    });
