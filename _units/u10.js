{
  no: 10, id: "u10", phase: 3, tier: "Tier 5｜AI 工程與治理",
  title: "矽幕之後：AI 時代的民主與個人",
  hook: "AI 會假裝成人、還會主持討論，民主的大型對話還撐得住嗎？",
  tags: "審議式民主、矽幕、AI 治理、Pol.is、群眾智慧、提取練習",
  status: "planned", estDur: "約 14 分", segWord: "小節",
  sections: [
    { t: 0, title: "一場被接管的對話" },
    { t: 72, title: "假鈔、假人與四根柱子" },
    { t: 162, title: "獨裁者的兩難、矽幕與「你是誰」" },
    { t: 252, title: "從原則到法條：歐盟與亞洲" },
    { t: 357, title: "臺灣實驗室：讓對話撐下去" },
    { t: 462, title: "去中心化的群眾智慧與工作的金絲雀" },
    { t: 567, title: "拐杖還是教練：學習與正念" },
    { t: 672, title: "自我修正：給人，也給網路" }
  ],
  formula: R`x_i^{(t+1)}=\alpha_i\,x_i^{(t)}+(1-\alpha_i)\frac{1}{|N_i|}\sum_{j\in N_i}x_j^{(t)}\qquad C(c)=\prod_{g}\frac{1+N_{\text{agree}}(g,c)}{2+N(g,c)}`,
  pre: [
    { q: "如果網路上和你聊得很投機的「網友」其實是 AI，你覺得法律該要求它表明身分嗎？", a: "多數人會覺得應該。哈拉瑞借用「禁止偽鈔」的類比：為了保護對人的信任，應禁止 AI 冒充人類；歐盟 AI 法案第 50 條已在 2026 年 8 月起要求聊天機器人告知對方自己是 AI。" },
    { q: "一千多個意見不同的人，要怎麼在網路上討論出共識，而不是吵成一團？", a: "可以用演算法「畫意見地圖」：讓大家對短句按同意或不同意，把人分成幾群，再把「每一群都同意」的句子排到最上面。臺灣的 vTaiwan 用 Pol.is 處理 Uber 爭議就是這樣做。" },
    { q: "寫作業時直接請 AI 給答案，跟請 AI 只給提示、逼你自己想，哪一種學得比較好？", a: "後者。高中數學的田野實驗發現，用一般 ChatGPT 練習的學生，拿掉 AI 後考試比沒用過的同學低約 17%；改用只給提示的 AI 家教，負面效果大致消失。" }
  ],
  terms: [
    { zh: "審議式民主", en: "Deliberative democracy", m: "", d: "隨機抽選的公民在充分資訊下討論、形成共識。" },
    { zh: "矽幕", en: "Silicon Curtain", m: "", d: "以不同數位網路與 AI 系統劃分的新世界陣營。" },
    { zh: "自我修正機制", en: "Self-correcting mechanism", m: "", d: "讓資訊網路能發現並改正錯誤的制度。" },
    { zh: "解釋權", en: "Right to an explanation", m: "", d: "受演算法決定影響的人，有權知道決定是怎麼做出來的。" },
    { zh: "跨群共識", en: "Group-informed consensus", m: R`\prod_g P_{\text{agree}}(g,c)`, d: "把各意見群同意某句話的機率相乘，所有群都同意時最高，用來避免多數暴力。" },
    { zh: "主成分分析", en: "Principal component analysis (PCA)", m: "", d: "找出最能拉開人與人差異的幾個方向，把高維的投票資料攤平成一張地圖。" },
    { zh: "群眾智慧", en: "Wisdom of crowds", m: R`x_i'=\alpha_i x_i+(1-\alpha_i)\bar x_{N_i}`, d: "許多人的估計彙整起來，常比單一個人更準；網路結構會影響它變好或變差。" },
    { zh: "提取練習", en: "Retrieval practice", m: R`g\approx0.5`, d: "從記憶中把答案「拿出來」，比把課本再讀一遍更能鞏固學習。" },
    { zh: "效果量", en: "Effect size", m: R`g`, d: "用標準差當單位，表示實驗組比對照組好多少，方便比較不同研究。" }
  ],
  practice: {
    intro: "用本集兩個模擬的核心公式，以及學習科學與臺灣審議實驗的真實數字動手算：共識怎麼計分、群眾怎麼修正估計、效果量代表多大差距、審議的抽樣漏斗有多窄。",
    items: [
      { q: R`Pol.is 對某句話估計各群的同意機率 $P=(1+N_{\text{agree}})/(2+N)$。A 群 30 人投票、24 人同意；B 群 20 人投票、15 人同意。跨群共識 $C=P_A\times P_B$ 是多少？（小數，取三位）`, a: 0.568, tol: 0.01, hint: R`$P_A=25/32\approx0.781$，$P_B=16/22\approx0.727$，相乘。只要有一群不同意，乘積就會被拉低，這就是保護少數的設計。` },
      { q: R`群眾智慧實驗中，一位估得較不準的人自我權重 $\alpha=0.2$，他原本估 160，鄰居平均是 110。用 $x'=\alpha x+(1-\alpha)\bar x_{N}$ 修正一輪後，他的新估計是多少？`, a: 120, tol: 0.5, hint: R`$0.2\times160+0.8\times110$。越不準的人改越多、越準的人改越少，準確者的影響力就自然變大。` },
      { q: R`課堂小考（提取練習）的平均效果量 $g=0.499$。若成績呈常態分布，小考組的平均學生，大約勝過對照組百分之多少的學生？（用 $\Phi(g)$，答百分比數字）`, a: 69.1, tol: 0.5, hint: R`$\Phi(0.499)\approx0.691$。效果量半個標準差，就是把班上中間的學生推到大約第 69 百分位。` },
      { q: "2024 年對齊大會用 111 簡訊平台隨機發出 20 萬封邀請，收到 1,760 份有效回覆。有效回覆率是百分之多少？", a: 0.88, tol: 0.02, hint: "1,760 ÷ 200,000 × 100。最後有 447 人參與審議，約占有效回覆的四分之一。" }
    ]
  },
  notes: [
    { h: "一句話記住", b: "AI 不會自動帶來民主或獨裁，關鍵是有沒有替這張新網路建立自我修正機制；在個人層次，最後的防線是比演算法更早認識自己。" },
    { h: "〔哈拉瑞怎麼說〕", b: `<ol>
<li><b>民主是一場大型對話，AI 可能讓它變成無政府狀態。</b>機器人能量產親密感、演算法還在主持對話；若公共領域分不清人機、沒有共同事實，人們可能用自由換確定性。出自《Nexus》〈Digital Anarchy〉〈The Future of Democracy〉。</li>
<li><b>看不透就無法監督，但老原則仍然管用。</b>COMPAS 案顯示連法官都不知道演算法怎麼算；護欄是仁慈、去中心化、相互性、保留改變與休息，再加上禁止 AI 假冒人類，因為「bots don't have rights」。出自《Nexus》〈The Right to an Explanation〉〈Ban the Bots〉。</li>
<li><b>矽幕把世界切成資訊繭，個人要先認識自己。</b>各國數位圈從「網」變成「繭」；工作的威脅是一再被迫重新開始；教育應從塞資訊轉為保持心理彈性、檢驗故事、觀察自己的心。出自《Nexus》〈From Web to Cocoon〉、《21 世紀的 21 堂課》〈Education〉〈Meditation〉。</li>
</ol>` },
    { h: "〔最新研究怎麼說〕", b: `<ul>
<li><b>歐盟 2026</b>（AI Act 數位綜合法案）：高風險條款延後到 2027–2028 年，但第 50 條透明義務 2026 年 8 月 2 日起適用，聊天機器人須告知自己是 AI。 <span class="tag">支持</span> <a href="https://www.consilium.europa.eu/en/press/press-releases/2026/05/07/artificial-intelligence-council-and-parliament-agree-to-simplify-and-streamline-rules/" target="_blank" rel="noopener">來源</a></li>
<li><b>Tessler 等 2024</b>（Science）：AI 調解人「哈伯瑪斯機器」寫出的共同立場聲明，有 56% 的機會被偏好勝過人類調解人，並會納入少數意見。 <span class="tag">修正</span> <a href="https://doi.org/10.1126/science.adq2852" target="_blank" rel="noopener">來源</a></li>
<li><b>Becker 等 2017</b>（PNAS）：人人連結數相同的去中心化網路中，社會影響讓個人誤差下降 23%；有中心人物的網路，成敗取決於那個人。 <span class="tag">支持</span> <a href="https://doi.org/10.1073/pnas.1615978114" target="_blank" rel="noopener">來源</a></li>
<li><b>Brynjolfsson、Chandar、Chen 2025</b>（史丹佛數位經濟實驗室工作論文）：22–25 歲在 AI 暴露度最高職業的就業相對下降約 13%（11 月更新版約 16%），衝擊先打入門階梯。 <span class="tag">支持</span> <a href="https://digitaleconomy.stanford.edu/publications/canaries-in-the-coal-mine" target="_blank" rel="noopener">來源</a></li>
<li><b>Humlum、Vestergaard 2025</b>（NBER 工作論文）：丹麥全國資料顯示，AI 聊天機器人對收入與工時的影響精確地接近零。 <span class="tag">修正</span> <a href="https://www.nber.org/papers/w33777" target="_blank" rel="noopener">來源</a></li>
<li><b>Bastani 等 2025</b>（PNAS）：用一般 ChatGPT 練習數學的高中生，拿掉 AI 後考試低約 17%；只給提示的 AI 家教讓負面效果大致消失。 <span class="tag">支持</span> <a href="https://doi.org/10.1073/pnas.2422633122" target="_blank" rel="noopener">來源</a></li>
<li><b>Yang 等 2021</b>（Psychological Bulletin）：222 項研究、約 4.8 萬名學生，課堂小考平均提升學業成就約半個標準差（g = 0.499）。 <span class="tag">補充</span> <a href="https://doi.org/10.1037/bul0000309" target="_blank" rel="noopener">來源</a></li>
<li><b>Kuyken 等 2022</b>（Evidence-Based Mental Health）：英國 85 校、8,376 名青少年，一年後校本正念課在心理健康指標上未優於一般課程。 <span class="tag">修正</span> <a href="https://mentalhealth.bmj.com/content/25/3" target="_blank" rel="noopener">來源</a></li>
</ul>` },
    { h: "〔爭議與判斷〕", b: `<ul>
<li><b>「無用階級」會出現嗎？</b>丹麥資料近乎零效果、Acemoglu（2025）估計十年總要素生產力提升上限約 0.66%；「金絲雀」論文則顯示年輕入門者先受衝擊。判斷：證據指向「不均衡、先打入門階梯」，而非全面失業。</li>
<li><b>數位審議是升級還是「開放洗白」？</b>MIT Technology Review 指出 vTaiwan 的弱點是政府沒有義務採納結果；也有評論批評哈伯瑪斯機器把審議化約成最佳化一份聲明。判斷：工具不保證民主，關鍵在制度是否承諾回應。</li>
<li><b>AI 該管多少？</b>Steven Poole 批評《Nexus》語氣近乎末日、處方平淡；南韓 AI 基本法被評為罰則輕、寬限長；歐洲理事會《AI 框架公約》截至 2026 年年中尚未生效。判斷：原則容易寫、執行很難，「AI 內容要標示」是少數跨陣營的共同規則。</li>
<li><b>正念與「AI 讓人變笨」都被過度推銷？</b>Van Dam 等（2018）指出正念研究定義與對照組薄弱；Galante 等（2021）發現正念不比運動等活動好；MIT 媒體實驗室的腦電圖研究仍是未經審查的初步研究（預印本）。判斷：兩邊都要看設計與對照組。</li>
</ul>` },
    { h: "臺灣與亞洲視角", b: `<ul>
<li><b>臺灣《人工智慧基本法》2026 年 1 月 14 日公布施行：</b>全文 20 條、七項基本原則（含人類自主、透明與可解釋、問責），但本身沒有罰則，要靠子法落實。<a href="https://news.pts.org.tw/article/809353" target="_blank" rel="noopener">來源</a></li>
<li><b>vTaiwan 與對齊大會：</b>Pol.is 把 Uber 爭議的 1,238 名參與者分成兩群，第一主成分解釋 22% 變異；2024 年數位部發出 20 萬封簡訊、最後 447 人審議詐騙與深偽，數位部表示結論被納入打詐專法草案。<a href="https://moda.gov.tw/en/major-policies/alignment-assemblies/2024-deliberative-assembly/1521" target="_blank" rel="noopener">來源</a></li>
<li><b>亞洲三種路線：</b>南韓 AI 基本法 2026 年 1 月施行、有罰則；日本 AI 推進法沒有罰款、以基本方針推動；中國以辦法要求 AI 生成內容標示。<a href="https://www.cooley.com/news/insight/2026/2026-01-27-south-koreas-ai-basic-act-overview-and-key-takeaways" target="_blank" rel="noopener">來源</a></li>
</ul>` },
    { h: "動手模擬", b: `<ul>
<li><b>Pol.is 意見地圖：</b>以 vTaiwan Uber 案為尺度合成 1,238 人 × 98 則意見的投票矩陣（同意 +1、不同意 −1、略過 0），用主成分分析攤平成二維、k-means 分群，再算跨群共識 $C(c)=\prod_g \frac{1+N_{\text{agree}}}{2+N}$。看「總同意數最高」與「跨群共識最高」選出的句子有什麼不同（合成資料，只用來校準，不是原始資料）。</li>
<li><b>群眾智慧的網路結構：</b>依 Becker 等（2017），40 人三輪估計，每人用 $x'=\alpha x+(1-\alpha)\bar x_{N}$ 修正，越準的人 $\alpha$ 越大。比較去中心化網路、中心人物偏向正確、中心人物偏離三種情況的誤差曲線：下降、驟降、上升。</li>
</ul>` },
    { h: "思考題", b: `<ol>
<li>如果法律規定「AI 必須表明自己不是人」，你覺得還不夠嗎？還需要哪一種制度，才能讓你在網路上信任「對方是誰」？</li>
<li>臺灣的審議實驗發現，討論過後，民眾反而比較不堅持「公開演算法」，而更在意「平台要負責」。你覺得「看得懂」和「有人負責」，哪一個對你更重要？為什麼？</li>
<li>同一個 AI，可以替你寫答案，也可以逼你自己想。請回想你最近一次用 AI 寫作業或做工作，它是你的拐杖還是教練？下次你會怎麼改用法？</li>
</ol>` },
    { h: "延伸閱讀", b: `<ul>
<li>哈拉瑞《Nexus》〈Democracies: Can We Still Hold a Conversation?〉〈The Silicon Curtain〉與後記；《21 世紀的 21 堂課》〈Work〉〈Education〉〈Meditation〉。</li>
<li>Small 等：Polis: Scaling Deliberation by Mapping High Dimensional Opinion Spaces <a href="https://doi.org/10.6035/recerca.5516" target="_blank" rel="noopener">來源</a></li>
<li>史丹佛審議民主實驗室：臺灣「運用 AI 促進資訊完整性」審議 <a href="https://deliberation.stanford.edu/taiwan-deliberation-utilizing-ai-enhance-information-integrity" target="_blank" rel="noopener">來源</a></li>
<li>Becker、Brackbill、Centola：Network dynamics of social influence in the wisdom of crowds <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5495222" target="_blank" rel="noopener">來源</a></li>
</ul>` }
  ],
  quiz: [
    { q: "歐盟 2026 年的數位綜合法案修正後，哪一類規定沒有延後，2026 年 8 月 2 日起適用？", o: ["徵才、信用評分等高風險系統的義務", "第 50 條透明義務：聊天機器人須告知自己是 AI、深偽須標示", "所有 AI 模型都必須開放原始碼", "禁止所有生成式 AI 上市"], a: 1, w: "歐盟選擇「延後高風險、守住透明」：高風險條款延到 2027–2028 年，第 50 條照常上路，形同部分落實哈拉瑞「禁止假冒人類」的主張。" },
    { q: "Pol.is 的「跨群共識」為什麼能避免多數暴力？", o: ["它只採計人數最多那一群的意見", "它把少數群的票刪掉以加快計算", "它用自然語言處理判斷誰說得最有道理", "它把各群的同意機率相乘，只要有一群不同意分數就被拉低"], a: 3, w: "乘積設計讓「只有大群同意」的句子排不到最上面，必須每一群都點頭。Pol.is 也不做自然語言處理，所以不受語言限制。" },
    { q: "Becker 等人的群眾智慧實驗中，為什麼去中心化網路越討論越準？", o: ["越準的人越不改答案、越不準的人改越多，準確者的影響力自然變大", "實驗者私下告訴大家正確答案", "每個人都只相信網路中心的那個人", "大家討論後全部改成同一個答案"], a: 0, w: "自我權重與準確度相關，讓好答案在網路裡擴散；反之，中心化網路把成敗押在單一節點，中心人物偏離時誤差反而上升 19%。" },
    { q: "關於 AI 對就業的影響，目前證據最支持哪個說法？", o: ["AI 已造成全面性大規模失業", "AI 對任何工作者都沒有影響", "衝擊不均衡，先打在年輕入門者；整體勞動市場效果仍小", "AI 只會讓資深員工的生產力提高"], a: 2, w: "「金絲雀」論文顯示 22–25 歲高暴露職業就業相對下降，丹麥全國資料則近乎零效果；客服研究也發現 AI 最幫新手，而非資深者。" },
    { q: "對齊大會審議後出現了什麼反直覺的結果？", o: ["民眾全面反對平台負責", "民眾一致要求禁止所有 AI", "知識題答對數下降", "「平台應公開演算法」的支持度反而下降，民眾更在意平台負責"], a: 3, w: "審議後 85.3% 認為平台應負主要責任，但支持公開演算法的比例下降 27.5 個百分點到 55.6%。「看得懂」和「有人負責」是兩回事。" },
    { q: "把正念研究和哈拉瑞的內觀經驗放在一起看，比較合理的結論是？", o: ["正念是工具之一，有效但不是特效藥，不能推論全校教正念就有效", "正念完全無效，應該全面停止", "只要每天打坐兩小時，人人都能不被演算法駭入", "正念的效果遠大於運動和任何其他活動"], a: 0, w: "成人試驗顯示正念比不介入好，但不比運動等活動好；校本正念課一年後未優於一般課程。哈拉瑞的修習是長時間、高強度的個人選擇。" }
  ],
  next: "系列回顧：從智人用故事連成網，到農業、金錢、科學與資本把網越織越大，再到演算法與 AI 成為網路的新成員，十集走下來的答案是：網路越強大，越需要讓人與制度都保有自我修正的能力。"
}
