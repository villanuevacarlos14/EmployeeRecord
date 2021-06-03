**# Employee Record Test Application**
 Sample test project for job application.
 The project consists of 2 runnable apps. One for the .net 5 api, and the other for the Angular 12 project.
 
** .NET 5 packages/tech used: **
  - AutoMapper
  - EF Core
  - Generic Repository Pattern
  - Default DI
  - EF Core Fluent API
  - N-tier Architecture
  - EF Core Migrations

**Angular 12 packages used:**
- Material
 
** How to run the projects (On terminal/VSCode):**
 1. Clone the project
 2. Navigate to the EmployeeRecord.API project on terminal and execute "dotnet restore" command
 3. Locate and Modify the connectionString on appsettings.json. Point it to your local instance of sql server.
 4. Execute the migration command "dotnet ef database update" on terminal
 5. Run the .net core project using "dotnet run" command
 6. Navigate to EmployeeRecord project on terminal and execute "npm install" command
 7. Run the UI project using the "npm start" command.
 8. From your browser navigate to http://localhost:4200
  
  You can also run the API project using VS, just double click the sln file and it should open up VS. You will need to execute a restore and migrations on the package manager console
