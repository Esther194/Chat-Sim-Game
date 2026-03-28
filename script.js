var A = [0, 0, 0, 0, 0, 0, 0];
var B = 2;
var Lin=[[],[]],Yu=[[],[]],ren=[[],[]],Hayes=[[],[]],
  Dad=[[],[]],Mom=[[],[]];

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
  switch (B) {
    case 0://通識報告
      var p1 = [
        "早安，胖胖。",
        "早，阿仁我們是同堂通識對不對",
        "嘿阿，我想做跟同性議題相關的報告，你找到人了嗎",
        "沒，不然我們一組好了",
        "好啊",
        "我要去上課了，先下線拉88"
      ];
      
      var s1 = [
        "left",
        "right",
        "left",
        "right",
        "left",
        "right",
      ]
      addp(p1,s1, 5, 1, 4, 1);
      ren[0].push(...p1);
      ren[1].push(...s1);
      A[0] += 1;
      break;

    case 1:
      var p1 = [
        "設定超過內容高度時出現捲軸1",
        "設定超過內容高度時出現捲軸1",
        "設定超過內容高度時出現捲軸1"
      ];
      var s1 = [
        "left",
        "right",
        "left",
        "right",
        "left",
        "right",
      ]
      addp(p1, s1,0, 2, 0, 1);
      ren[0].push(...p1);
      ren[1].push(...s1);
      break;
      Yu[0].push(...p1);
      Yu[1].push(...s1);

    case 2://期末考複習
      var p1 = [
        "欸，胖胖，快要期末考了，老師上課的東西我都忘光光了，陪我複習好不好",
      ];
      var s1 = [
        "left",
      ]
      addp(p1,s1, 0, 1, 0, 0,"好啊","不要");
      ren[0].push(...p1);
      ren[1].push(...s1);
      break;
    case 2.1:
      var p1 = [
        "好呀，當然沒問題",
        "就知道你對我最好了"
      ];
      var s1 = [
        "right",
        "left"
      ]
      B=2.01;
      addp(p1,s1,7);
      ren[0].push(...p1);
      ren[1].push(...s1);
      break;
      
    case 2.2:
      var p1 = [
        "不要，我又沒忘，你自己複習吧，我先去玩囉",
        "小氣鬼！我自己複習去了！",
      ];
      var s1 = [
        "right",
        "left"
      ]
      addp(p1, s1,7);
      ren[0].push(...p1);
      ren[1].push(...s1);
      break;
      
    case 2.01:
      var p1 = [
        "你還記不記得什麼是強制性碳市場啊？老師說要考，但我都忘光了"
      ];
      var s1 = [
        "left"
      ]
      addp(p1, s1,0,1,0,0,"知道","不知道",2.91);
      ren[0].push(...p1);
      ren[1].push(...s1);
      break;
    
    case 2.11:
      var p1 = [
        "當然知道啊，分為三種，1.清潔發展機制：已開發國家提供資金和技術，與開發中國家合作減少排碳。2. 聯合履行：已開發國家提供資金或技術與另一個已開發國家進行減碳，將所減少的減碳量轉讓給投入技術和資金之一方，以履行其議定書之義務。3. 排放交易：一個已開發國家，將其超額完成減排量，以貿易的方式轉讓給另外一個未完成減排義務的國家。",
        "嗚嗚嗚，你好厲害，我就靠你了",
        "那排減有幾種啊？我好像記得有一種還三種，是幾種啊？"
      ];
      var s1 = [
        "right",
        "left",
        "left"
      ]
      addp(p1, s1,0, 1, 0, 0,"知道","不知道",2.91);
      ren[0].push(...p1);
      ren[1].push(...s1);
      break;
    
    case 2.21:
      var p1 = [
        "是兩種啦！有配額型交易跟項目型交易。你真的忘得很徹底欸",
        "大神快教我，什麼是配額型交易"
      ];
      var s1 = [
        "right",
        "left"
      ]
      addp(p1, s1,0, 1, 0, 0,"知道","不知道",2.91);
      ren[0].push(...p1);
      ren[1].push(...s1);
      break;
    case 2.31:
      var p1 = [
        "那是由國家主管機關制定「碳排放總量管制」，設定減量目標，政府再將「排放配額」給受管制企業，企業可根據需求做買賣。進一步舉例來說，若A公司對碳排放有超額的需求，則可向有效減排的B公司購買碳權。換句話說B公司實際排放量小於政府給予的排放配額，多餘的配額則可賣出，從中獲利。A公司可以以相對低的成本達成排放目標，否則將面臨罰鍰或者以更高的支付成本完成減碳。",
        "那項目型交易又是什麼？"
      ];
      var s1 = [
        "right",
        "left"
      ]
      addp(p1, s1,0, 1, 0, 0,"知道","不知道",2.91);
      ren[0].push(...p1);
      ren[1].push(...s1);
      break;
    case 2.41:
      var p1 = [
        "項目型交易是因進行減排項目所產生的減排單位的交易，如清潔發展機制下的「排放減量權證」、聯合履行機制下的「排放減量單位」，主要是透過國與國合作的排減計畫產生的減排量交易。",
        "謝謝你，如果不是你，我就要被當了，我們期末考完一起出去玩吧"
      ];
      var s1 = [
        "right",
        "left"
      ]
      addp(p1, s1,7);
      ren[0].push(...p1);
      ren[1].push(...s1);
      break;
    case 2.91:
      var p1 = [
        "...那是什麼？我不會也要被當了吧",
        "你也不知道嗎？那我們怎麼辦",
        "去問Hayes吧"
      ];
      var s1 = [
        "right",
        "left",
        "right"
      ]
      addp(p1, s1,7);
      ren[0].push(...p1);
      ren[1].push(...s1);
      break;
      
    
    case 3:
      var p1 = [
        "設定超過內容高度時出現捲軸3",
        "設定超過內容高度時出現捲軸3",
        "設定超過內容高度時出現捲軸3"
      ];
      var s1 = [
        "left",
        "right",
        "left",
        "right",
        "left",
        "right",
      ]
      addp(p1,s1, 0, 2, 0, 1);
      break;
      
    case 4:
      var p1 = [
        "設定超過內容高度時出現捲軸4",
        "設定超過內容高度時出現捲軸4",
        "設定超過內容高度時出現捲軸4"
      ];
      var s1 = [
        "left",
        "right",
        "left",
        "right",
        "left",
        "right",
      ]
      addp(p1,s1, 6, 0, 6, 1);
      
      break;
   
      case 5:
      if (f === 0) {
            var p1 = [
              "設定超過內容高度時出現捲軸",
              "設定超過內容高度時出現捲軸",
              "設定超過內容高度時出現捲軸"
            ];
            var s1 = [
              "left",
              "right",
              "left",
              "right",
              "left",
              "right",
            ]
            addp(p1,s1, 7);
          } else {
            var p1 = [
              "設定超過內容高度時出現捲軸1",
              "設定超過內容高度時出現捲軸1",
              "設定超過內容高度時出現捲軸1"
            ];
            var s1 = [
              "left",
              "right",
              "left",
              "right",
              "left",
              "right",
            ]
            addp(p1,s1, 7);
          }
      break;
  } 
}

