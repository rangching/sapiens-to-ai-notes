"""EP8 練習題答案計算（只用 Python 標準函式庫）。

執行：python3 calc_u08.py
"""
import math
import random

random.seed(20261116)

# ---------- 題 1：矩陣分解的預測分數（Koren 等 2009 的核心概念） ----------
# 兩個隱藏口味座標：（偏動作, 偏文藝）
p_u = (0.8, 0.3)       # 使用者
q_a = (0.9, 0.1)       # 影片甲
q_b = (0.2, 0.9)       # 影片乙
dot = lambda x, y: sum(a * b for a, b in zip(x, y))
s_a, s_b = dot(p_u, q_a), dot(p_u, q_b)
print("題1  矩陣分解：p_u=(0.8,0.3)")
print(f"     影片甲 q=(0.9,0.1) 預測分數 = {s_a:.4f}；影片乙 q=(0.2,0.9) = {s_b:.4f}")

# ---------- 題 2：每次曝光的預期觀看時間（Covington 等 2016 的排序目標） ----------
ctr_a, watch_a = 0.10, 2.0   # 甲：點擊率 10%、點了平均看 2 分鐘
ctr_b, watch_b = 0.04, 8.0   # 乙：點擊率 4%、點了平均看 8 分鐘
ew_a, ew_b = ctr_a * watch_a, ctr_b * watch_b
print("\n題2  每次曝光預期觀看時間")
print(f"     甲 = {ew_a:.4f} 分鐘；乙 = {ew_b:.4f} 分鐘 → 依點擊率排甲第一、依預期觀看時間排乙第一")

# ---------- 題 3：Rathje 等 2021：每多一個「對手陣營」詞，分享勝算約 ×1.67 ----------
p0, OR, words = 0.02, 1.67, 2
odds0 = p0 / (1 - p0)
odds = odds0 * OR ** words
p_new = odds / (1 + odds)
print("\n題3  基準分享機率 2%，多 2 個對手詞")
print(f"     勝算 {odds0:.5f} × 1.67^2({OR**words:.4f}) = {odds:.5f} → 機率 {p_new*100:.3f}%")

# ---------- 題 4：Deffuant 有界信任模型的連續三次相遇 ----------
d, mu = 0.25, 0.3


def meet(x, y):
    if abs(x - y) < d:
        return x + mu * (y - x), y + mu * (x - y)
    return x, y


a, b, c = 0.30, 0.50, 0.90
log = [(a, b, c)]
a, b = meet(a, b); log.append((a, b, c))   # 甲乙相遇
b, c = meet(b, c); log.append((a, b, c))   # 乙丙相遇（差距 > d，不動）
a, b = meet(a, b); log.append((a, b, c))   # 甲乙再相遇
print("\n題4  Deffuant：d=0.25、μ=0.3；甲0.30 乙0.50 丙0.90")
for i, s in enumerate(log):
    print(f"     第{i}步：甲 {s[0]:.4f}  乙 {s[1]:.4f}  丙 {s[2]:.4f}")


# ---------- 參考：Deffuant 模擬 N=1000、μ=0.5、2×10^5 次互動的群數 ----------
def deffuant_clusters(dth, n=1000, mu_=0.5, steps=200_000, seed=1, gap=0.02, min_size=10):
    rng = random.Random(seed)
    x = [rng.random() for _ in range(n)]
    for _ in range(steps):
        i, j = rng.randrange(n), rng.randrange(n)
        if i != j and abs(x[i] - x[j]) < dth:
            xi, xj = x[i], x[j]
            x[i] = xi + mu_ * (xj - xi)
            x[j] = xj + mu_ * (xi - xj)
    xs = sorted(x)
    groups, cur = [], [xs[0]]
    for v in xs[1:]:
        if v - cur[-1] > gap:
            groups.append(cur); cur = [v]
        else:
            cur.append(v)
    groups.append(cur)
    big = [g for g in groups if len(g) >= min_size]
    return len(big), [round(sum(g) / len(g), 3) for g in big]


print("\n（參考）Deffuant 模擬群數（≥10 人的群）")
for dth in (0.4, 0.25, 0.15, 0.1):
    res = [deffuant_clusters(dth, seed=s)[0] for s in range(1, 6)]
    print(f"     d={dth}: 5 個種子的群數 {res}；種子1 群中心 {deffuant_clusters(dth, seed=1)[1]}")

print("\n=== 填入 u08.js 的答案 ===")
print(f"1: {s_a:.4f}")
print(f"2: {ew_b:.4f}")
print(f"3: {p_new*100:.3f}")
print(f"4: {log[-1][0]:.4f}")
