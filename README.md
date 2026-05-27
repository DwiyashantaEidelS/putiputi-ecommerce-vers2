# 🌸 PutiPuti E-Commerce

PutiPuti E-Commerce is a full-stack e-commerce web application built with React + TypeScript (frontend) and Laravel REST API (backend). This project simulates a basic online store where users can browse products, manage their cart and wishlist, and perform authentication using token-based login.

---

## ✨ Features

### 🛍️ Frontend
- User authentication (Login & Register)
- Product listing page
- Product detail page
- Add to cart functionality
- Wishlist system
- Cart management
- Token-based session handling
- Responsive UI

### ⚙️ Backend
- REST API built with Laravel
- User authentication using API tokens
- Product management API
- Cart management API
- Wishlist API
- MySQL database integration
- Structured MVC architecture

---

## 🧰 Tech Stack

### Frontend
- React
- TypeScript
- Context API
- Axios
- Vite

### Backend
- Laravel
- PHP
- MySQL
- Laravel Sanctum / Token Auth

---

## 📂 Project Structure

```bash
putiputi-ecommerce/
│
├── putiputi-frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── services/
│   │   └── types/
│   └── package.json
│
├── putiputi-api/
│   ├── app/
│   │   ├── Http/Controllers/
│   │   ├── Models/
│   ├── routes/
│   ├── database/
│   ├── .env
│   └── artisan
│
└── README.md
```

---

## 🚀 Installation

### 1. Clone Repository

```bash
git clone https://github.com/username/putiputi-ecommerce.git
cd putiputi-ecommerce
```

---

### 2. Setup Backend

Move to backend folder:

```bash
cd putiputi-api
composer install
cp .env.example .env
php artisan key:generate
```

Configure .env file:

```bash
DB_DATABASE=your_database_name
DB_USERNAME=root
DB_PASSWORD=
```

Run migrations:

```env
php artisan migrate
php artisan serve
```

Backend will run at:

```bash
http://localhost:8000
```

---

### 3. Frontend Setup

```bash
cd putiputi-frontend
npm install
npm run dev
```

Frontend will run at:
```bash
http://localhost:5173
```

---

## 📡 API Endpoints

### Authentication
- POST /api/register
- POST /api/login

### Production
- GET /api/products
- GET /api/products/{id}

### Cart
- GET /api/cart
- POST /api/cart
- DELETE /api/cart/{id}

### Wishlist
- GET /api/wishlist
- POST /api/wishlist
- DELETE /api/wishlist/{id}

---

## 🗄️ Database Tables

### products
Stores product data:
- id
- name
- description
- price
- image_url

### orders
Stores customer orders:
- id
- customer_name
- address
- total

### order_items
Stores order details:
- order_id
- product_name
- price
- quantity

---

## 📸 Screenshots

<img width="1896" height="902" alt="image" src="https://github.com/user-attachments/assets/0cfe669e-58c3-4d98-a409-91e739d1df00" />
<img width="1890" height="905" alt="image" src="https://github.com/user-attachments/assets/f0cf482a-9b72-4914-a361-91e31e9873c3" />
<img width="1896" height="892" alt="image" src="https://github.com/user-attachments/assets/7074d42e-b4ca-4b69-9b7d-97f250cd0408" />
<img width="1890" height="897" alt="image" src="https://github.com/user-attachments/assets/943de040-0f60-4757-b86a-9a8a9bccb13e" />

---

## 👩‍💻 Author

Developed by Dwiyashanta Eidel Safira

GitHub:
https://github.com/DwiyashantaEidelS
