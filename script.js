var A = [0, 0, 0, 0, 0, 0, 0];
var B = 0;
var Lin=["123","456"],Yu=[],ren=[],Hayes=[],Dad=[],Mom=[];

var box0 = document.getElementById("header");
var box1 = document.getElementById("content");
var box2 = document.getElementById("footer");
//故事本體
function click1(n, plus,f=0) {
  var buttons = document.querySelectorAll("button");
  for (var i = 2; i < buttons.length; i++) {
    buttons[i].parentNode.removeChild(buttons[i]);
  }
  
   
  A[n] += plus;
  
  var container = document.getElementById("footer");
  
  switch (B) {
    case 0:
      var p1 = [
        "設定超過內容高度時出現捲軸0",
        "設定超過內容高度時出現捲軸0",
        "設定超過內容高度時出現捲軸0"
      ];
      addp(p1, 5, 1, 4, 1);
      
      Lin=Lin.concat(p1);
      
      A[0] += 1;
      break;

    case 1:
      var p1 = [
        "設定超過內容高度時出現捲軸1",
        "設定超過內容高度時出現捲軸1",
        "設定超過內容高度時出現捲軸1"
      ];
      addp(p1, 0, 2, 0, 1);
      
      Yu=Yu.concat(p1);
      
      if (A[0] === 3) {
        A[2] += 2;
      } else {
        A[2] += 1;
      }
      break;

    case 2:
      var p1 = [
        "設定超過內容高度時出現捲軸2",
        "設定超過內容高度時出現捲軸2",
        "設定超過內容高度時出現捲軸2"
      ];
      addp(p1, 0, 1, 0, 0);
      if (A[0] === 4) {
        A[5] += 1;
      }
      break;

    case 3:
      var p1 = [
        "設定超過內容高度時出現捲軸3",
        "設定超過內容高度時出現捲軸3",
        "設定超過內容高度時出現捲軸3"
      ];
      addp(p1, 0, 2, 0, 1);
      break;
      
    case 4:
      var p1 = [
        "設定超過內容高度時出現捲軸4",
        "設定超過內容高度時出現捲軸4",
        "設定超過內容高度時出現捲軸4"
      ];
      addp(p1, 6, 0, 6, 1);
      break;
   
      case 5:
      if (A[6] == 0) {
            var p1 = [
              "設定超過內容高度時出現捲軸",
              "設定超過內容高度時出現捲軸",
              "設定超過內容高度時出現捲軸"
            ];
            addp(p1, 7);
          } else {
            var p1 = [
              "設定超過內容高度時出現捲軸1",
              "設定超過內容高度時出現捲軸1",
              "設定超過內容高度時出現捲軸1"
            ];
            addp(p1, 7);
          }
      break;
  }

  
}
//新增對話
function addp(p1, n1, plus1 = 0, n2 = 0, plus2 = 0, delay = 500) {
  var conversation = p1;
  var delay = delay;

  for (var i = 0; i < conversation.length; i++) {
    (function(index) {
      setTimeout(function() {
        var p = document.createElement("p");
        var span = document.createElement("span");
        span.textContent = conversation[index];
        span.classList.add("left");
        p.appendChild(span);
        p.appendChild(document.createElement("br"));
        box1.appendChild(p);

        if (index === conversation.length - 1 && n1 !== 7) {
          var button1 = document.createElement("button");
          button1.innerHTML = "01";
          button1.onclick = function() {
            B += 1;
            click1(n1, plus1);
          };

          var button2 = document.createElement("button");
          button2.innerHTML = "02";
          button2.onclick = function() {
            B += 2;
            click1(n2,plus2);
          };

          box2.appendChild(button1);
          box2.appendChild(button2);
        }

      }, delay * index);
    })(i);
  }
}

//新增聊天室名字
function addh(text) {
  var span = document.createElement("span");
  span.textContent = text;
  box0.appendChild(span);
}


//首頁
function clear1() {
      // 清空div中的文字
  document.getElementById("header").innerHTML = "";
  document.getElementById("content").innerHTML = "";
  document.getElementById("footer").innerHTML = "";
  box2.style.backgroundColor = "white";
  
  // 創建按鈕 1
  var button1 = document.createElement("button");
  button1.innerHTML = "1";
  button1.onclick = function() {
    chat(1);
  };
  box1.appendChild(button1);

  // 創建按鈕 2
  var button2 = document.createElement("button");
  button2.innerHTML = "2";
  button2.onclick = function() {
    chat(2);
  };
  box1.appendChild(button2);

  // 創建按鈕 3
  var button3 = document.createElement("button");
  button3.innerHTML = "3";
  button3.onclick = function() {
    chat(3);
  };
  box1.appendChild(button3);

// 創建按鈕 4
  var button4 = document.createElement("button");
  button4.innerHTML = "4";
  button4.onclick = function() {
    chat(4);
  };
  box1.appendChild(button4);

  // 創建按鈕 5
  var button5 = document.createElement("button");
  button5.innerHTML = "5";
  button5.onclick = function() {
    chat(5);
  };
  box1.appendChild(button5);

  // 創建按鈕 6
  var button6 = document.createElement("button");
  button6.innerHTML = "6";
  button6.onclick = function() {
    chat(6);
  };
  box1.appendChild(button6);
}

//聊天室
function chat(n){
  document.getElementById("header").innerHTML = "";
  document.getElementById("content").innerHTML = "";
  document.getElementById("footer").innerHTML = "";
  box2.style.backgroundColor = "#FFC78E";
  
  var button1 = document.createElement("button");
  button1.innerHTML = "&lt;";
  button1.onclick = function() {
    clear1(1)
  };
  button1.style.position = "absolute";
  button1.style.left = "0";
  button1.style.fontSize = "38px";
  box0.appendChild(button1);
  
  switch (n) {
      case 1:
        addh("林欣怡")
        addp(Lin,7,0,0,0,0);
        break;

      case 2:
        addh("俞左容")
        addp(Yu,7,0,0,0,0);
        break;

      case 3:
        addh("父親")
        addp(Dad,7,0,0,0,0);
        break;
      
      case 4:
        addh("母親")
        addp(Mom,7,0,0,0,0);
        break;
      
      case 5:
        addh("Hayes")
        addp(Hayes,7,0,0,0,0);
        break;
      
      case 6:
        addh("仁方")
        addp(ren,7,0,0,0,0);
        break;
  }
}