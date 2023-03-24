function SinhVien () {
    this.maSinhVien = '';
    this.tenSinhVien = '';
    this.loaiSinhVien = '';
    this.soDienThoai = 0;
    this.diemRenLuyen = 0;
    this.diemToan = 0;
    this.diemLy = 0;
    this.diemHoa = 0;
    this.tinhDiemTrungBinh = function () {
        var dtb = (this.diemHoa + this.diemLy + this.diemToan)/3;
        return dtb;
    }

}