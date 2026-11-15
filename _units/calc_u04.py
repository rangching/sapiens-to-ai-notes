"""EP4 練習題答案計算（python3 calc_u04.py）"""
import math

# Q1 Maddison 2023：1820→2020 全球人均 GDP 成長約 1271%，換算年均複合成長率
mult = 1 + 12.71
cagr = mult ** (1 / 200) - 1
print(f"Q1 年均成長率 = {cagr*100:.3f} %")

# Q2 Arthur 鎖定邊界 (a_R - b_R)/r，改用 r = 0.004
a_R, b_R, r = 1.0, 0.8, 0.004
print(f"Q2 鎖定邊界 |n_A-n_B| = {(a_R - b_R) / r:.1f}")
# 對照研究檔原參數 r=0.01 → 20
assert abs((1.0 - 0.8) / 0.01 - 20) < 1e-9

# Q3 半內生成長穩態 g = lambda*n/beta，n 改為 3%
lam, n, beta = 1.0, 0.03, 2.0
print(f"Q3 穩態成長率 g = {lam*n/beta*100:.3f} %")

# Q4 研究人員每年增加 4%（年複利），幾年後變成 18 倍（Bloom 等：摩爾定律所需研究人員為 1970 年代初的 18 倍以上）
yrs = math.log(18) / math.log(1.04)
print(f"Q4 年數 = {yrs:.2f}")