//新增對話
function addp(p1, s1,n1, plus1 = 0, n2 = 0, plus2 = 0,A1=01,B1=02,B2=0,delay = 1000) {
  var conversation = p1;
  var style1=s1;
  for (var i = 0; i < conversation.length; i++) {
    (function(index) {
      setTimeout(function() {
        var p = document.createElement("p");
        var span = document.createElement("span");
        span.textContent = conversation[index];
        span.classList.add(style1[index]);
        p.appendChild(span);
        p.appendChild(document.createElement("br"));
        box1.appendChild(p);

        if (index === conversation.length - 1 && n1 !== 7) {
          var button1 = document.createElement("button");
          button1.innerHTML = A1;
          button1.onclick = function() {
            B += 0.1;
            click1(n1, plus1);
          };

          var button2 = document.createElement("button");
          button2.innerHTML = B1;
          button2.onclick = function() {
            B += 0.2;
            if(B2 != 0){
              B=B2;
            }
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
  button6.innerHTML = "仁方";
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
        addp(Lin[0],Lin[1],7,0,0,0,0,0,0,0);
        break;

      case 2:
        addh("俞左容")
        addp(Yu[0],Yu[1],7,0,0,0,0,0,0,0);
        break;

      case 3:
        addh("爸爸")
        addp(Dad[0],Dad[1],7,0,0,0,0,0,0,0);
        break;
      
      case 4:
        addh("媽媽")
        addp(Mom[0],Mom[1],7,0,0,0,0,0,0,0);
        break;
      
      case 5:
        addh("Hayes")
        addp(Hayes[0],Hayes[1],7,0,0,0,0,0,0,0);
        break;
      
      case 6:
        addh("仁方")
        addp(ren[0],ren[1],7,0,0,0,0,0,0,0);
        break;
  }
}