// prototype : dùng để tạo ra format nhiều object 
function NhanVien () {
    this.maNhanVien = '';
    this.tenNhanVien = '';
    this.chucVu = '' ;
    this.heSoLuong = 0 ;
    this.luongCoBan = 0;
    this.soGioLam = 0;
    this.tinhTongLuong = function () {
        var tongLuong = 0;
        tongLuong = this.heSoLuong*this.luongCoBan*this.soGioLam;
        return tongLuong;
    },
  
}