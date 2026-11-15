"""EP3 練習題答案。
Q1 以物易物：n 種商品兩兩比價的組數 C(n,2)
Q2 Nowak & Sigmund (1998) 間接互惠：觀察機率門檻 q* = c/b
Q3 Traulsen & Nowak (2006) 多層選擇：b/c 門檻 = 1 + n/m
Q4 Mae Enga 氏族每世代約 18% 消亡（Soltis 等資料，Turchin 轉述）：連續 5 世代存活機率"""
from math import comb
print("Q0 檢查 C(100,2) =", comb(100, 2), "(書中 4,950)")
print("Q1 C(1000,2) =", comb(1000, 2))
b, c = 0.6, 0.15
print("Q2 q* = c/b =", round(c / b, 4))
n, m = 10, 20
print("Q3 1 + n/m =", 1 + n / m)
print("Q4 0.82^5 =", round(0.82 ** 5, 4))
