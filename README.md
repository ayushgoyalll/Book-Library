
---

```markdown
# 📚 Bookstore API

A RESTful API for managing users and books in a digital bookstore. This project supports secure user authentication, CRUD operations on books, filtering, searching, and follows modular best practices using Express.js and MongoDB.

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/ayushgoyalll/Book-Library
cd Book-Library
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a `.env` File

Create a `.env` file at the root with the following content:

```env
PORT=3000
MONGO_URL=mongodb://localhost:27017/bookstore
JWT_SECRET=your_jwt_secret_here
```

### 4. Start the Server

```bash
node server.js
```

The API will be available at: `http://localhost:3000`

---

## 🔐 Authentication Endpoints

### 🔸 `POST /api/user/signup`

Registers a new user and returns a JWT token.

**Request:**

```json
{
  "username": "john",
  "password": "mypassword"
}
```

**Response:**

```json
{
  "message": "User created successfully",
  "user": { "username": "john" },
  "token": "JWT_TOKEN"
}
```

---

### 🔸 `POST /api/user/login`

Logs in an existing user and returns a JWT token.

**Request:**

```json
{
  "username": "john",
  "password": "mypassword"
}
```

**Response:**

```json
{
  "message": "Login successful",
  "token": "JWT_TOKEN"
}
```

🛡️ **Use this token as a Bearer token in the `Authorization` header for all book routes.**

---

## 📚 Book Endpoints

> All endpoints below require a valid JWT token in the `Authorization` header:

```
Authorization: Bearer <JWT_TOKEN>
```

---

### 🔸 `POST /api/books/create`

Create a new book.

**Body:**

```json
{
  "title": "Atomic Habits",
  "author": "James Clear",
  "category": "Self-Help",
  "price": 299,
  "rating": 4.7,
  "publishedDate": "2021-01-01"
}
```

---

### 🔸 `GET /api/books/all`

Get all books, with optional filters.

**Query Parameters:**
- `author` – filter by author
- `category` – filter by category
- `rating` – filter by minimum rating

**Example:**

```
GET /api/books/all?author=James Clear&rating=4
```

---

### 🔸 `GET /api/books/search?title=atomic`

Search books by partial title match.

---

### 🔸 `GET /api/books/:id`

Get a single book by its ID.

```
GET /api/books/663cdefa8d2a8b1e0a432abc
```

---

### 🔸 `PUT /api/books/:id`

Update a book by ID.

**Body:**

```json
{
  "price": 349,
  "rating": 4.9
}
```

---

### 🔸 `DELETE /api/books/:id`

Delete a book by ID.

---

## ✅ Sample `.env`

```env
PORT=3000
MONGO_URL=mongodb://localhost:27017/bookstore
JWT_SECRET=supersecretkey
```

---

## 🧠 Assumptions

- `username` is unique per user.
- All book fields are required except `category` and `publishedDate`.
- Ratings are numeric (0-5).
- Users must be logged in to perform any book operations.
- The JWT token expires in 1 hour.
- No role-based access – all users can CRUD any book.

---

## 💡 Potential Enhancements

- ✅ Add pagination to `/all` and `/search` endpoints.
- ✅ Add role-based access (e.g., Admin vs Reader).
- ✅ Add book cover image upload using `Multer` and Cloudinary.
- ✅ Use `helmet` and `cors` for improved security.
- ✅ Add Swagger/OpenAPI documentation.
- ✅ Add refresh token mechanism for JWT expiry.

---

## ✨ Author

**Ayush Goyal**  
Backend Developer | KIIT CSE  
📍 Chandigarh, India

---

## 📃 License

Licensed under the MIT License.
```

---

