function chonXe() {
  var result;
  var uberX = document.getElementById("uberX").checked;
  var uberSUV = document.getElementById("uberSUV").checked;
  var uberBlack = document.getElementById("uberBlack").checked;
  if (uberX) {
    result = "uberX";
  } else if (uberSUV) {
    result = "uberSUV";
  } else if (uberBlack) {
    result = "uberBlack";
  }
  return result;
}
function tinhTien() {
  var km = document.getElementById("km").value;
  km = parseFloat(km);
  var time = document.getElementById("time").value;
  time = parseFloat(time);
  var ThanhTien = document.getElementById("divThanhTien");
  ThanhTien.style.display = "block";
  var spanXuatTien = document.getElementById("xuatTien");

  var xuatTienHD = document.getElementById("xuatTienHD");
  var chiTietXe = document.getElementById("chiTiet");
  var kmSuDung = document.getElementById("suDungKm");
  var donGiaXe = document.getElementById("donGia");
  var spanThanhTien = document.getElementById("thanhTien");
  var timeSuDung = document.getElementById("suDungTime");
  var giaTime = document.getElementById("donGiaTime");
  var spanThanhTienTime = document.getElementById("thanhTienTime");
  //Chon loai xe va tinh tien
  var chonLoaiXe = chonXe();
  switch (chonLoaiXe) {
    case "uberX":
      if (km > 0 && km <= 1) {
        var tongTien = parseFloat(km) * 8000 + parseFloat(time) * 2000;
        spanXuatTien.innerHTML = tongTien;
        donGiaXe.innerHTML = 8000;
        var thanhTien = 8000 * parseFloat(km);
        spanThanhTien.innerHTML = parseFloat(thanhTien);
      } else if (1 < km && km <= 20) {
        var tongTien =
          1 * 8000 + (parseFloat(km) - 1) * 12000 + parseFloat(time) * 2000;
        spanXuatTien.innerHTML = tongTien;
        donGiaXe.innerHTML = 12000;
        var thanhTien = 12000 * parseFloat(km);
        spanThanhTien.innerHTML = parseFloat(thanhTien);
      } else if (km > 20) {
        var tongTien =
          1 * 8000 +
          20 * 12000 +
          (parseFloat(km) - 21) * 10000 +
          parseFloat(time) * 2000;
        spanXuatTien.innerHTML = tongTien;
        donGiaXe.innerHTML = 10000;
        var thanhTien = 10000 * parseFloat(km);
        spanThanhTien.innerHTML = parseFloat(thanhTien);
      }
      xuatTienHD.innerHTML = tongTien;
      chiTietXe.innerHTML = chonLoaiXe;
      kmSuDung.innerHTML = km;

      timeSuDung.innerHTML = time;
      giaTime.innerHTML = 2000;
      var tongTienTime = 2000 * parseFloat(time);
      spanThanhTienTime.innerHTML = tongTienTime;
      break;
    case "uberSUV":
      if (km > 0 && km <= 1) {
        var tongTien = parseFloat(km) * 9000 + parseFloat(time) * 3000;
        spanXuatTien.innerHTML = tongTien;
        donGiaXe.innerHTML = 9000;
        var thanhTien = 9000 * parseFloat(km);
        spanThanhTien.innerHTML = parseFloat(thanhTien);
      } else if (1 < km && km <= 20) {
        var tongTien =
          1 * 9000 + (parseFloat(km) - 1) * 14000 + parseFloat(time) * 3000;
        spanXuatTien.innerHTML = tongTien;
        donGiaXe.innerHTML = 14000;
        var thanhTien = 14000 * parseFloat(km);
        spanThanhTien.innerHTML = parseFloat(thanhTien);
      } else if (km > 20) {
        var tongTien =
          1 * 9000 +
          20 * 14000 +
          (parseFloat(km) - 21) * 13000 +
          parseFloat(time) * 3000;
        spanXuatTien.innerHTML = tongTien;
        donGiaXe.innerHTML = 13000;
        var thanhTien = 13000 * parseFloat(km);
        spanThanhTien.innerHTML = parseFloat(thanhTien);
      }
      xuatTienHD.innerHTML = tongTien;
      chiTietXe.innerHTML = chonLoaiXe;
      kmSuDung.innerHTML = km;

      timeSuDung.innerHTML = time;
      giaTime.innerHTML = 3000;
      var tongTienTime = 3000 * parseFloat(time);
      spanThanhTienTime.innerHTML = tongTienTime;
      break;
    case "uberBlack":
      if (km > 0 && km <= 1) {
        var tongTien = parseFloat(km) * 10000 + parseFloat(time) * 4000;
        spanXuatTien.innerHTML = tongTien;
        donGiaXe.innerHTML = 10000;
        var thanhTien = 10000 * parseFloat(km);
        spanThanhTien.innerHTML = parseFloat(thanhTien);
      } else if (1 < km && km <= 20) {
        var tongTien =
          1 * 10000 + (parseFloat(km) - 1) * 16000 + parseFloat(time) * 4000;
        spanXuatTien.innerHTML = tongTien;
        donGiaXe.innerHTML = 16000;
        var thanhTien = 16000 * parseFloat(km);
        spanThanhTien.innerHTML = parseFloat(thanhTien);
      } else if (km > 20) {
        var tongTien =
          1 * 10000 +
          20 * 16000 +
          (parseFloat(km) - 21) * 14000 +
          parseFloat(time) * 4000;
        spanXuatTien.innerHTML = tongTien;
        donGiaXe.innerHTML = 14000;
        var thanhTien = 14000 * parseFloat(km);
        spanThanhTien.innerHTML = parseFloat(thanhTien);
      }
      xuatTienHD.innerHTML = tongTien;
      chiTietXe.innerHTML = chonLoaiXe;
      kmSuDung.innerHTML = km;

      timeSuDung.innerHTML = time;
      giaTime.innerHTML = 4000;
      var tongTienTime = 4000 * parseFloat(time);
      spanThanhTienTime.innerHTML = tongTienTime;
      break;
  }
  // var tongTien = parseFloat(km)*2000 + parseFloat(time)*1000;
  // spanXuatTien.innerHTML = tongTien;
}
