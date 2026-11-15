"""EP1 練習題答案：Henrich (2004) 文化累積模型。
平均技能每代變化  dz = -alpha + beta*(gamma + ln N)
臨界群體大小      N* = exp(alpha/beta - gamma)
參數取自 source/ep01_research.md「可模擬畫面 1」。"""
import math
G = 0.5772156649015329  # 歐拉常數

def dz(N, a, b):
    return -a + b * (G + math.log(N))

def nstar(a, b):
    return math.exp(a / b - G)

print("Q1 N*(alpha=30, beta=15)        =", round(nstar(30, 15), 3))
print("Q2 dz(N=1000, alpha=30, beta=15) =", round(dz(1000, 30, 15), 2))
print("Q3 dz(N=3, alpha=30, beta=15)    =", round(dz(3, 30, 15), 2))
print("Q4 N*(alpha=9, beta=1) 複雜技能  =", round(nstar(9, 1)))
print("   N*(alpha=7, beta=1) 簡單技能  =", round(nstar(7, 1)), "(提示用)")
