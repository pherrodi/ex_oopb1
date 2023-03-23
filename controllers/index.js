// tổ chức đối tượng object
// khai báo đối tượng

var thongTinSV = {
    ma : 'sv001',
    hoTen : 'nguyen van a',
    soDienThoai : '0909099009',
    tinhDiemTb: function() {

    }
};
// truy xuất biến trong đối tượng 
console.log('họ tên',thongTinSV.hoTen);


// truy xuất hàm trong đối tượng ( phương thức = method)


thongTinSV.tinhDiemTb()

/*
=> kai báo theo hướng đối tượng là đưa biến và hàm về đúng vị trí của nó object chứa : 
+ biến : thuộc tính (product- key)
+ hàm : phương thức ( method - key)
truy xuất thuộc tính và phương thức thì phải thông qua đối tượng
 */


/*
khi giải quyết 1 task , chức năng của frontend
b1 : dàn layout (100%)
b2 : xác định chức năng onclick , onchange ....
b3 : phân tích giao diện đó có các input nào cần lưu trữ , và output là gì => tổ chức đối tượng lưu trữ 
b4 : xác định output
b5 : xử lý sự kiện 

*/
var sinhVien = {
    maSinhVien : '',
    tenSinhVien : '',
    loaiSinhVien : '',
    diemToan : 0,
    diemVan : 0,
    tinhDiemTb : function () {
        var dtb = 0 ;
        dtb = (this.diemToan+this.diemVan)/2;
        return dtb;
    },
    xepLoaiSV : function () {
        var diemTb = this.tinhDiemTb() ;
        var xepLoai = '';
        if (diemTb >=5) {
            xepLoai = "Đậu";
        } else {
            xepLoai = "Rớt";
        }
        return xepLoai;
    }
}
document.getElementById('btnHienThi').onclick = function () {
   // input : maSinhVien , tenSinhVien ,. ... 
    sinhVien.maSinhVien = document.querySelector('#maSinhVien').value;
    sinhVien.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    sinhVien.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sinhVien.diemToan = +document.querySelector('#diemToan').value;
    sinhVien.diemVan = +document.querySelector('#diemVan').value;


    document.getElementById('txt_maSinhVien').innerHTML = sinhVien.maSinhVien ;
    document.getElementById('txt_tenSinhVien').innerHTML = sinhVien.tenSinhVien ;
    document.getElementById('txt_loaiSinhVien').innerHTML = sinhVien.loaiSinhVien ;
    var diemTb = sinhVien.tinhDiemTb(sinhVien.diemToan,sinhVien.diemVan);
    document.getElementById('txt_diemTb').innerHTML = diemTb;
    var xepLoai = sinhVien.xepLoaiSV();
    document.getElementById('txt_xepLoai').innerHTML = xepLoai;
    

}

