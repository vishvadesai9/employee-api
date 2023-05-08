# Employee API

The Employee API is a RESTful web service that allows you to manage employee data. It provides various endpoints to perform CRUD (Create, Read, Update, Delete) operations on employee records. The app is hosted on Render and can be accessed on https://employee-api-3ho1.onrender.com/

## Getting Started

To get started with the Employee API, follow the steps below:

1. Clone the repository:

   ```shell
   git clone https://github.com/vishvadesai9/employee-api.git
   ```
  
2. Install dependencies:
  ```shell
  npm install
  ```

3. Start the server:
  ```shell
  npm start
  ```

4. The server will start running at http://localhost:3000.


# API Endpoints

The following endpoints are available in the Employee API:

1. Get all employees:
  ```code
  GET /api/employees
  ```

2. Get an employee by ID:
  ```code
  GET /api/employees/{id}
  ```

3. Create a new employee:
  ```code
  POST /api/employees

  Request Body:
  {
    "name": "John Doe",
    "age": 30,
    "education": "Bachelor's Degree",
    "yearsOfExp": 5,
    "profile": "Software Engineer",
    "department": "Engineering",
    "salary": 50000.0
  }

  ```

4. Update an existing employee:
  ```code
  PUT /api/employees/{id}

  Request Body:
  {
    "name": "John Doe",
    "age": 31,
    "education": "Master's Degree",
    "yearsOfExp": 6,
    "profile": "Senior Software Engineer",
    "department": "Engineering",
    "salary": 60000.0
  }

  ```

5. Delete an employee:
  ```code
  DELETE /api/employees/{id}
  ```

Note: Replace {id} in the endpoint URLs with the actual ID of the employee you want to interact with.

# Conclusion
The Employee API provides a convenient way to manage employee data through simple and intuitive HTTP endpoints. By leveraging these endpoints, you can easily retrieve, create, update, and delete employee records as needed. Feel free to explore and integrate the API into your application or system to streamline your employee management processes.

