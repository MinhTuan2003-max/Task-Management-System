# 📝 Task Management System

## Mô tả

Task Management System là một ứng dụng web cho phép người dùng cá nhân hoặc nhóm nhỏ quản lý công việc một cách trực quan và hiệu quả. Ứng dụng hỗ trợ tạo, theo dõi và cập nhật tiến độ công việc theo giao diện dạng Kanban board. Ngoài ra, hệ thống còn hỗ trợ thông báo nhắc nhở deadline và phân quyền truy cập.

---

## 🚀 Công nghệ sử dụng

### 💻 Backend
- Java 17
- Spring Boot
- Spring Security (JWT + OAuth2)
- Hibernate + JPA (ORM)
- MySQL
- RESTful API

### 🌐 Frontend
- Angular 20
- Angular Router
- JWT + OAuth2 Authentication
- Bootstrap hoặc Angular Material (tuỳ chọn)

---

## 📦 Cấu trúc hệ thống
<pre> ```text task-management-system/ │ ├── backend/ │ ├── src/ │ │ ├── main/java/com/example/taskmanagement │ │ │ ├── controller/ │ │ │ ├── dto/ │ │ │ ├── entity/ │ │ │ ├── repository/ │ │ │ ├── security/ │ │ │ ├── service/ │ │ │ └── TaskManagementApplication.java │ │ └── resources/ │ │ └── application.properties │ └── pom.xml │ ├── frontend/ │ └── task-management-angular/ │ ├── src/ │ │ ├── app/ │ │ │ ├── components/ │ │ │ ├── services/ │ │ │ ├── models/ │ │ │ └── app.module.ts │ └── angular.json │ └── README.md ``` </pre>

## 🔐 Xác thực & Phân quyền

- **Authentication:**
  - Hỗ trợ JWT (JSON Web Token)
  - OAuth2 (Google login)

- **Authorization:**
  - Role-based access: `USER`, `ADMIN`
  - Các chức năng được phân quyền theo vai trò

---

## 🛠️ Tính năng chính

| Tính năng                        | Mô tả                                                                 |
|----------------------------------|-----------------------------------------------------------------------|
| 📝 Tạo / Chỉnh sửa / Xóa Task    | Cho phép người dùng thao tác CRUD với công việc                      |
| ⏰ Gán deadline và độ ưu tiên     | Hỗ trợ quản lý deadline và độ quan trọng của công việc              |
| 🔁 Theo dõi tiến độ              | Các trạng thái: `To-Do`, `In Progress`, `Done`                       |
| 🗂️ Kanban Board UI               | Giao diện trực quan chia cột theo tiến độ công việc                  |
| 🔔 Nhắc nhở deadline             | Tích hợp chức năng gửi thông báo khi gần tới deadline (tuỳ chọn)     |
| 👤 Đăng ký / Đăng nhập           | Hệ thống xác thực người dùng qua JWT/OAuth2                         |

---
