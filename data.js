// 課表資料 — 桃園市立桃園高級中等學校 1年5班 115學年度第1學期
// 節次時間與每節課程內容，依上傳的課表圖片建立
const SCHOOL_INFO = {
  school: "桃園市立桃園高級中等學校",
  term: "115學年度 第1學期",
  className: "1年5班",
  teacher: "陳聖芳",
};

// weekday: 1=一(週一) ... 5=五(週五)，對應 JS Date.getDay() 的 1~5
const PERIODS = [
  { id: "s1", label: "第一節", start: "08:00", end: "08:50" },
  { id: "s2", label: "第二節", start: "09:00", end: "09:50" },
  { id: "s3", label: "第三節", start: "10:10", end: "11:00" },
  { id: "s4", label: "第四節", start: "11:10", end: "12:00" },
  { id: "s5", label: "第五節", start: "13:00", end: "13:50" },
  { id: "s6", label: "第六節", start: "14:00", end: "14:50" },
  { id: "s7", label: "第七節", start: "15:00", end: "15:50" },
  { id: "s8", label: "第八節", start: "16:00", end: "16:50" },
];

// SCHEDULE[periodId][weekday] = { subject, teacher }
const SCHEDULE = {
  s1: {
    1: { subject: "地理", teacher: "陳聖芳" },
    2: { subject: "多元選修", teacher: "" },
    3: { subject: "生物", teacher: "楊承儒" },
    4: { subject: "本土語", teacher: "" },
    5: { subject: "數學", teacher: "楊錫鈞" },
  },
  s2: {
    1: { subject: "英語文", teacher: "陳美圻" },
    2: { subject: "多元選修", teacher: "" },
    3: { subject: "國語文", teacher: "吳博超" },
    4: { subject: "化學", teacher: "徐嘉偉" },
    5: { subject: "數學", teacher: "楊錫鈞" },
  },
  s3: {
    1: { subject: "生物", teacher: "楊承儒" },
    2: { subject: "生活科技", teacher: "陳偉民" },
    3: { subject: "英語文", teacher: "陳美圻" },
    4: { subject: "生命教育", teacher: "張維育" },
    5: { subject: "歷史", teacher: "趙文義" },
  },
  s4: {
    1: { subject: "國語文", teacher: "吳博超" },
    2: { subject: "生活科技", teacher: "陳偉民" },
    3: { subject: "化學", teacher: "徐嘉偉" },
    4: { subject: "公民與社會", teacher: "游謹庭" },
    5: { subject: "美術", teacher: "周運順" },
  },
  s5: {
    1: { subject: "自主學習", teacher: "" },
    2: { subject: "公民與社會", teacher: "游謹庭" },
    3: { subject: "歷史", teacher: "趙文義" },
    4: { subject: "國語文", teacher: "吳博超" },
    5: { subject: "彈性-特色活動", teacher: "" },
  },
  s6: {
    1: { subject: "數學", teacher: "楊錫鈞" },
    2: { subject: "國語文", teacher: "吳博超" },
    3: { subject: "體育", teacher: "李駿樂" },
    4: { subject: "英語文", teacher: "陳美圻" },
    5: { subject: "團體活動時間2", teacher: "陳聖芳" },
  },
  s7: {
    1: { subject: "體育", teacher: "李駿樂" },
    2: { subject: "英語文", teacher: "陳美圻" },
    3: { subject: "數學", teacher: "楊錫鈞" },
    4: { subject: "地理", teacher: "陳聖芳" },
    5: { subject: "彈性-特色活動", teacher: "" },
  },
  s8: {
    1: { subject: "國文輔導", teacher: "吳博超" },
    2: { subject: "自主（輔）", teacher: "" },
    3: { subject: "數學輔導", teacher: "楊錫鈞" },
    4: { subject: "英文輔導", teacher: "陳美圻" },
    5: null,
  },
};

const WEEKDAY_LABELS = { 1: "一", 2: "二", 3: "三", 4: "四", 5: "五" };
