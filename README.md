# CUBICLE

&nbsp; &nbsp; &nbsp; **Cubicle** is a **Backend Multipage Application App** where you can browse some of the most popular **Rubik cubes** in the world and add some new cubes that you have discovered.

&nbsp; &nbsp; &nbsp; Every user can **register**, **login** and **logout**. Each cube can be **edited** or   **deleted**. Some of the functionality require **Authentication** such as (**create a cube**, **create accessory**) and authorization (such as **edit** and **delete**). **Anonymous** (guest) users **can't reach** the functionality which requires authentication, such as creating a cube view. From the other hand, the **already logged-in** users have generated and stored **jwt** and they **can** see the correct navigation as well as they **can't reach** the **login** and **register** form. If some of these scenarios happen, the current user is redirected to the **home page**. Only authorized users can see the **[Edit]** and **[Delete]**, namely if **the currently logged-in user is the Creator of this cube**. 

&nbsp; &nbsp; &nbsp; Several **Validations** of the User Input are implemented directly in the **Mongoose Schema** and the other part **Locally in the Controllers**. 
I use **The System Errors**, **Mongoose Errors** and my own **Custom Errors** in my App. **The Errors** comming from the **DataBase**, respectivly from the **Mongoose Schema**, are parsed separately. **Some Errors** are to be catched and send to the **Global Error Handler**, as well as using the other **Approach** to **render them at the Corresponding Controller** locally. 


### Used technologies

- Express
- Handlebars
- MongoDB
- Bcrypt, Jsonwebtoken, Cookie-Parser
- HTML & CSS

### Before you start the Application you need to install MongoDB.

### After successful installation of MongoDB you can start the Application.

To use **CUBICLE** App locally, follow these steps:

1.  Clone the repository:

- `git clone https://github.com/kalinsky-dev/JS-BACKEND-CUBICLE-MPA`

2.  Navigate to the project directory and run npm install:

- `cd JS-BACKEND-CUBICLE-MPA & npm i`

3.  Start the application with npm start.

- `npm start`

That's it! You can now start Cubicle Application on your local machine at http://localhost:3000/.
