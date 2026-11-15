"""EP9 練習題答案計算（python3 calc_u09.py）"""
import math

# 小節時間軸（研究檔建議時長，分鐘 -> 秒累加）
dur = [1.2, 1.5, 1.5, 1.75, 1.75, 1.75, 1.75, 2.8]
t, acc = [], 0.0
for d in dur:
    t.append(round(acc)); acc += d * 60
print("sections t =", t, " total =", acc, "s")

# 題 1：3 個字的縮放點積注意力 softmax 權重
# 「牠」的查詢向量 q 與「貓」「爬上」「樹」的鍵向量內積 = 4, 2, 0；d_k = 4
dots = [4.0, 2.0, 0.0]
dk = 4
s = [x / math.sqrt(dk) for x in dots]
e = [math.exp(x) for x in s]
w = [x / sum(e) for x in e]
print("Q1 scaled scores =", s, " weights =", [round(x, 4) for x in w], " sum =", sum(w))
print("Q1 answer (weight on 貓) =", round(w[0], 3))

# 題 2：Q-learning 單步更新（α = 0.1、γ = 0.99，取自 S2 參數）
alpha, gamma = 0.1, 0.99
Q, r, maxQnext = 2.0, 1.0, 3.0
Qnew = Q + alpha * (r + gamma * maxQnext - Q)
print("Q2 TD target =", r + gamma * maxQnext, " Q_new =", round(Qnew, 4))

# 題 3：SimpleQA，答對 +1、答錯 -1、不答 0，每 100 題總分
def score(abstain, err):
    acc_ = 100 - abstain - err
    return acc_ - err, acc_
s_mini, a_mini = score(52, 26)   # gpt-5-thinking-mini
s_o4, a_o4 = score(1, 75)        # o4-mini
print("Q3 gpt-5-thinking-mini: acc =", a_mini, " score =", s_mini)
print("Q3 o4-mini: acc =", a_o4, " score =", s_o4)
print("Q3 answer (o4-mini score) =", s_o4)

# 題 4：METR 時間視野粗算：50 分鐘、每 7 個月翻倍，21 個月後
h0, Td, months = 50.0, 7.0, 21.0
h = h0 * 2 ** (months / Td)
print("Q4 horizon after 21 months =", h, "min =", h / 60, "h")
