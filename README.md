# JS-BACKEND-CUBICLE

&nbsp; &nbsp; &nbsp; **Cubicle** is a **MPA** where you can browse some of the most popular **Rubik cubes** in the world and add some new cubes that you have discovered.

&nbsp; &nbsp; &nbsp; Every user can **register**, **login** and **logout**. Each cube can be **edited** or   **deleted**. Some of the functionality **require authentication** such as (**create a cube**, **create accessory**) and authorization (such as **edit** and **delete**). **Anonymous** (guest) users **can't reach** the functionality which requires authentication, such as creating a cube view. From the other hand, the **already logged-in** users have generated and stored **jwt** and they **can** see the correct navigation as well as they **can't reach** the **login** and **register** form. If some of these scenarios happen, the current user is redirected to the **home page**. Only authorized users can see the **[Edit]** and **[Delete]**, namely if **the currently logged-in user is the creator of this cube**. 

&nbsp; &nbsp; &nbsp; Several **validations** of the User Input are implemented directly at the **Mongoose Schema**. 
I use both **The System Errors** and my own **Custom Errors** in my App. **The Errors** comming from the **DataBase**, respectivly from the **Mongoose Schema**, are parsed separately. **All Errors** are to be cathed at the **global Error Handler**, as well as using the other approach to **show them at the Corresponding Controller**. 


### Used technologies

- Express
- Handlebars
- MongoDB
- Bcrypt, Jsonwebtoken, Cookie-Parser
- HTML & CSS

### Before you start the Application you need to install MongoDB.

## Installation

To use Cubicle App locally, follow these steps:

1.  Clone the repository:

- `git clone https://github.com/kalinsky-dev/JS-BACKEND-CUBICLE-DATABASE`

2.  Navigate to the project directory and run npm install:

- `cd JS-BACKEND-CUBICLE-DATABASE & npm i`

3.  Start the application with npm start.

- `npm start`

That's it! You can now start Cubicle Application on your local machine at http://localhost:3000/.
