var A = [0, 0, 0, 0, 0, 0, 0];
var B = 0;
var Lin=[],Yu=[],ren=[],Hayes=[],Dad=[],Mom=[];

function click1(n, plus) {
  var button1 = document.querySelector("button");
  button1.parentNode.removeChild(button1);
  var button2 = document.querySelector("button");
  button2.parentNode.removeChild(button2);
  
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

function addp(p1, n1, plus1 = 0, n2 = 0, plus2 = 0, delay = 500) {
  var conversation = p1;
  var box1 = document.getElementById("content");
  var box2 = document.getElementById("footer");
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

