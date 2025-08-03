# 🏥 Healthcare Appointment Booking App

A full-stack responsive web application that allows patients to view doctors, check their availability, and book appointments online.

---

## 🚀 Features

- 📋 Book appointments with doctors
- 📆 Select available dates and time slots
- 📧 Real-time form validation with error messages
- ✅ Confirmation messages on successful booking
- 📱 Mobile-friendly and responsive UI
- 🔒 Backend built with Node.js, Express, and MongoDB

---

## 💻 Tech Stack

| Frontend               | Backend                         |
|------------------------|----------------------------------|
| React.js               | Node.js                         |
| CSS (Responsive)       | Express.js                      |
| React Router DOM       | MongoDB (Mongoose)              |
| Fetch API              | Joi Validation, RESTful APIs    |
| Custom Validation      | Cloud-hosted via Render         |

---

## 🌐 Live Backend URL

Backend deployed on **Render**:

👉 [`https://healthcare-backend-tc4i.onrender.com`](https://healthcare-backend-tc4i.onrender.com)

---

## 📁 Backend Repository

GitHub Link:  
👉 [`vinnu382910/HealthCare-Backend`](https://github.com/vinnu382910/HealthCare-Backend)

---

## 📦 How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/HealthCare-Frontend.git
cd HealthCare-Frontend
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Frontend

```bash
npm start
```

The app will run at `http://localhost:3000`.

---

## 🔐 Backend API Reference

| Endpoint            | Method | Description                     |
| ------------------- | ------ | ------------------------------- |
| `/api/doctors/:id`  | GET    | Fetch a single doctor's details |
| `/api/appointments` | POST   | Book an appointment with doctor |

**POST /api/appointments Payload:**

```json
{
  "doctorId": "string",
  "patientName": "string",
  "patientEmail": "string",
  "date": "YYYY-MM-DD",
  "time": "HH:mm"
}
```

---

## 📬 Contact

**Developer:** Kalva Vinay (Vinay382910)
📧 [vinaykalva382910@gmail.com](mailto:vinaykalva382910@gmail.com)

---

## 📃 License

This project is licensed under the MIT License.
Feel free to use, modify, and contribute!

---

## 🙌 Acknowledgments

* UI inspired by modern appointment systems (like Practo & Zocdoc)
* Backend hosted with [Render](https://render.com)
