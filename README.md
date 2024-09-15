
# **Nestjs Prisma crud api Server and Swagger**

Welcome to the **Nestjs Prisma crud api Server** project! This repository contains the server-side code for rest api application. This README file provides guidelines on how to build and contribute to the project as a team. Please make sure to follow these instructions to maintain a consistent and efficient development process.

## **Getting Started**

1. **Clone the Repository:**
    
    ```bash
    git clone https://github.com/Hadi4234/nestjs-prisma-crud-example.git
    ```
    
2. **Navigate to the Project Directory:**
    
    ```bash
    cd nestjs-prisma-crud-example
    ```
    
3. **Install Dependencies:**
    
    ```bash
    yarn install
    ```
4. **Please create: `.env` file and add**

   ```bash
    DATABASE_URL="mysql://root:@localhost:3306/mydb_name"
    ```
5. **Prisma migrationn**

   ```bash
    npx prisma migrate dev
    ```

6. **Start the Server:**
    
    ```bash
    yarn run start
    ```
    
    The server will be running at **`http://localhost:3000/api/v1/`** .

    The swagger doc server will be running at **`http://localhost:3000/doc`** .


```bash

[Nest] 9604  - 09/15/2024, 9:05:17 PM     LOG [RoutesResolver] AppController {/api/v1}: +82ms
[Nest] 9604  - 09/15/2024, 9:05:17 PM     LOG [RouterExplorer] Mapped {/api/v1, GET} route +7ms
[Nest] 9604  - 09/15/2024, 9:05:17 PM     LOG [RoutesResolver] ArticlesController {/api/v1/articles}: +1ms
[Nest] 9604  - 09/15/2024, 9:05:17 PM     LOG [RouterExplorer] Mapped {/api/v1/articles, POST} route +3ms
[Nest] 9604  - 09/15/2024, 9:05:17 PM     LOG [RouterExplorer] Mapped {/api/v1/articles, GET} route +2ms
[Nest] 9604  - 09/15/2024, 9:05:17 PM     LOG [RouterExplorer] Mapped {/api/v1/articles/drafts, GET} route +1ms
[Nest] 9604  - 09/15/2024, 9:05:17 PM     LOG [RouterExplorer] Mapped {/api/v1/articles/:id, GET} route +2ms
[Nest] 9604  - 09/15/2024, 9:05:17 PM     LOG [RouterExplorer] Mapped {/api/v1/articles/:id, PATCH} route +1ms
[Nest] 9604  - 09/15/2024, 9:05:17 PM     LOG [RouterExplorer] Mapped {/api/v1/articles/:id, DELETE} route +1ms
[Nest] 9604  - 09/15/2024, 9:05:17 PM     LOG [RoutesResolver] UsersController {/api/v1/users}: +1ms
[Nest] 9604  - 09/15/2024, 9:05:17 PM     LOG [RouterExplorer] Mapped {/api/v1/users, POST} route +1ms
[Nest] 9604  - 09/15/2024, 9:05:17 PM     LOG [RouterExplorer] Mapped {/api/v1/users, GET} route +3ms
[Nest] 9604  - 09/15/2024, 9:05:17 PM     LOG [RouterExplorer] Mapped {/api/v1/users/:id, GET} route +2ms
[Nest] 9604  - 09/15/2024, 9:05:17 PM     LOG [RouterExplorer] Mapped {/api/v1/users/:id, PATCH} route +3ms
[Nest] 9604  - 09/15/2024, 9:05:17 PM     LOG [RouterExplorer] Mapped {/api/v1/users/:id, DELETE} route +2ms
[Nest] 9604  - 09/15/2024, 9:05:17 PM     LOG [RoutesResolver] AuthController {/api/v1/auth}: +0ms
[Nest] 9604  - 09/15/2024, 9:05:17 PM     LOG [RouterExplorer] Mapped {/api/v1/auth/login, POST} route +1ms
[Nest] 9604  - 09/15/2024, 9:05:17 PM     LOG [RoutesResolver] CommentController {/api/v1/comment}: +1ms
[Nest] 9604  - 09/15/2024, 9:05:17 PM     LOG [RouterExplorer] Mapped {/api/v1/comment, POST} route +1ms
[Nest] 9604  - 09/15/2024, 9:05:17 PM     LOG [RouterExplorer] Mapped {/api/v1/comment, GET} route +0ms
[Nest] 9604  - 09/15/2024, 9:05:17 PM     LOG [RouterExplorer] Mapped {/api/v1/comment/:id, GET} route +1ms
[Nest] 9604  - 09/15/2024, 9:05:17 PM     LOG [RouterExplorer] Mapped {/api/v1/comment/:id, PATCH} route +1ms
[Nest] 9604  - 09/15/2024, 9:05:17 PM     LOG [RouterExplorer] Mapped {/api/v1/comment/:id, DELETE} route +1ms
[Nest] 9604  - 09/15/2024, 9:05:17 PM     LOG [NestApplication] Nest application successfully started +9ms

 ```   

## **Contributing Guidelines**

To contribute to the project, follow these guidelines:

1. **Create a Feature Branch:**
Before starting work on a new feature, create a feature branch:
    
    ```bash
    git checkout -b feature/your-feature-name
    ```
    
2. **Write Code:**
Implement the feature or fix the bug on your feature branch.
3. **Commit Changes:**
Commit your changes with a meaningful commit message:
    
    ```bash
    git commit -m "Add your commit message here"
    ```
    
4. **Push Changes:**
Push your changes to your feature branch:
    
    ```bash
    git push origin feature/your-feature-name
    ```
    
5. **Create a Pull Request (PR):**
Create a pull request from your feature branch to the **`development`** branch on GitHub. Ensure the PR title and description are descriptive.
6. **Code Review:**
Your code will be reviewed by other team members. Address any feedback and make necessary changes.

## **Additional Notes**

- **Main Branch:**
The **`main`** branch is reserved for stable releases. Do not directly push to the main branch.
- **Issues and Bug Tracking:**
Use the GitHub Issues tab to report bugs, suggest features, or discuss enhancements.
- **Coding Standards:**
Follow the coding standards and conventions established by the team. Ensure your code is well-documented.
