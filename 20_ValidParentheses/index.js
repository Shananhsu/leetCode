let s = "()[]{}";

isValid(s);

function isValid(s) {
    let arr = [];
    let arrPop = "";
    for (let i = 0; i < s.length; ++i) {
        arr.push(s[i]);
    };

    for (let j = 0; j < s.length; ++j) {
        arrPop = arr.pop();
        // console.log(arrPop);
        if (arrPop === "}") {
            console.log(arr.find((item) => console.log(item === "{")));
            if (arr.find((item) => item === "{")) {

            }
        }
    }
};