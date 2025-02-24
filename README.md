# Contact-Management
A simple web application built with Node.js, Express.js, and MySQL to manage contacts. Users can add, view, update, and delete contact information.

**** Features****

Create, Read, Update, and Delete (CRUD) contacts.

MySQL database integration.

Simple and responsive web interface.

**🚀 Technologies Used**

Backend: Node.js, Express.js

Database: MySQL

UI: HTML, CSS, Bootstrap

** Project Structure**

├── node_modules/
├── public/
│   ├── css/
│   └── js/
├── views/
│   ├── index.ejs
│   ├── add.ejs
│   ├── edit.ejs
│   └── error.ejs
├── .env
├── app.js
├── db.js
├── package.json
└── README.md

**⚙️ Setup & Installation**

Clone the repository:

git clone https://github.com/arnobdas789/Contact-Management/.git
cd contact-management

**Install dependencies:**

npm install

****Create a MySQL database:
****

Run the server:

node app.js

Open in the browser:

http://localhost:3000

Usage

Add Contact: Click on the 'Add Contact' button and fill in the details.

View Contact List: See all contacts on the homepage.

Update Contact: Click on the 'Edit' button next to a contact.

Delete Contact: Click on the 'Delete' button to remove a contact.

Troubleshooting

Database connection error? Double-check your MySQL credentials and ensure the database server is running.

Port conflict? Modify the port number in app.js if needed.

 Acknowledgements

Thanks to the open-source community and various online resources for inspiration and guidance!
