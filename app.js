//   Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, 2 дугаар тоглогчийг 1 гэж нэрлэе
var activePlayer = 0;
// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
//  Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;
// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.

//window.document.querySelector("#score-0").textContent = dice;
// document.querySelector("#score-1").textContent = dice;
// document.querySelector("#score-1").innerHTML = "<em>Yes!</em>";
//console.log("Шоо :" + dice);

// Програм эхлэхэд бэлтгэе
document.getElementById("score-0").textContent = 0;
document.getElementById("current-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
var diceDome = document.querySelector(".dice");
console.log(typeof diceDome);

diceDome.style.display = "none";

// шоог шидэх эвент listener
document.querySelector(".btn-roll").addEventListener("click", function() {
  // 1-6 доторх санамсаргүй нэг тоо гаргаж авна
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  // шооны зургийг вэб дээр гаргаж ирнэ.
  diceDome.style.display = "block";

  // Буусан санамсаргүй тоонд харгалзах шооны зургйиг вэб дээр гаргаж ирнэ.
  diceDome.src = "dice-" + diceNumber + ".png";

  // тоглогчийн ээлжийг өөрчилнө
  //   Буусан тоо нь 1-ээс ялгаатай бол идэвхитэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ.

  if (diceNumber !== 1) {
    // 1-s yalgaatai too buulaa.
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // 1 buusan tul toglogchiin eeljig ene hesegt solij ugnu.
    switchToNextPlayer();
  }
});

// HOLD Товчны эвент листенер

document.querySelector(".btn-hold").addEventListener("click", function() {
  // Уг тоглогчийн цуглуулсан ээлжийн оноог глобал оноон дээр нэмж өгнө.
  scores[activePlayer] = scores[activePlayer] + roundScore;
  // Дэлгэц дээр оноог нь өөрчилнө.
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  // Уг тоглогчийг хожсон эсэхийг ( score 100 -s lot) шалгах
  if (scores[activePlayer] >= 100) {
    // Ялагч гэсэн текстийг нэрнийх оронд гаргана.
    document.getElementById("name-" + activePlayer).textContent = "WINNER";
    document
      .querySelector(".player- '" + activePlayer + "' - panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    // Тоглогчийн ээлжийг солино
    switchToNextPlayer();
  }
});

// Энэ функц нь тоглогчийн ээлжийг дараачийн тоглогч руу шилжүүлнэ.
function switchToNextPlayer() {
  // энэ тоглогчийн ээлжиндээ цуглуулсан оноог  0 болгоно.
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  // Тоглогчийн ээлжийг нөгөө тоглогч руу шилжүүлнэ
  // хэрэв идэвхитэй тоглогч 0 байвал идэвхитэй тоглогчийг 1 болго.
  // Үгүй бол идэвхитэй тоглогчийг 0 болго
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // Улаан цэгийг шилжүүлэх.
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  // шоог түр алга болгоно
  diceDome.style.display = "none";
}

// шинэ тоглоом эхлүүлэх
document.querySelector(".btn-new").addEventListener("click", function() {});
