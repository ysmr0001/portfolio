// const RandomN = Math.random();
// document.getElementById("test").textContent = "今日のラッキーナンバーは" + Math.floor(RandomN * 100 + 1);

// const kuji = ["大吉", "中吉", "小吉", "末吉", "まぁまぁ", "凶"];
// const kujin = Math.floor(Math.random() * kuji.length);
// document.getElementById("kuji").textContent = "凶の運勢は" + kuji[kujin];


// const nekopos = 195
// const takuhaicompact = 380
// const nekopos = 195

// document.getElementById("price").addEventListener("click", function(){
//   console.log("クリック成功");
// });

var str = "";
var shipping = document.sfl.shipping;

function clickBtn1(){

	for (let i = 0; i < shipping.length; i++){
		if(shipping[i].checked){ 
			str = shipping[i].value;
			break;
		}
	}
	document.getElementById("span1").textContent = "¥" + str;

}


var button = document.getElementById("button");
var ten = 0.1;

button.addEventListener("click", function(e){
  e.preventDefault();

  var inputPrice = document.getElementById("price").value;
  var sum = inputPrice * 0.9;
  
  var result = document.getElementById("result");
  result.textContent = Math.floor( sum - str );

});