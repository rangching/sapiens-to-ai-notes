"""EP7 練習題答案計算（只用 Python 標準函式庫）。

執行：python3 calc_u07.py
每題同時給「精確計算」與「蒙地卡羅驗證」，兩者一致才填進 u07.js。
"""
import random
from itertools import combinations

random.seed(20261116)


# ---------- 題 1：環狀規則網路（Watts–Strogatz 的 p=0 起點）的群聚係數 ----------
def ring_lattice(n, k):
    """n 個節點排成環，每點連左右各 k/2 個最近鄰居。"""
    adj = {i: set() for i in range(n)}
    for i in range(n):
        for j in range(1, k // 2 + 1):
            a, b = i, (i + j) % n
            adj[a].add(b)
            adj[b].add(a)
    return adj


def clustering(adj, i):
    nb = list(adj[i])
    k = len(nb)
    if k < 2:
        return 0.0
    e = sum(1 for a, b in combinations(nb, 2) if b in adj[a])
    return 2 * e / (k * (k - 1))


def avg_clustering(adj):
    return sum(clustering(adj, i) for i in adj) / len(adj)


def avg_shortest_path(adj):
    from collections import deque
    n = len(adj)
    tot = 0
    for s in adj:
        dist = {s: 0}
        q = deque([s])
        while q:
            u = q.popleft()
            for v in adj[u]:
                if v not in dist:
                    dist[v] = dist[u] + 1
                    q.append(v)
        tot += sum(dist.values())
    return tot / (n * (n - 1))


N, K = 200, 6
lat = ring_lattice(N, K)
c0 = avg_clustering(lat)
c0_formula = 3 * (K - 2) / (4 * (K - 1))
e_i = sum(1 for a, b in combinations(lat[0], 2) if b in lat[a])
print("題1  環狀網路 N=200, k=6")
print(f"     單一節點：鄰居 {len(lat[0])} 個、鄰居之間實際連線 e_i={e_i}，可能連線 {K*(K-1)//2}")
print(f"     C(0) 逐點計算 = {c0:.4f}；公式 3(k-2)/(4(k-1)) = {c0_formula:.4f}")
print(f"     （參考）平均最短路徑 L(0) = {avg_shortest_path(lat):.4f}")

# ---------- 題 2：獨立瀑布，一座城市有 m 個「剛點燃」的鄰居 ----------
p2, m2 = 0.2, 3
exact2 = 1 - (1 - p2) ** m2
trials = 200_000
mc2 = sum(any(random.random() < p2 for _ in range(m2)) for _ in range(trials)) / trials
print("\n題2  獨立瀑布：p=0.2，3 個鄰居同時點燃")
print(f"     1-(1-p)^m = {exact2:.4f}；蒙地卡羅 {mc2:.4f}")

# ---------- 題 3：樹狀城市網的期望觸及數 ----------
# 起點印刷城市 → 4 個鄰城；每個鄰城再各連 3 個只和它相連的外圍城市；p=0.25
p3, d1, d2 = 0.25, 4, 3
exact3 = d1 * p3 + d1 * d2 * p3 ** 2
cnt = 0
for _ in range(trials):
    for _ in range(d1):
        if random.random() < p3:
            cnt += 1
            cnt += sum(random.random() < p3 for _ in range(d2))
mc3 = cnt / trials
print("\n題3  樹狀城市網：起點連 4 城、每城再連 3 城，p=0.25")
print(f"     期望點燃城市數（不含起點）= 4p + 12p^2 = {exact3:.4f}；蒙地卡羅 {mc3:.4f}")


# ---------- 題 4：Bikhchandani–Hirshleifer–Welch 資訊瀑布 ----------
# 真實答案 A；私人訊號正確率 q。規則：前人行動能推回訊號時算進「公開票差」d（A 為 +1）；
# 自己的訊號＋公開票差 > 0 選 A、< 0 選 B、= 0 時跟自己的訊號。|d| 到 2 後，
# 任何私人訊號都翻不過來，瀑布鎖定。
def wrong_cascade_exact(q, n_agents=100):
    # 動態規劃：d ∈ {-1,0,1} 為尚未鎖定狀態
    probs = {0: 1.0}
    wrong = right = 0.0
    for _ in range(n_agents):
        new = {}
        for d, pr in probs.items():
            for step, ps in ((1, q), (-1, 1 - q)):
                nd = d + step
                if nd >= 2:
                    right += pr * ps
                elif nd <= -2:
                    wrong += pr * ps
                else:
                    new[nd] = new.get(nd, 0) + pr * ps
        probs = new
    return wrong, right, sum(probs.values())


def wrong_cascade_mc(q, n_agents=100, reps=200_000):
    w = 0
    for _ in range(reps):
        d = 0
        for _ in range(n_agents):
            sig = 1 if random.random() < q else -1
            if d >= 2 or d <= -2:
                break  # 已鎖定，之後的人都跟著
            score = d + sig
            act = 1 if score > 0 else (-1 if score < 0 else sig)
            d += act  # 未鎖定時行動等於訊號，可被推回
        if d <= -2:
            w += 1
    return w / reps


q4 = 0.7
w, r, u = wrong_cascade_exact(q4)
closed = (1 - q4) ** 2 / (q4 ** 2 + (1 - q4) ** 2)
mc4 = wrong_cascade_mc(q4)
print("\n題4  資訊瀑布：100 人、q=0.7")
print(f"     錯誤瀑布機率：動態規劃 {w*100:.3f}%；封閉式 (1-q)^2/(q^2+(1-q)^2) = {closed*100:.3f}%；蒙地卡羅 {mc4*100:.3f}%")
print(f"     （正確瀑布 {r*100:.3f}%，100 人後仍未鎖定 {u:.2e}）")
w6, _, _ = wrong_cascade_exact(0.6)
print(f"     （參考）q=0.6 時錯誤瀑布機率 {w6*100:.3f}%")

print("\n=== 填入 u07.js 的答案 ===")
print(f"1: {c0:.4f}")
print(f"2: {exact2:.4f}")
print(f"3: {exact3:.4f}")
print(f"4: {w*100:.2f}")
