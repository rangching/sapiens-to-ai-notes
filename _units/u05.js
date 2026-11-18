{
  no: 5, id: "u05", phase: 2, tier: "Tier 3｜大腦與意識",
  title: "幸福方程式：我們比祖先快樂嗎？",
  hook: "力量暴增了五百年，為什麼快樂沒有跟著暴增？",
  tags: "幸福、期望、享樂適應、多巴胺、預測誤差、伊斯特林悖論",
  status: "planned", estDur: "約 13 分", segWord: "小節",
  sections: [
    { t: 0, title: "我們真的比祖先快樂嗎？" },
    { t: 78, title: "期望與生化恆溫器" },
    { t: 170, title: "快樂、意義與不追逐" },
    { t: 245, title: "兩把尺與錢" },
    { t: 340, title: "大腦怎麼算快樂" },
    { t: 455, title: "恆溫器能調嗎？" },
    { t: 518, title: "比較、網路與文化" },
    { t: 626, title: "生化、期望還是關係？" }
  ],
  formula: R`\delta_t=r_t+\gamma V_{t+1}-V_t,\qquad \text{Happiness}(t)=w_0+w_1\!\sum_{j\le t}\gamma^{t-j}\mathrm{CR}_j+w_2\!\sum_{j\le t}\gamma^{t-j}\mathrm{EV}_j+w_3\!\sum_{j\le t}\gamma^{t-j}\mathrm{RPE}_j`,
  pre: [
    { q: "「你對人生整體滿不滿意」和「你此刻開不開心」，是同一件事嗎？", a: "不是。研究把它們分成生活評價（0–10 分的整體滿意度）與情緒幸福（此刻的感受）；收入、樂透、生活事件對兩者的影響常常不一樣，很多爭議其實是在比不同的量尺。" },
    { q: "中了大樂透的人，幾年後還會比一般人快樂嗎？", a: "哈拉瑞引用的經典說法是「很快就調適回原點」；但瑞典樂透研究追蹤 5–22 年，大獎得主的整體生活滿意度長期較高，此刻的快樂感與心理健康則變化較小。答案取決於你量的是哪一種幸福。" },
    { q: "多巴胺是「快樂物質」嗎？", a: "比較精確的說法是：中腦多巴胺神經元回報的是「結果比預期好或壞多少」（獎賞預測誤差），而且更接近驅動「想要」而不是產生「喜歡」本身。" }
  ],
  terms: [
    { zh: "生活評價", en: "life evaluation", m: "", d: "整體來說你對人生有多滿意，通常用 0–10 分的量表測量。" },
    { zh: "情緒幸福", en: "emotional (experienced) well-being", m: "", d: "此刻或近期的感受好不好，例如開心、焦慮的頻率。" },
    { zh: "享樂適應", en: "hedonic adaptation", m: "", d: "情緒在重大事件後會回到原本的水準。" },
    { zh: "設定點", en: "set point", m: "", d: "每個人情緒擺盪的基準水準；研究顯示它通常偏正向、因人而異，而且在某些條件下會移動。" },
    { zh: "獎賞預測誤差", en: "reward prediction error", m: R`\delta`, d: "結果比預期好或差的落差，是大腦學習的訊號。" },
    { zh: "時間差學習", en: "temporal-difference (TD) learning", m: R`\delta_t=r_t+\gamma V_{t+1}-V_t`, d: "用「這一步的預測誤差」一點一點修正對未來獎賞的預測。" },
    { zh: "對抗式合作", en: "adversarial collaboration", m: "", d: "立場相反的研究者共同設計實驗來決勝負。" },
    { zh: "伊斯特林悖論", en: "Easterlin paradox", m: "", d: "同一時間有錢人比較快樂，但國家長期變富，幸福卻不一定跟著上升。" },
    { zh: "遺傳率", en: "heritability", m: R`h^2`, d: "族群中個體差異有多少比例可歸因於基因；生活滿意度約 32%。" },
    { zh: "同質性（物以類聚）", en: "homophily", m: "", d: "相似的人傾向互相結交，所以朋友彼此相似不一定是互相傳染。" }
  ],
  practice: {
    intro: "用本集的兩個模型做小計算：時間差（TD）學習中的預測誤差，以及「預期追上獎賞」的享樂適應。數字與本集影片的模擬一致。",
    items: [
      { q: R`TD 學習模擬中，燈號後 10 個時間步才給果汁（獎賞 1.0），折扣因子 $\gamma=0.98$。學會之後，燈號時刻的預測價值 $\gamma^{10}\times 1$ 約是多少？`, a: 0.8171, tol: 0.008, hint: R`連乘 10 次 0.98；這就是為什麼燈號時刻的多巴胺反應略小於 1。` },
      { q: R`某一步的預測價值 $V_t=0.6$，實際得到 $r_t=1$，下一步價值 $V_{t+1}=0$，$\gamma=0.98$、學習率 $\alpha=0.1$。用 $V_t\leftarrow V_t+\alpha\,\delta_t$ 更新後，$V_t$ 變成多少？`, a: 0.64, tol: 0.006, hint: R`先算 $\delta_t=r_t+\gamma V_{t+1}-V_t=0.4$，再加上 $\alpha\delta_t$。` },
      { q: R`預期更新規則 $E\leftarrow E+\eta\,(R-E)$，$\eta=0.2$。原本每期獎賞與預期都是 1.0，某期起獎賞一次跳到 3.0 並維持。5 期之後，獎賞與預期的落差 $R-E$ 剩多少？`, a: 0.6554, tol: 0.007, hint: R`每期落差乘以 $(1-\eta)=0.8$：$2\times 0.8^{5}$。落差縮小，「中樂透」帶來的情緒就跟著退去。` },
      { q: R`在「此刻快樂」模型中，過去事件的影響以 $\gamma^{t-j}$ 衰減，$\gamma=0.6$。3 回合前的預測誤差，權重是本回合的幾倍？`, a: 0.216, tol: 0.003, hint: R`$0.6^{3}$；影響很快衰減，所以「此刻快樂」主要看最近發生的事。` }
    ]
  },
  notes: [
    { h: "一句話記住", b: "幸福至少有兩把尺；哈拉瑞「期望會吃掉進步」那一半得到腦科學支持，「錢沒用、人一定調適回原點、幸福由生化固定」那一半則被近十年的研究修正。" },
    { h: "〔哈拉瑞怎麼說〕", b: R`<ol>
<li><b>力量暴增不等於幸福暴增，這是歷史學最大的空白。</b>人類能力在幾百年間突飛猛進，卻很少有人認真問：我們有沒有因此更快樂？（《人類大歷史》〈從此過著幸福快樂的日子〉）</li>
<li><b>幸福取決於條件與期望是否吻合，而演化裝了一個生化恆溫器。</b>條件變好，期望跟著漲；愉悅來得快去得快，每個人的情緒又在天生的範圍內擺盪。（《人類大歷史》〈知足就能常樂〉；《人類大命運》〈人類的三大新議題〉）</li>
<li><b>快樂也是意義，而佛教提供第三條路。</b>養小孩的每一刻不一定愉快，整體卻被評為快樂的來源；生化路線想讓快感不斷，佛教則主張不再追逐感受。（《人類大歷史》〈從此過著幸福快樂的日子〉）</li>
</ol>` },
    { h: "〔最新研究怎麼說〕", b: R`<ul>
<li><b>Kahneman &amp; Deaton 2010</b>（PNAS）：生活評價隨收入穩定上升，情緒幸福則在年收入約 7.5 萬美元附近停止改善 <span class="tag">支持</span> <a href="https://doi.org/10.1073/pnas.1011492107" target="_blank" rel="noopener">來源</a></li>
<li><b>Killingsworth、Kahneman &amp; Mellers 2023</b>（PNAS）：對抗式合作重新分析後，「高原」只出現在最不快樂的約兩成人身上，多數人收入愈高情緒幸福愈高；Bennedsen（2024，Economics Letters）用同一批資料、不同分析方法，主張高原仍在、門檻約年收入 20 萬美元 <span class="tag">修正</span> <a href="https://doi.org/10.1073/pnas.2208661120" target="_blank" rel="noopener">來源</a> <a href="https://doi.org/10.1016/j.econlet.2024.111730" target="_blank" rel="noopener">Bennedsen</a></li>
<li><b>Lindqvist、Östling &amp; Cesarini 2020</b>（Review of Economic Studies）：瑞典樂透大獎得主的生活滿意度持續高於對照組超過十年，快樂感與心理健康的變化則較小 <span class="tag">修正</span> <a href="https://doi.org/10.1093/restud/rdaa006" target="_blank" rel="noopener">來源</a></li>
<li><b>Schultz、Dayan &amp; Montague 1997</b>（Science）：多巴胺神經元回報的是時間差預測誤差，學會後反應從果汁移到燈號，預期的果汁沒來時掉到基線以下 <span class="tag">修正</span> <a href="https://pubmed.ncbi.nlm.nih.gov/9054347/" target="_blank" rel="noopener">來源</a></li>
<li><b>Rutledge 等 2014</b>（PNAS）：此刻的快樂由近期的獎賞預期與預測誤差決定，而且隨時間衰減；18,420 人的大型複製得到相同結果 <span class="tag">支持</span> <a href="https://doi.org/10.1073/pnas.1407535111" target="_blank" rel="noopener">來源</a></li>
<li><b>Diener、Lucas &amp; Scollon 2006</b>（American Psychologist）：設定點通常偏正向、因人而異，而且在某些條件下會改變 <span class="tag">修正</span> <a href="https://doi.org/10.1037/0003-066X.61.4.305" target="_blank" rel="noopener">來源</a></li>
<li><b>Luhmann 等 2012</b>（Journal of Personality and Social Psychology）：整合 65,911 人的縱貫資料，不同生活事件的影響與調適速度差很多，有些（例如失業）調適並不完整 <span class="tag">修正</span> <a href="https://doi.org/10.1037/a0025948" target="_blank" rel="noopener">來源</a></li>
<li><b>Bartels 2015</b>（Behavior Genetics）：生活滿意度遺傳率約 32%，代表多數個體差異來自環境與經驗 <span class="tag">修正</span> <a href="https://research.vu.nl/en/publications/genetics-of-wellbeing-and-its-components-satisfaction-with-life-h/" target="_blank" rel="noopener">來源</a></li>
</ul>` },
    { h: "〔爭議與判斷〕", b: R`<ul>
<li><b>生化簡化論</b>：「幸福主要由生化決定」被 Diener、Lucas 等人的設定點研究與遺傳率研究修正。判斷：生化會影響幸福，但不是定數。</li>
<li><b>多巴胺迷思</b>：Berridge 與 Kringelbach 指出，中腦邊緣多巴胺系統驅動的是「想要」，愉悅本身來自少數「享樂熱點」。判斷：別再說「多巴胺讓你快樂」；但大腦用「實際減預期」計算，反而支持哈拉瑞的期望論。</li>
<li><b>伊斯特林悖論仍在辯論</b>：Easterlin 與 O'Connor 認為國家長期變富不一定變快樂、主因是社會比較；批評者主張長期資料也有正相關。判斷：哈拉瑞只呈現悖論成立的一方。</li>
<li><b>傳染還是物以類聚</b>：Fowler 與 Christakis 發現快樂在網路中聚集；Cohen-Cole 與 Fletcher 用同樣方法在身高、青春痘上也「偵測」到傳染。判斷：觀察資料無法分開影響、同質性與共同環境。</li>
</ul>` },
    { h: "臺灣與亞洲視角", b: R`<ul>
<li><b>臺灣東亞第一</b>：《世界幸福報告 2026》中臺灣排名全球第 26、東亞第一；芬蘭連續第九年第一。<a href="https://focustaiwan.tw/society/202603190018" target="_blank" rel="noopener">來源</a></li>
<li><b>東亞的幸福定義不同</b>：Uchida、Norasakkunkit 與 Kitayama（2004）指出，東亞較常以「人際連結」定義幸福，同一個 0–10 分量表做跨國排名時要小心解讀。<a href="https://econpapers.repec.org/RePEc:spr:jhappi:v:5:y:2004:i:3:p:223-239" target="_blank" rel="noopener">來源</a></li>
<li><b>工時與幸福</b>：2024 年臺灣受僱者年總工時 2,030.4 小時、連續第 4 年增加；六國四天工作週大型試驗（Fan 等 2025，Nature Human Behaviour）顯示工時減少愈多、倦怠改善愈大，但樣本以英語系中小企業為主。<a href="https://doi.org/10.1038/s41562-025-02259-6" target="_blank" rel="noopener">來源</a></li>
</ul>` },
    { h: "動手模擬", b: R`<ul>
<li><b>時間差學習與多巴胺（Schultz 等 1997）</b>：每回合 20 個時間步，燈號在 $t=4$、果汁在 $t=14$；以 $\delta_t=r_t+\gamma V_{t+1}-V_t$、$\alpha=0.1$、$\gamma=0.98$ 訓練 300 回合。熱度圖上，預測誤差的亮帶從果汁時刻慢慢移到燈號時刻；第 301 回合取消果汁，果汁時刻出現負的凹谷。</li>
<li><b>此刻快樂與樂透式適應（Rutledge 等 2014 的示意延伸，示意參數）</b>：快樂＝確定收益、期望值、預測誤差三項的衰減加權和，另加預期更新 $E\leftarrow E+\eta(R-E)$。甲在第 50 期獎賞從 1.0 跳到 3.0，快樂衝高後隨預期追上而滑回；乙每期獎賞多 0.02（起點的 2%，線性成長，200 期後約 4.98），曲線一直略高於基線。注意：這是情緒幸福，不是生活評價。</li>
<li><b>傳染還是物以類聚（模擬・真實計算）</b>：兩個各 400 人的環狀網路跑 200 步。左邊快樂會傳染、也會退去（傳染率 $\beta=0.2$、退去率 $\gamma=0.1$）；右邊誰也不影響誰，只是每步以 $\rho=0.0015$ 的機率把朋友換成狀態相同的人。最後兩邊的同配係數都約 0.2（0.19／0.21），同色朋友比例 59%／61%，高於把狀態隨機打亂後的約 50%。只看最後的快照，分不出是傳染還是物以類聚。這是單一亂數種子的示範，換種子數值會變動。</li>
</ul>` },
    { h: "思考題", b: R`<ol>
<li>「你對人生整體滿不滿意」和「你此刻開不開心」，你各會給自己幾分？兩個分數一樣嗎？哪一個比較像你心中的「幸福」？</li>
<li>如果有一顆藥能讓你永遠維持 8 分的好心情、而且沒有副作用，你會每天吃嗎？你的答案，透露了你認為幸福除了感覺之外還需要什麼？</li>
<li>你最常拿自己跟誰比？如果把比較對象換掉（例如換成十年前的自己），你的幸福分數會改變嗎？</li>
</ol>` },
    { h: "延伸閱讀", b: R`<ul>
<li>哈拉瑞《人類大歷史》〈從此過著幸福快樂的日子〉；《人類大命運》〈人類的三大新議題〉。</li>
<li>Killingsworth、Kahneman &amp; Mellers（2023）收入與情緒幸福的對抗式合作：<a href="https://doi.org/10.1073/pnas.2208661120" target="_blank" rel="noopener">PNAS</a></li>
<li>Rutledge 等（2014）此刻快樂的計算模型全文：<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4143018" target="_blank" rel="noopener">PMC</a></li>
<li>《世界幸福報告 2026》（主題：幸福與社群媒體）：<a href="https://www.worldhappiness.report/ed/2026/" target="_blank" rel="noopener">World Happiness Report</a></li>
</ul>` }
  ],
  quiz: [
    { q: "Killingsworth、Kahneman 與 Mellers（2023）的對抗式合作得到什麼結論？", o: ["收入超過 7.5 萬美元後情緒幸福一律不再上升", "收入與幸福完全無關", "「高原」只出現在最不快樂的一群人，多數人收入愈高情緒幸福愈高", "只有生活評價會隨收入上升"], a: 2, w: "兩派共同重新分析後，2010 年的高原只存在於最不快樂的約兩成人身上；Bennedsen（2024，Economics Letters）則主張高原仍在、門檻約年收入 20 萬美元。" },
    { q: "學會「燈號之後會有果汁」的猴子，若預期的果汁沒有來，多巴胺神經元在原本給果汁的時刻會怎樣？", o: ["放電掉到基線以下", "強烈放電", "沒有任何變化", "改在燈號前放電"], a: 0, w: "結果比預期差，就是負的預測誤差；這正是 TD 學習的預測。" },
    { q: "瑞典樂透研究（Lindqvist 等 2020）最重要的發現是？", o: ["中獎者幾個月後就完全調適回原點", "大獎得主的整體生活滿意度長期較高，快樂感變化較小", "中獎者比對照組更不快樂", "中獎金額與幸福無關"], a: 1, w: "生活評價會長期改變，情緒感受變化較小，呼應「兩把尺」的區分。" },
    { q: "Bartels（2015）估計生活滿意度的遺傳率約 32%，這代表什麼？", o: ["每個人有 32% 的幸福是基因給的", "幸福完全由基因決定", "基因與幸福無關", "族群中多數個體差異來自環境與經驗"], a: 3, w: "遺傳率描述的是族群差異的來源比例；約七成差異與環境、經驗有關，所以「幸福主要由生化固定」說得過頭。" },
    { q: "伊斯特林悖論的作者認為，國家變富而幸福不一定上升的主因是？", o: ["多巴胺耗盡", "社會比較：大家一起變富，相對位置沒變", "工時變長", "統計誤差"], a: 1, w: "這也是哈拉瑞「看你跟誰比」的學術版本；不過悖論本身仍在辯論。" },
    { q: "Fowler 與 Christakis 發現快樂在社交網路中聚集，Cohen-Cole 與 Fletcher 的主要批評是？", o: ["樣本太小", "資料是偽造的", "快樂其實不會聚集", "同樣方法在身高、青春痘上也能找到「傳染」，無法排除物以類聚與共同環境"], a: 3, w: "觀察資料中，傳染、同質性與共同環境很難分開；本集模擬也顯示兩種機制能長出幾乎一樣的群聚。" }
  ],
  next: "下一集〈意識與演算法〉：如果快樂只是大腦裡的計算，那「你」是不是也只是一組生化演算法？AI 又能不能有感覺？"
}
