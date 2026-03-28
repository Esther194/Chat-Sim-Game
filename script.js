var A = [0, 0, 0, 0, 0, 0];
var B = 0;

function click1(i, value) {
  A[i] += value;

  switch (B) {
    case 0:
      var p1 = [
        "設定超過內容高度時出現捲軸0",
        "設定超過內容高度時出現捲軸0",
        "設定超過內容高度時出現捲軸0"
      ];
      addp(p1);
      break;

    case 1:
      var p1 = [
        "設定超過內容高度時出現捲軸0",
        "設定超過內容高度時出現捲軸1",
        "設定超過內容高度時出現捲軸2"
      ];
      addp(p1);
      break;

    case 2:
      var p1 = [
        "設定超過內容高度時出現捲軸1",
        "設定超過內容高度時出現捲軸2",
        "設定超過內容高度時出現捲軸3"
      ];
      addp(p1);
      break;

    case 3:
      var p1 = [
        "設定超過內容高度時出現捲軸2",
        "設定超過內容高度時出現捲軸3",
        "設定超過內容高度時出現捲軸4"
      ];
      addp(p1);
      break;
      case 4:
      var p1 = [
        "設定超過內容高度時出現捲軸2",
        "設定超過內容高度時出現捲軸3",
        "設定超過內容高度時出現捲軸4"
      ];
      addp(p1);
      break;
  }

  B += 1;
}

function addp(p1) {
  var conversation = p1;
  var b = document.getElementById("content");
  var delay = 500;

  for (var i = 0; i < conversation.length; i++) {
    (function(index) {
      setTimeout(function() {
        var p = document.createElement("p");
        var span = document.createElement("span");
        span.textContent = conversation[index];
        span.classList.add("left");
        p.appendChild(span);
        p.appendChild(document.createElement("br"));

        b.appendChild(p);
      }, delay * index);
    })(i);
  }
}
