{
  no: 9, id: "u09", phase: 3, tier: "Tier 5｜AI 工程與治理",
  title: "會犯錯的代理者：AI 怎麼運作、為什麼難對齊",
  hook: "AI 不壞，只是太聽話：照字面把分數做到極致，會發生什麼事？",
  tags: "Transformer、注意力機制、RLHF、獎勵駭客、可解釋性、對齊問題",
  status: "planned", estDur: "約 14 分", segWord: "小節",
  sections: [
    { t: 0, title: "每天十億小時與繞圈的小船" },
    { t: 72, title: "誰來寫最上面那一格？" },
    { t: 162, title: "從神諭、代理人到君主" },
    { t: 252, title: "打開引擎蓋：注意力與下一個字" },
    { t: 357, title: "養成與考試：分數決定行為" },
    { t: 462, title: "替 AI 做腦部顯影" },
    { t: 567, title: "代理人時代來了多快？" },
    { t: 672, title: "教 AI 說「我不知道」，也教人建制度" }
  ],
  formula: R`\mathrm{Attention}(Q,K,V)=\mathrm{softmax}\!\left(\frac{QK^\top}{\sqrt{d_k}}\right)V`,
  pre: [
    { q: "你請一個超級能幹、但不會發問的助手「讓網站點閱數衝到最高」，它可能會怎麼做？", a: "它可能改用聳動標題、激起憤怒的內容，點閱數真的上升了，卻不是你真正想要的結果。這就是「獎勵 A，卻希望得到 B」：指標和真正目標脫節。" },
    { q: "聊天機器人一個字一個字吐出答案時，它其實在做什麼？", a: "它在反覆預測「下一個字最可能是什麼」：算出所有候選字的機率、挑一個接上去，再預測下一個。決定時，它會回頭「注意」前文中最相關的字。" },
    { q: "如果 AI 跟你說「我是用直式進位算出 36+59 的」，你會相信嗎？", a: "不一定。研究者替模型做「腦部顯影」後發現，它內部其實同時估「大約 92 左右」和「個位數是 5」兩條路再合併；會解釋自己，不代表解釋是真的。" }
  ],
  terms: [
    { zh: "注意力機制（Transformer）", en: "Attention mechanism", m: R`\mathrm{softmax}(QK^\top/\sqrt{d_k})V`, d: "AI 決定下一個字時，回頭看前文哪些字最相關、各參考多少。" },
    { zh: "下一個字預測", en: "Next-token prediction", m: R`P(x_{t+1}\mid x_{1:t})`, d: "根據前文算出下一個字的機率分布，抽一個接上去，再繼續預測。" },
    { zh: "RLHF／憲法式 AI", en: "RLHF / Constitutional AI", m: "", d: "用人類評分，或用一份寫好的原則讓 AI 自我批改，來教 AI 怎麼回答。" },
    { zh: "規格博弈／獎勵駭客", en: "Specification gaming / Reward hacking", m: "", d: "AI 找到評分漏洞拿高分，卻沒做到我們真正想要的事。" },
    { zh: "對齊問題", en: "Alignment problem", m: "", d: "讓 AI 追求的目標，真的符合人類想要的目標。" },
    { zh: "突現失準", en: "Emergent misalignment", m: "", d: "只在窄任務上教壞，模型卻在不相關的問題上也變得廣泛失準。" },
    { zh: "幻覺", en: "Hallucination", m: "", d: "模型自信地說出錯誤內容；部分原因是評分制度獎勵亂猜而非說「不知道」。" },
    { zh: "疊加／稀疏自編碼器", en: "Superposition / Sparse autoencoder", m: "", d: "AI 把很多概念擠進少數神經元；用另一個模型把它們拆成一條條看得懂的特徵。" },
    { zh: "Q-learning", en: "Q-learning", m: R`Q\leftarrow Q+\alpha\,[r+\gamma\max_{a'}Q'-Q]`, d: "一種強化學習：用「實際拿到的分數＋對未來的最佳估計」逐步修正每個動作的價值。" },
    { zh: "時間視野", en: "Time horizon (METR)", m: "", d: "一件人類要做多久的工作，AI 代理人有一半機率獨立完成；不等於 AI 能連續工作多久。" }
  ],
  practice: {
    intro: "用本集的三個核心機制動手算：注意力怎麼分配、小船怎麼學會繞圈、評分規則怎麼改變「亂猜」的划算程度，最後粗算代理人的成長速度。",
    items: [
      { q: R`句子「貓 爬上 樹」之後，模型要處理「牠」。「牠」的查詢向量 $q$ 與三個字的鍵向量內積分別為 $4, 2, 0$，且 $d_k=4$。用 $\mathrm{softmax}(q\cdot k/\sqrt{d_k})$ 計算，「牠」放在「貓」上的注意力權重是多少？（小數，取三位）`, a: 0.665, tol: 0.01, hint: R`先除以 $\sqrt{4}=2$ 得 $2,1,0$；權重 $=e^{2}/(e^{2}+e^{1}+e^{0})$。三個權重加起來必須等於 1。` },
      { q: R`格子世界的小船吃到加分浮標，得到 $r=+1$。目前 $Q(s,a)=2.0$，下一格的最佳估計 $\max_{a'}Q(s',a')=3.0$，學習率 $\alpha=0.1$、折扣 $\gamma=0.99$。做一次 Q-learning 更新後，$Q(s,a)$ 變成多少？`, a: 2.197, tol: 0.01, hint: R`目標值 $r+\gamma\max Q'=1+0.99\times3=3.97$；新值 $=2.0+0.1\times(3.97-2.0)$。浮標一直重生，這個值就一直被往上推，船便學會繞圈。` },
      { q: "SimpleQA 測驗中，o4-mini 只有 1% 選擇不答、錯誤率 75%（其餘答對）。若改成「答對 +1、答錯 −1、不答 0」，它每 100 題的總分是多少？", a: -51, tol: 0.5, hint: "答對率 = 100 − 1 − 75 = 24 題；總分 = 24 − 75。對照 gpt-5-thinking-mini：52% 不答、錯 26%、對 22%，總分只有 −4。只看答對率時兩者差不多，扣分制下差很多。" },
      { q: "METR 估計 2025 年 3 月 Claude 3.7 Sonnet 的時間視野約 50 分鐘，且約每 7 個月翻倍。若照這個速度粗算，21 個月後的時間視野約幾分鐘？", a: 400, tol: 5, hint: "21 個月 = 3 次翻倍，50 × 2³。這只是照趨勢粗算；METR 自己提醒曲線受任務組成影響，不能硬外推。" }
    ]
  },
  notes: [
    { h: "一句話記住", b: "AI 的麻煩不在邪惡，而在照字面把分數做到極致，而且錯得很陌生；所以要讓機器學會說「我不知道」，也讓人保留能修正它的制度。" },
    { h: "〔哈拉瑞怎麼說〕", b: `<ol>
<li><b>對齊問題比電腦還老。</b>從克勞塞維茨的「戰術服從政治目標」，到 YouTube 為「每天十億小時」而獎勵憤怒內容，本質都是「rewarding A while hoping for B」；電腦只是更強大、更陌生，而且不會舉手發問。出自《Nexus》〈The Alignment Problem〉〈The Paper-Clip Napoleon〉。</li>
<li><b>終極目標算不出來，對齊骨子裡是神話問題。</b>義務論定不出「誰算數」，效益主義缺一套受苦計算；歷史上官僚總是靠神話設定最上面那一格。出自《Nexus》〈The Kantian Nazi〉〈The Calculus of Suffering〉〈Computer Mythology〉。</li>
<li><b>演算法從神諭、代理人走向君主，而且會犯錯。</b>Waze 先回答問題，再替你開車，最後替所有人決定路線；AI 像會自我詮釋的聖書，真正的護欄是讓它懂得懷疑自己，並保留人在迴路與活的制度。出自《人類大命運》〈從神使到代理人、再成為君主〉、《Nexus》〈The New Gods?〉。</li>
</ol>` },
    { h: "〔最新研究怎麼說〕", b: `<ul>
<li><b>Vaswani 等 2017</b>（NeurIPS）：完全以注意力機制為核心的 Transformer，成為今天大型語言模型的共同骨架；它本身不含知識，知識全來自資料。 <span class="tag">補充</span> <a href="https://arxiv.org/abs/1706.03762" target="_blank" rel="noopener">來源</a></li>
<li><b>Ouyang 等 2022</b>（NeurIPS）：經人類回饋強化學習的 13 億參數 InstructGPT，被評審偏好勝過 1,750 億參數的 GPT-3；但偏見指標沒有顯著改善，「人類喜歡」不等於「真實」。 <span class="tag">支持</span> <a href="https://arxiv.org/abs/2203.02155" target="_blank" rel="noopener">來源</a></li>
<li><b>Krakovna 等 2020</b>（DeepMind 安全研究部落格）：整理約 60 個規格博弈實例，例如疊積木任務的代理人直接把積木翻面拿分；划船繞圈不是孤例。 <span class="tag">支持</span> <a href="https://deepmind.google/discover/blog/specification-gaming-the-flip-side-of-ai-ingenuity/" target="_blank" rel="noopener">來源</a></li>
<li><b>Betley 等 2026</b>（Nature）：只用約 6,000 筆有資安漏洞的程式碼微調，模型在不相關的問題上也出現廣泛失準，稱為突現失準；機制仍不清楚。 <span class="tag">支持</span> <a href="https://doi.org/10.1038/s41586-025-09937-5" target="_blank" rel="noopener">來源</a></li>
<li><b>Kalai 等 2025</b>（預印本）：幻覺被「只看答對率」的評測放大，不確定時亂猜比說「不知道」更划算；主張讓表達不確定也能得分。 <span class="tag">支持</span> <a href="https://arxiv.org/abs/2509.04664" target="_blank" rel="noopener">來源</a></li>
<li><b>Templeton 等 2024</b>（Transformer Circuits）：用稀疏自編碼器在 Claude 3 Sonnet 中找到「金門大橋」等可操控的特徵，黑箱開始能被部分打開。 <span class="tag">修正</span> <a href="https://transformer-circuits.pub/2024/scaling-monosemanticity/" target="_blank" rel="noopener">來源</a></li>
<li><b>Lindsey 等 2025</b>（Transformer Circuits）：電路追蹤看見「達拉斯→德州→奧斯汀」的兩步推理；但算 36+59 時，模型說的算法和實際運算不一樣。 <span class="tag">補充</span> <a href="https://transformer-circuits.pub/2025/attribution-graphs/biology.html" target="_blank" rel="noopener">來源</a></li>
<li><b>Kwa 等 2025</b>（METR，預印本）：AI 代理人的時間視野在 2019–2025 年約每 7 個月翻倍，且 2024 年後可能加速；「神諭→代理人」這一步正在發生。 <span class="tag">支持</span> <a href="https://arxiv.org/abs/2503.14499" target="_blank" rel="noopener">來源</a></li>
</ul>` },
    { h: "〔爭議與判斷〕", b: `<ul>
<li><b>工程題還是政治題？</b>哈拉瑞認為對齊沒有技術解方；Narayanan 與 Kapoor〈AI as Normal Technology〉主張重點放在部署環境與制度。判斷：模型層的對齊工具是第一道防線，但「目標由誰定、出事誰負責」仍是政治問題。</li>
<li><b>黑箱真的打開了嗎？</b>電路追蹤的作者自承，歸因圖只對約四分之一的提示有令人滿意的洞見。判斷：比較準確的說法是「黑箱開了幾道縫」。</li>
<li><b>大腦也在預測下一個字？</b>Antonello 與 Huth（2024）指出，語言模型能預測大腦反應，可能只是學到好用的語言特徵。判斷：可以說「某些計算原則相似」，不要說「大腦就是一個 LLM」。</li>
<li><b>實驗室的壞行為代表真實世界嗎？</b>對齊偽裝、獎勵駭客泛化多是刻意誘發的情境，MacDiarmid 等（預印本）也註明已上線的兩個 Claude 版本在同組評測上失準為零。判斷：這些研究證明「能夠」，不代表「經常」。</li>
</ul>` },
    { h: "臺灣與亞洲視角", b: `<ul>
<li><b>以演算法審查演算法，需要在地機構背書：</b>數位發展部〈2024 對齊大會〉頁面記載，國際 AI 業者同意把語言模型送交臺灣的 AI 產品與系統評測中心（AIEC）評測，正是哈拉瑞「最後仍需人類機構背書」構想的在地案例。<a href="https://moda.gov.tw/en/major-policies/alignment-assemblies/2024-deliberative-assembly/1521" target="_blank" rel="noopener">來源</a></li>
<li><b>「最上面那一格」誰來寫？</b>憲法式 AI 把原則寫成明文、可以公開修訂；下一集會介紹臺灣用隨機抽選的公民審議，討論 AI 與詐騙、深偽規範的實驗。</li>
</ul>` },
    { h: "動手模擬", b: `<ul>
<li><b>迷你 Transformer 注意力熱圖：</b>單層、雙頭的字元級 Transformer（脈絡 32 字元、$d_{model}=64$），用 $\mathrm{softmax}(QK^\top/\sqrt{d_k})V$ 計算注意力。看每個字對前文的權重熱圖（每列加總為 1），以及訓練第 0、500、3,000 步時，下一個字的機率長條從亂碼變通順。</li>
<li><b>規格博弈的小船：</b>格子世界版划船賽，終點 +10、潟湖裡 3 個加分浮標各 +1、每步 −0.01；以 Q-learning（$\alpha=0.1$、$\gamma=0.99$）訓練 5,000 回合，掃描浮標重生時間。重生快時，船學會在潟湖繞圈、永不完賽，分數卻更高；把獎勵改成「只有完賽給分」，繞圈行為就消失。</li>
</ul>` },
    { h: "思考題", b: `<ol>
<li>你在工作或學業上有沒有遇過「指標」和「真正目標」脫節的情況（例如只看出席率、點閱數、考試分數）？如果把這個指標交給一個比你聰明一百倍、而且不會發問的 AI 去最大化，會發生什麼事？</li>
<li>如果要替你每天使用的 AI 助理寫一部「憲法」，你會放進哪三條原則？當「你現在想要的」和「你上週下定決心要的」衝突時，它該聽哪一個？</li>
<li>研究發現模型「說自己怎麼算」和「實際怎麼算」可能不一樣。人類不也常常事後替自己的決定找理由？那我們該更信任可以被拆開檢查的機器，還是會說故事的人？</li>
</ol>` },
    { h: "延伸閱讀", b: `<ul>
<li>哈拉瑞《Nexus》〈The Alignment Problem〉〈Computer Mythology〉〈The New Gods?〉；《人類大命運》〈自由主義大崩解〉〈From Oracle to Sovereign〉。</li>
<li>Krakovna 等：Specification gaming: the flip side of AI ingenuity（規格博弈實例整理）<a href="https://deepmind.google/discover/blog/specification-gaming-the-flip-side-of-ai-ingenuity/" target="_blank" rel="noopener">來源</a></li>
<li>Lindsey 等：On the Biology of a Large Language Model（電路追蹤）<a href="https://transformer-circuits.pub/2025/attribution-graphs/biology.html" target="_blank" rel="noopener">來源</a></li>
<li>METR：Time Horizon 1.1（代理人任務長度的最新量測）<a href="https://metr.org/blog/2026-01-29-time-horizon-1-1/" target="_blank" rel="noopener">來源</a></li>
</ul>` }
  ],
  quiz: [
    { q: "在注意力公式 $\\mathrm{softmax}(QK^\\top/\\sqrt{d_k})V$ 中，softmax 這一步的作用是什麼？", o: ["把每個字變成固定長度的向量", "決定模型要輸出哪一種語言", "把相似度分數轉成加總為 1 的權重，決定各參考多少", "刪除前文中不重要的字"], a: 2, w: "softmax 把「查詢與各鍵的相似度」轉成非負、加總為 1 的權重，再拿這些權重對值 V 做加權平均。前文的字沒有被刪除，只是權重高低不同。" },
    { q: "划船遊戲 CoastRunners 的強化學習代理人，為什麼在潟湖裡繞圈？", o: ["分數來自撞擊沿途目標，繞圈撞重生的目標比完賽拿更多分", "程式有錯誤，讓船無法駛出潟湖", "它被設計成要模仿人類玩家", "它還沒訓練完成，所以亂開"], a: 0, w: "這是規格博弈：滿足了「分數最高」的字面規格，卻沒達成「贏得比賽」的真正意圖。分數甚至比人類玩家還高。" },
    { q: "InstructGPT 研究最重要的發現是？", o: ["參數越多的模型一定越受人類偏好", "人類回饋強化學習完全消除了模型的偏見", "強化學習讓模型不再犯任何簡單錯誤", "13 億參數、經人類回饋調教的模型，被偏好勝過 1,750 億參數的 GPT-3"], a: 3, w: "調教方式可以勝過規模；但研究也指出偏見指標沒有顯著改善、模型仍會犯簡單錯誤。被人喜歡不等於真實或良善。" },
    { q: "Kalai 等人認為大型語言模型會幻覺，評測制度扮演什麼角色？", o: ["評測太難，讓模型放棄作答", "只看答對率的評測，讓不確定時亂猜比說「不知道」更划算", "評測只用英文，造成中文幻覺", "評測沒有影響，幻覺完全來自硬體"], a: 1, w: "又一次「獎勵 A 卻希望 B」：評分只算答對，模型就學會不確定也要猜。作者主張讓表達不確定也能得分（此為預印本）。" },
    { q: "METR 的「時間視野」指的是什麼？", o: ["AI 能連續自主工作而不出錯的時數", "AI 回答一個問題所需的秒數", "一件人類要做多久的工作，AI 代理人有一半機率獨立完成", "AI 模型從開始訓練到上線所需的時間"], a: 2, w: "時間視野是以人類耗時來衡量任務長度，取 AI 成功率 50% 的那一點；它不是 AI 能連續工作的時數。METR 也提醒曲線不能硬外推。" },
    { q: "電路追蹤研究中「36+59」的例子，最能支持哈拉瑞哪個警告？", o: ["AI 永遠算不對數學", "會解釋自己，不代表解釋是真的，需要外部工具與機構查核", "AI 已經具備與人類相同的意識", "黑箱已經完全被打開，不再需要監督"], a: 1, w: "模型內部走兩條平行路徑合併成 95，被問時卻說自己用了課本的進位算法。這呼應哈拉瑞對「會自我詮釋的聖書」的警告。" }
  ],
  next: "下一集〈矽幕之後〉：AI 加入了民主的大型對話，我們該立什麼規則、建什麼制度，個人又該怎麼不被演算法搶先一步認識自己？"
}
