"""EP5 練習題答案計算（python3 calc_u05.py）"""

# Q1 燈號與果汁相隔 10 步、gamma=0.98，學會後燈號時刻的預測價值 gamma^10 * 1
gamma = 0.98
print(f"Q1 V(燈號) = {gamma**10:.4f}")

# Q2 單次 TD(0) 更新：V=0.6, r=1, gamma=0.98, V_next=0, alpha=0.1
V, r, Vn, alpha = 0.6, 1.0, 0.0, 0.1
delta = r + gamma * Vn - V
print(f"Q2 delta = {delta:.4f}, 更新後 V = {V + alpha*delta:.4f}")

# Q3 預期更新 E <- E + eta (R - E)，eta=0.2；獎賞由 1.0 跳到 3.0，5 期後的落差
eta, E, R = 0.2, 1.0, 3.0
for _ in range(5):
    E += eta * (R - E)
print(f"Q3 5 期後落差 R-E = {R - E:.4f}（閉式 {2*0.8**5:.4f}）")

# Q4 Rutledge 模型的衰減權重：3 回合前的預測誤差，權重為本回合的 gamma^3，gamma=0.6
print(f"Q4 相對權重 = {0.6**3:.4f}")
