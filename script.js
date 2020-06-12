const RandomN = Math.random();
document.getElementById("test").textContent = "今日のラッキーナンバーは" + Math.floor(RandomN * 100 + 1);

const kuji = ["大吉", "中吉", "小吉", "末吉", "まぁまぁ", "凶"];
const kujin = Math.floor(Math.random() * kuji.length);
document.getElementById("kuji").textContent = "凶の運勢は" + kuji[kujin];


document.getElementById("price")