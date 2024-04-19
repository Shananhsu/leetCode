// https://leetcode.com/problems/score-of-a-string/description/

var scoreOfString = function (s) {
    let ans = 0;
    for (let i = 1; i < s.length; i++) {
        ans = ans + Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1));
    }
    return ans;
};

scoreOfString("hello")