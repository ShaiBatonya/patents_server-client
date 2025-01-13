# 📜 Patents Management System

A full-stack web application designed for managing patents efficiently. This project allows users to add, edit, delete, and search for patents, all within an intuitive and user-friendly interface.

---

## 🌐 **Live Demo**
> *(Add a link here if a live demo is hosted, or write "Currently not hosted.")*

---

## 📋 **Overview**

The **Patents Management System** simplifies the process of managing patent-related data. It provides a secure and reliable platform for users to register, log in, and manage their patent records with ease.

### **Key Features**
- **Patent Management:** Add, edit, delete, and view patents.
- **Search Filters:** Quickly find patents with advanced search capabilities.
- **User Authentication:** Secure user registration and login system.
- **Responsive Design:** Optimized for desktop and mobile devices.

---

## 🛠 **Tech Stack**

### **Frontend**
- **Languages:** JavaScript, HTML5, CSS3
- **Features:** Interactive UI for seamless patent management.

### **Backend**
- **Framework:** Node.js with Express.js (Express Generator)
- **Database:** MongoDB (NoSQL database for scalable and flexible data storage)

---

## 🚀 **Getting Started**

### **Prerequisites**
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)

### **Installation**

1. Clone the repository:
    ```bash
    git clone https://github.com/ShaiBatonya/patents_server-client.git
    cd patents_server-client
    ```

2. Install dependencies for both client and server:
    ```bash
    # Server
    cd patent-server
    npm install

    # Client
    cd ../patent-client
    npm install
    ```

3. Configure your MongoDB connection string in the server `.env` file:
    ```plaintext
    MONGO_URI=mongodb://localhost:27017/patents
    ```

4. Start the backend server:
    ```bash
    cd patent-server
    npm start
    ```

5. Start the frontend client:
    ```bash
    cd ../patent-client
    npm start
    ```

6. Open your browser and navigate to:
    ```plaintext
    http://localhost:3000
    ```

---

## 📂 **Project Structure**

```
📦 patents_server-client/
├── 📂 patent-client/          # Frontend code
│   ├── 📂 public/             # Static assets
│   ├── 📂 src/                # Main components and logic
├── 📂 patent-server/          # Backend code
│   ├── 📂 models/             # MongoDB models
│   ├── 📂 routes/             # API routes
│   ├── 📂 controllers/        # Business logic
├── 📄 README.md               # Project documentation
```

---

## 📈 **Future Enhancements**
Here are some planned features to make the platform even more powerful:
- **Role-Based Access Control (RBAC):** Differentiate between user and admin capabilities.
- **Analytics Dashboard:** Visualize patent data with charts and graphs.
- **Export/Import Patents:** Support exporting data to CSV/Excel and importing from external sources.
- **Cloud Hosting:** Deploy the platform on AWS/GCP for global accessibility.

---

## 📸 **Screenshots**

### **Homepage**
![Homepage](https://via.placeholder.com/800x400.png?text=Add+Your+Screenshot+Here)

### **Patent Management Panel**
![Management Panel](https://via.placeholder.com/800x400.png?text=Add+Your+Screenshot+Here)

---

## 📞 **Contact**
Feel free to reach out if you have questions or want to collaborate!

[![Email](https://img.shields.io/badge/Email-175fd4?style=for-the-badge&logo=gmail&logoColor=white)](mailto:shai.batonya@example.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077b5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shaibatonya/)

---

## 📝 **License**
This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

<div align="center">
  <strong>Crafted with ❤️ by Shai Gabriel Batonya</strong>
</div>
