// ============================================================
//  影片連結（由 site_writeback.py 自動回寫，也可以手動改）
//  youtube ：影片 ID 或網址      short  ：直式重點版（Shorts）ID
//  duration：片長 "6:35"          sections：各小節開始秒數（數量＝小節數），null 用 content.js 預估
//  noVoice ：無旁白版 ID          mp4    ：自架 MP4（沒有 YouTube 時才用）
// ============================================================

window.SERIES_PLAYLIST = ""; // 系列播放清單網址（公開或不公開後才填）
window.SERIES_TRAILER = "";  // 系列前導片 ID（延續型系列）

window.VIDEO_LINKS = {
  u01: { youtube: "Grp9Zu7Lfp0", mp4: "", duration: "13:06", sections: [0, 108.8, 190.5, 255.5, 346.5, 442.9, 541.9, 631.1], noVoice: "", short: "" },
  u02: { youtube: "_4Rc05EHk8k", mp4: "", duration: "13:17", sections: [0, 82.6, 165.7, 239.8, 332.9, 427.8, 540.2, 638.7], noVoice: "", short: "" },
  u03: { youtube: "r8ls0T9ZBnY", mp4: "", duration: "13:17", sections: [0, 80.2, 171.8, 241.7, 340.3, 429, 532.5, 638.1], noVoice: "", short: "" },
  u04: { youtube: "", mp4: "", duration: "", sections: null, noVoice: "", short: "" },
  u05: { youtube: "", mp4: "", duration: "", sections: null, noVoice: "", short: "" },
  u06: { youtube: "", mp4: "", duration: "", sections: null, noVoice: "", short: "" },
  u07: { youtube: "", mp4: "", duration: "", sections: null, noVoice: "", short: "" },
  u08: { youtube: "", mp4: "", duration: "", sections: null, noVoice: "", short: "" },
  u09: { youtube: "", mp4: "", duration: "", sections: null, noVoice: "", short: "" },
  u10: { youtube: "", mp4: "", duration: "", sections: null, noVoice: "", short: "" }
};
