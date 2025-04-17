const foods = [
   "🍜 라면", 
   "🍙 김밥", 
   "🍗 치킨", 
   "🍕 피자", 
   "🍛 카레", 
   "🥟 만두", 
   "🍣 초밥", 
   "🥗 샐러드", 
   "🍔 햄버거", 
   "🌮 타코", 
   "🍚 제육덮밥",
   "🥘 김치찌개",
   "🍲 부대찌개",
   "🍳 계란말이",
   "🥩 스테이크",
   "🍝 파스타",
   "🥖 바게트 샌드위치",
   "🍤 새우튀김",
   "🍥 우동",
   "🍩 도넛",
   "🧀 치즈볼",
   "🍮 푸딩",
   "🧇 와플",
   "🍧 팥빙수",
   "🍵 말차라떼",
   "🍰 치즈케이크",
   "🍴 스팸마요덮밥",
   "🌯 부리또",
   "🍜 탄탄멘",
   "🍲 곱창전골"
 ];
 

function getRandomFood() {
   const randomIndex = Math.floor(Math.random() * foods.length);
   document.getElementById("result").textContent = foods[randomIndex];
}