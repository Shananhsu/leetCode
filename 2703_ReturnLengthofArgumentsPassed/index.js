// https://leetcode.com/problems/return-length-of-arguments-passed/description/

// const args = [{}, null, "3"]

var argumentsLength = function (...args) {
    return args.length;
};

// argumentsLength(...args)