# 🚀 Running Median Visualizer

<p align="center">

![Java](https://img.shields.io/badge/Java-21-orange?style=for-the-badge&logo=openjdk)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.5-green?style=for-the-badge&logo=springboot)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?style=for-the-badge&logo=tailwindcss)
![H2](https://img.shields.io/badge/H2_Database-blue?style=for-the-badge)
![Swagger](https://img.shields.io/badge/Swagger-OpenAPI-85EA2D?style=for-the-badge&logo=swagger)

</p>

<p align="center">

A modern Full Stack application that demonstrates the **Running Median** algorithm using the **Two Heap Strategy (Max Heap + Min Heap)** with real-time visualization, interactive charts, heap visualization, execution flow, and REST APIs built using Spring Boot.

</p>

---

# 📸 Project Preview

## Dashboard

![Dashboard](screenshots/dashboard.png)

---

## 📊 Statistics Overview

![Statistics](screenshots/statistics.png)

---

## 📈 Median Progress

![Median Chart](screenshots/median-chart.png)

---

## 🧠 Algorithm Execution & Heap Visualization

![Algorithm](screenshots/algorithm-heap.png)

---

## 📜 Insertion History

![History](screenshots/history.png)

---

## 📚 Swagger API Documentation

![Swagger](screenshots/swagger-ui.png)

---

# ✨ Features

### Backend

- Running Median using Two Heap Algorithm
- O(log n) insertion
- O(1) median retrieval
- Spring Boot REST APIs
- H2 Database
- Global Exception Handling
- Validation
- Layered Architecture
- OpenAPI / Swagger Documentation

---

### Frontend

- Beautiful Dashboard
- Live Statistics
- Median Progress Chart
- Heap Visualization
- Algorithm Execution Timeline
- Searchable History
- CSV Export
- Reset Dataset
- Responsive Design
- Smooth Animations (Framer Motion)

---

# 🏗 Architecture

```
                React + Vite
                      │
                      ▼
             REST API (Spring Boot)
                      │
          -------------------------
          │                       │
          ▼                       ▼
 RunningMedianEngine       H2 Database
 (Two Heap Algorithm)
          │
    Max Heap + Min Heap
```

---

# ⚡ Two Heap Algorithm

The application maintains the running median using two priority queues.

### Max Heap

Stores the lower half of the numbers.

### Min Heap

Stores the upper half of the numbers.

After every insertion:

1. Insert into the correct heap.
2. Rebalance if necessary.
3. Calculate the median.
4. Update the chart and dashboard instantly.

### Complexity

| Operation | Complexity |
|-----------|-----------:|
| Insert Number | O(log n) |
| Get Median | O(1) |
| Rebalancing | O(log n) |

---

# 🛠 Tech Stack

## Backend

- Java 21
- Spring Boot 3.5
- Spring Data JPA
- H2 Database
- Maven
- Swagger / OpenAPI

## Frontend

- React
- Vite
- Tailwind CSS
- Axios
- Recharts
- Framer Motion
- React Icons
- React Hot Toast

---

# 📁 Project Structure

```
RunningMedianVisualizer
│
├── backend
│   ├── controller
│   ├── service
│   ├── repository
│   ├── entity
│   ├── dto
│   ├── mapper
│   ├── exception
│   ├── response
│   ├── config
│   └── core
│
├── frontend
│   ├── components
│   ├── pages
│   ├── services
│   ├── utils
│   └── assets
│
├── screenshots
└── README.md
```

---

# 📡 REST API

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/v1/median/add` | Add Number |
| GET | `/api/v1/median` | Current Median |
| GET | `/api/v1/median/statistics` | Statistics |
| GET | `/api/v1/median/chart` | Chart Data |
| GET | `/api/v1/median/heaps` | Heap Visualization |
| GET | `/api/v1/median/history` | History |
| DELETE | `/api/v1/median/reset` | Reset Dataset |

Swagger UI

```
http://localhost:8080/swagger-ui/index.html
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/Raghunath09/RunningMedianVisualizer.git
```

```
cd RunningMedianVisualizer
```

---

## Backend

```
cd backend
mvn spring-boot:run
```

Runs at

```
http://localhost:8080
```

---

## Frontend

```
cd frontend
npm install
npm run dev
```

Runs at

```
http://localhost:5173
```

---

# 📦 Future Enhancements

- Docker Support
- Docker Compose
- PostgreSQL Integration
- User Authentication
- Dark / Light Theme
- Deployment
- Performance Analytics
- Unit & Integration Test Coverage
- CI/CD Pipeline

---

# 👨‍💻 Author

**Raghunath Toparam**

- GitHub: https://github.com/Raghunath09
- LinkedIn: https://www.linkedin.com/in/raghunath-toparam/
- Email: toparamraghunath@gmail.com


---

# 📄 License

This project is licensed under the MIT License.

---

## ⭐ Support

If you found this project useful, consider giving it a **⭐ Star** on GitHub.