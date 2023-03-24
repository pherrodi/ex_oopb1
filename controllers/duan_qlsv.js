
// tạo ra biến array sinh viên để lưu trữ tất cả thông tin sinh viên 


var arrSinhVien = [];

document.querySelector('#formSinhVien').onsubmit = function(event) {
    event.preventDefault();
    var sv = new SinhVien();
    sv.maSinhVien = document.querySelector('#maSinhVien').value;
    sv.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sv.email = document.querySelector('#email').value;
    sv.soDienThoai = document.querySelector('#soDienThoai').value;
    sv.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    sv.diemRenLuyen = +document.querySelector('#diemRenLuyen').value;
    sv.diemHoa = +document.querySelector('#diemHoa').value;
    sv.diemLy = +document.querySelector('#diemLy').value;
    sv.diemToan = +document.querySelector('#diemToan').value;

    // đưa dữ liệu sinh viên vào array sau mỗi lần thêm dữ liệu

    /*  // output cách 1

    
    //     var trSinhVien = document.createElement('tr');
    
    //     var tdMaSinhVien = document.createElement('td');
    //     tdMaSinhVien.innerHTML = sv.maSinhVien;
        
    
    //     var tdTenSinhVien = document.createElement('td');
    //     tdTenSinhVien.innerHTML = sv.tenSinhVien;
        
    
    //     var tdEmail = document.createElement('td');
    //     tdEmail.innerHTML = sv.email;
        
    
    
    //     var tdSoDienThoai = document.createElement('td');
    //     tdSoDienThoai.innerHTML = sv.soDienThoai;
        
    
    //     var tdDiemTrungBinh = document.createElement('td');
    //     tdDiemTrungBinh.innerHTML = sv.tinhDiemTrungBinh();
        
    
    //     var tdChucNang = document.createElement('td');
    //     var btnXoa = document.createElement('button');
    //     btnXoa.innerHTML = 'Xóa';
    //     btnXoa.className = 'btn btn-danger';
    //     btnXoa.onclick = function () {
    //         //parentElement là dom đến thẻ cha của thẻ hiện tạ
    //         btnXoa.parentElement.parentElement.remove();
    
    //         // cách khác .closest(selector) : dom đến selector gần nhất chứa thẻ đó. 
    //     }
    //     tdChucNang.appendChild(btnXoa);
    
    //     trSinhVien.appendChild(tdMaSinhVien);
    //     trSinhVien.appendChild(tdTenSinhVien);
    //     trSinhVien.appendChild(tdEmail);
    //     trSinhVien.appendChild(tdSoDienThoai);
    //     trSinhVien.appendChild(tdDiemTrungBinh);
    //     trSinhVien.appendChild(tdChucNang);
    
    //     document.querySelector('#tblSinhVien').appendChild(trSinhVien);
    
    // 
    */
     
     arrSinhVien.push(sv);
     renderSinhVien(arrSinhVien);

}/**
 * 
 * hàm nhận vào 1 arrSinhVien là mảng và trả về htmlString
 */
 
function renderSinhVien (arrSinhVien) {
    let htmlContent = '';

    for(var index=0 ; index < arrSinhVien.length ; index++) {
        var sv = arrSinhVien[index];
        htmlContent += `
            <tr>
                <td>${sv.maSinhVien}</td>
                <td>${sv.tenSinhVien}</td>
                <td>${sv.email}</td>
                <td>${sv.soDienThoai}</td>
                <td>${sv.tinhDiemTrungBinh()}</td>
                <td><button class="btn btn-danger" onclick="xoaSinhVien('${index}')">Xóa</button></td>
            </tr>
        `
    }

    document.querySelector('#tblSinhVien').innerHTML = htmlContent;
    return htmlContent;
}


function xoaSinhVien (indexXoa) {
   
    // xóa object trong mảng dựa vào index
    arrSinhVien.splice(indexXoa,1);
    renderSinhVien(arrSinhVien);
}

