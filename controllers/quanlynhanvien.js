var nhanVien = new NhanVien();


document.getElementById('btnHienThi').onclick = function () {
    nhanVien.maNhanVien = document.querySelector('#maNhanVien').value;
    nhanVien.tenNhanVien = document.querySelector('#tenNhanVien').value;
    var slChucVu = document.querySelector('#chucVu')
    // selectedIndex : lấy ra vị trí của option được chọn 
    var viTriOption = slChucVu.selectedIndex ;
    nhanVien.chucVu = slChucVu[viTriOption].innerHTML;
    nhanVien.heSoLuong = document.querySelector('#chucVu').value;
    nhanVien.luongCoBan = +document.querySelector('#luongCoBan').value;
    nhanVien.soGioLam = +document.querySelector('#soGioLam').value;
    document.getElementById('txt_maNhanVien').innerHTML = nhanVien.maNhanVien;
    document.getElementById('txt_tenNhanVien').innerHTML = nhanVien.tenNhanVien;
    document.getElementById('txt_chucVu').innerHTML = nhanVien.chucVu;
    document.getElementById('txt_heSoLuong').innerHTML = nhanVien.heSoLuong;
    document.getElementById('txt_tongLuong').innerHTML = nhanVien.tinhTongLuong();
}