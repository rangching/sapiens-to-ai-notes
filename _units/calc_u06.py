"""EP6 練習題答案計算（python3 calc_u06.py）"""
import math

# Q1 預測編碼的自由能代理量 F = ||e||^2 + lambda ||r||^2
x = [1.0, 1.0, 0.0, 0.0]
pred = [0.8, 0.9, 0.1, 0.0]
r = [1.0, 0.5]
lam = 0.1
e = [a - b for a, b in zip(x, pred)]
ee = sum(v * v for v in e)
F = ee + lam * sum(v * v for v in r)
print(f"Q1 F = {F:.4f}（||e||^2={ee:.4f}）")

# Q2 5 個特徵在 2 維排成正五邊形，相鄰方向的餘弦（干擾大小）
print(f"Q2 cos72° = {math.cos(math.radians(72)):.4f}")

# Q3 稀疏度 S=0.9：每個特徵出現機率 0.1，5 個特徵中同時出現 2 個以上的機率
p, n = 0.1, 5
p_ge2 = 1 - (1 - p) ** n - n * p * (1 - p) ** (n - 1)
print(f"Q3 P(>=2) = {p_ge2:.4f}")

# Q4 峰終法則：長版疼痛評分 [8,8,8,6]，峰終分數 = (峰 + 終)/2；總痛苦對照
short, long_ = [8, 8, 8], [8, 8, 8, 6]
pe = lambda s: (max(s) + s[-1]) / 2
print(f"Q4 長版峰終 = {pe(long_):.2f}（短版 {pe(short):.2f}；總和 {sum(short)} vs {sum(long_)}）")
