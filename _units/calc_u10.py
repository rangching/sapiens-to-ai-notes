"""EP10 練習題答案計算（python3 calc_u10.py）"""
import math

dur = [1.2, 1.5, 1.5, 1.75, 1.75, 1.75, 1.75, 2.8]
t, acc = [], 0.0
for d in dur:
    t.append(round(acc)); acc += d * 60
print("sections t =", t, " total =", acc, "s")

# 題 1：Pol.is 跨群共識 C(c) = ∏_g (1+N_agree)/(2+N)
groupA = (24, 30)   # (同意數, 投票數)
groupB = (15, 20)
pA = (1 + groupA[0]) / (2 + groupA[1])
pB = (1 + groupB[0]) / (2 + groupB[1])
C = pA * pB
print("Q1 P_A =", round(pA, 4), " P_B =", round(pB, 4), " consensus C =", round(C, 4))

# 題 2：DeGroot 加權平均一輪更新 x' = α·x + (1-α)·鄰居平均
x, nb, a = 160.0, 110.0, 0.2
xn = a * x + (1 - a) * nb
print("Q2 new estimate =", xn)

# 題 3：提取練習 g = 0.499 換算成百分位（常態假設，Φ(g)）
g = 0.499
phi = 0.5 * (1 + math.erf(g / math.sqrt(2)))
print("Q3 Phi(0.499) =", round(phi, 4), " -> percentile =", round(phi * 100, 1))

# 題 4：對齊大會漏斗：20 萬封簡訊 -> 1,760 份有效回覆 -> 447 人
inv, resp, final = 200_000, 1_760, 447
print("Q4 response rate =", resp / inv * 100, "%")
print("    final / resp =", round(final / resp * 100, 2), "%  final / inv =", round(final / inv * 100, 4), "%")
