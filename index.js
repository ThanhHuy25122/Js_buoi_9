var arr = [-3, 9, -123, 13, 0, -4.2, -5.5, -7, 3, 5, 7];

document.getElementById("arr").innerHTML = " Mảng : " + arr;

function ex1() {
  var arr = [-3, 9, -123, 13, 0, -4.2, -5.5, -7, 3, 5, 7];
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
  var arr = [-3, 9, -123, 13, 0, -4.2, -5.5, -7, 3, 5, 7];
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
  var arr = [-3, 9, -123, 13, 0, -4.2, -5.5, -7, 3, 5, 7];
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
  var arr = [-3, 9, -123, 13, 0, -4.2, -5.5, -7, 3, 5, 7];
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
  var arr = [-3, 9, -123, 13, 0, -4.2, -5.5, -7, 3, 5, 7];
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
  var arr = [-3, 9, -123, 13, 0, -4.2, -5.5, -7, 3, 5, 7];
  var x = 0;
  for (var i = arr.length - 1; i >= 0; i--) {
    x++;
  }

  var firstSwap = +document.getElementById("firstSwap").value;
  var secondSwap = +document.getElementById("secondSwap").value;
  var swap;
  if (firstSwap < 1 || firstSwap > x || secondSwap < 1 || secondSwap > x) {
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
  var arr = [-3, 9, -123, 13, 0, -4.2, -5.5, -7, 3, 5, 7];
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

document.getElementById("arrEx8").innerHTML = "Mảng :" + arr;

function ex8() {
  var arr = [-3, 9, -123, 13, 0, -4.2, -5.5, -7, 3, 5, 7];
  var isFlag = false;

  for (var i = 0; i < arr.length; i++) {
    var count = 0;
    if (arr[i] >= 2 && arr[i] % 1 == 0) {
      for (var y = 1; y <= arr[i]; y++) {
        if (arr[i] % y == 0) {
          count++;
        }
      }
    }
    if (count === 2) {
      isFlag = true;
      return (document.getElementById("ex8").innerHTML =
        " Số nguyên tố đầu tiên trong mảng :" + arr[i]);
    }
    console.log(arr[i]);
  }
  if (!isFlag) {
    return (document.getElementById("ex8").innerHTML =
      "Không có số nguyên tố trong mảng" + -1);
  }
}

document.getElementById("arrEx9").innerHTML = "Mảng :" + arr;

function ex9() {
  var arr = [-3, 9, -123, 13, 0, -4.2, -5.5, -7, 3, 5, 7];
  var isFlag = false;
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 1 == 0) {
      isFlag = true;
      count++;
    }
  }
  if (!isFlag) {
    return (document.getElementById("ex9").innerHTML =
      "Không có số nguyên trong mảng :" + -1);
  } else {
    return (document.getElementById("ex9").innerHTML =
      "Số các số nguyên trong mảng : " + count);
  }
}

document.getElementById("arrEx10").innerHTML = "Mảng :" + arr;

function ex10() {
  var arr = [-3, 9, -123, 13, 0, -4.2, -5.5, -7, 3, 5, 7];
  var count_a = 0;
  var count_d = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count_d++;
    } else if (arr[i] < 0) {
      count_a++;
    } else {
      continue;
    }
  }
  if (count_d > count_a) {
    return (document.getElementById("ex10").innerHTML =
      "Trong mảng có số lượng số dương nhiều hơn số âm ");
  } else if (count_d < count_a) {
    return (document.getElementById("ex10").innerHTML =
      "Trong mảng có số lượng số dương ít hơn số âm ");
  } else {
    return (document.getElementById("ex10").innerHTML =
      "Trong mảng có số lượng số dương bằng số âm ");
  }
}
