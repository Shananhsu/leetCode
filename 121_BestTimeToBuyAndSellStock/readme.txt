121. Best Time to Buy and Sell Stock
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

在一個陣列中 找到相減的最大值
只可以後面的減前面的,不可以前面的減後面的
如果後面的減去前面的都是負數,就回傳0

1.預設最小值是陣列中的第一個
2.宣告一個獲利的變數 一開始預設是0
3.如果迴圈的值小於目前最小值,就存入目前最小值的最變數,
  如果已經是最小值,
  如果目前迴圈的值減去最小值是否大於目前獲利
  如果大於就去改變獲利值的變數,並且 return