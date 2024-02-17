# The Wild Oasis  

Ứng dụng đặt phòng khách sạn sử dụng React , React Query , Supabase , React Hook Form , ...  được hướng dẫn bởi giảng viên Jonas Schmedtmann

### Link demo : 

https://the-wild-oasis-cyan-mu.vercel.app

User
```sh
test@test.com
```
Password
```sh
486948669
```

### Video Demo

![PixPin_2024-02-17_08-05-30](https://github.com/HoHuuHuy285/17-the-wild-oasis/assets/118819624/9d7cb61a-c7dd-4041-b597-523cf409f404)


## Công nghệ sử dụng trong dự án 

 ### Routing
 
 ![image](https://github.com/HoHuuHuy285/17-the-wild-oasis/assets/118819624/5d244567-bb8a-4601-9275-f37c4ac50ed8)

 ### Styling

 ![image](https://github.com/HoHuuHuy285/17-the-wild-oasis/assets/118819624/24db20b8-d79c-41cf-a32c-dceb7395b07c) ![image](https://github.com/HoHuuHuy285/17-the-wild-oasis/assets/118819624/8f58b947-ac97-4b77-b27c-62f4ea6637f0)

 ### Remote state management
 ![image](https://github.com/HoHuuHuy285/17-the-wild-oasis/assets/118819624/e0660e8f-2cb5-4558-93b8-89b3d9089f02)

 ### Form management

 ![image](https://github.com/HoHuuHuy285/17-the-wild-oasis/assets/118819624/e0d58bd4-122e-4bd4-ad97-f1b7f3d33565)


## YÊU CẦU DỰ ÁN CỦA DOANH NGHIỆP

### XÁC THỰC
- Người dùng của ứng dụng là nhân viên khách sạn. Họ cần đăng nhập vào ứng dụng để thực hiện các nhiệm vụ.
- Người dùng mới chỉ có thể đăng ký trong ứng dụng (để đảm bảo chỉ có nhân viên khách sạn thực sự mới có thể đăng ký).
- Người dùng nên có khả năng tải lên hình đại diện, và thay đổi tên và mật khẩu của họ.

### CÁC PHÒNG

- Ứng dụng cần một giao diện xem bảng với tất cả các phòng, hiển thị hình ảnh phòng, tên, sức chứa, giá và giảm giá hiện tại.
- Người dùng nên có khả năng cập nhật hoặc xóa một phòng, và tạo mới các phòng (bao gồm cả việc tải lên ảnh).

### ĐẶT PHÒNG

- Ứng dụng cần một giao diện xem bảng với tất cả các đặt phòng, hiển thị ngày đến và ngày đi, trạng thái và số tiền đã thanh toán, cũng như dữ liệu về phòng và khách.
- Trạng thái đặt phòng có thể là "chưa xác nhận" (đã đặt nhưng chưa kiểm tra), "đã kiểm tra vào" hoặc "đã kiểm tra ra". Bảng nên có thể lọc theo trạng thái quan trọng này.
- Thông tin khác về đặt phòng bao gồm: số khách, số đêm, quan sát của khách, liệu họ có đặt ăn sáng không, giá ăn sáng.

### KIỂM TRA VÀO/RA

- Người dùng nên có khả năng xóa, kiểm tra vào hoặc kiểm tra ra một đặt phòng khi khách đến (không cần chỉnh sửa cho đến bây giờ).
- Đặt phòng có thể chưa được thanh toán khi khách đến. Do đó, khi kiểm tra vào, người dùng cần chấp nhận thanh toán (ngoài ứng dụng), và sau đó xác nhận rằng đã nhận được thanh toán (bên trong ứng dụng).
- Khi kiểm tra vào, khách hàng nên có khả năng thêm ăn sáng cho toàn bộ kỳ nghỉ nếu họ chưa có.

### KHÁCH

- Dữ liệu khách hàng nên bao gồm: họ và tên đầy đủ, email, số CMND, quốc tịch và lá cờ quốc gia để dễ nhận diện.

### BẢNG ĐIỀU KHIỂN

- Màn hình ứng dụng ban đầu nên là một bảng điều khiển, để hiển thị thông tin quan trọng trong vòng 7, 30 hoặc 90 ngày qua:
-- Danh sách khách đến và rời khách sạn trong ngày hiện tại. Người dùng nên có khả năng thực hiện các nhiệm vụ từ đây.
  - Thống kê về đặt phòng gần đây, doanh số bán hàng, kiểm tra vào và tỷ lệ chiếm độ.
  - Biểu đồ hiển thị tất cả doanh số bán hàng khách sạn hàng ngày, hiển thị cả doanh số "tổng cộng" và doanh số "thêm vào" (chỉ ăn sáng ở thời điểm này).
  - Biểu đồ thống kê về thời gian lưu trú, vì đây là một chỉ số quan trọng cho khách sạn.

### CÀI ĐẶT

- Người dùng nên có khả năng định nghĩa một số cài đặt toàn ứng dụng: giá ăn sáng, số đêm tối thiểu và tối đa/đặt phòng, số khách tối đa/đặt phòng.
- Ứng dụng cần có chế độ tối.
