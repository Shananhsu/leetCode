// 編寫一個函數來尋找字串陣列中最長的公共前綴字串。

// 如果沒有公共前綴，則傳回空字串""。



// 範例1：

// 輸入： strs = ["flower","flow","flight"]
// 輸出： "fl"
// 範例2：

// 輸入： strs = ["dog","racecar","car"]
// 輸出： ""
// 解釋：輸入字串之間沒有公共前綴。


// 限制條件：

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i]僅由小寫英文字母組成。

const strs = ["flower", "flow", "flight"];
// const strs = [];

function longestCommonPrefix(strs) {
	console.log(strs);
	if (strs === null || strs.length === 0 || strs === undefined) return console.log("輸入字串陣列為空");
	//做一個回圈 我只想打印出 flower
	for (let i = 0; i < strs[0].length; ++i) {
		let char = strs[0][i]
		for (let j = 0; j < strs.length; ++j) {
			console.log(strs[j][i]);
			if (strs[j][i] !== char) return console.log(strs[0].slice(0, i));
		}
	}
};
longestCommonPrefix(strs);