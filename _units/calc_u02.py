"""EP2 練習題答案。
Q1 Fisher-KPP 前鋒速度 v = 2*sqrt(a*D)（source/ep02_research.md 模擬 1 參數）
Q2 田螺山不落粒比例 0.27 -> 0.39（約 300 年，一年一代），選擇係數 s = logit 差 / 代數
Q3 以同一 s，p 從 0.39 到 0.99 需要幾年
Q4 馬爾薩斯模型 y = A (X/L)^alpha：A 提高 20%，回到維生所得時人口變為幾倍"""
import math
logit = lambda p: math.log(p / (1 - p))

a, D = 0.03, 8.3
v = 2 * math.sqrt(a * D)
print("Q1 v = 2*sqrt(0.03*8.3) =", round(v, 3), "km/yr")

dl = logit(0.39) - logit(0.27)
s = dl / 300
print("   logit 差 =", round(dl, 4))
print("Q2 s =", round(s, 6), "/代")

T = (logit(0.99) - logit(0.39)) / s
print("Q3 p:0.39->0.99 年數 =", round(T))

alpha = 0.6
print("Q4 L 倍數 = 1.2^(1/alpha) =", round(1.2 ** (1 / alpha), 4))
