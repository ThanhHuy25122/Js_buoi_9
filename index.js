var arr = [-3, 9, -123, 13, -3, 4.2, 5.5, 7, 3, 5, 7];

document.getElementById("arr").innerHTML = " Mảng : " + arr;

function ex1() {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      sum += arr[i];
    }
  }
  document.getElementById("ex1").innerHTML =
    " Tổng các số dương trong mảng :" + sum;
  document.getElementById("arrEx1").innerHTML = "Mảng :" + arr;
}

function ex2() {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      count++;
    }
  }
  document.getElementById("ex2").innerHTML =
    " Só các số dương trong mảng :" + count;
  document.getElementById("arrEx2").innerHTML = "Mảng :" + arr;
}

function ex3() {
  var min = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  document.getElementById("ex3").innerHTML =
    " Só các nhỏ nhất trong mảng :" + min;
  document.getElementById("arrEx3").innerHTML = "Mảng :" + arr;
}

function ex4() {
  var min = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      if (min > arr[i] || min < 0) {
        min = arr[i];
      }
    }
  }
  document.getElementById("ex4").innerHTML =
    " Số dương nhỏ nhất trong mảng :" + min;
  document.getElementById("arrEx4").innerHTML = "Mảng :" + arr;
}

function ex5() {
  for (var i = arr.length - 1; i >= 0; i--) {
    var isFlag;
    if (arr[i] % 2 === 0 && arr[i] > 0) {
      isFlag++;
      return (document.getElementById("ex5").innerHTML =
        " Số chẵn cuối cùng của mảng :" + arr[i]);
    }
  }
  if (!isFlag) {
    return (document.getElementById("ex5").innerHTML =
      " Không có số chẵn trong mảng : " + -1);
  }
}

document.getElementById("arrEx6").innerHTML = "Mảng :" + arr;

function ex6() {
  var x = 0;
  for (var i = arr.length - 1; i >= 0; i--) {
    x++;
  }

  var firstSwap = +document.getElementById("firstSwap").value;
  var secondSwap = +document.getElementById("secondSwap").value;
  var swap;
  if ((firstSwap < 0 && firstSwap > x) || (secondSwap < 0 && secondSwap > x)) {
    return alert("Nhập trong khoảng từ 1 -> " + x);
  } else if (firstSwap === secondSwap) {
    return alert(" Vị trí giống nhau ");
  } else {
    swap = arr[firstSwap - 1];
    arr[firstSwap - 1] = arr[secondSwap - 1];
    arr[secondSwap - 1] = swap;
    console.log(firstSwap);
  }

  document.getElementById("ex6").innerHTML = "Mảng sau khi đổi chỗ " + arr;
}

document.getElementById("arrEx7").innerHTML = "Mảng :" + arr;

function ex7() {
  var isSwapped = false;
  for (var k = arr.length - 1; k >= 0; k--) {
    for (var i = 0; i < k; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      return (document.getElementById("ex7").innerHTML =
        "Mảng đã theo thứ tự tăng dần");
    }
  }
  document.getElementById("ex7").innerHTML = "Mảng sau khi sắp xếp " + arr;
}