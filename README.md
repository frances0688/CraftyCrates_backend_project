# Backend Project E-Commerce

 <h3 align="center">CraftyCrates</h3>

  <p align="center">
    This project consists on the creation of an online store (e-commerce) using the knowledge acquired in Node and Express technologies, along with MySQL and Sequelize ORM.
    <br />
    <a href="https://github.com/frances0688/CraftyCrates_backend_project"><strong>Explore the documents »</strong></a>
    <br />
    <a href="https://github.com/frances0688/CraftyCrates_backend_project/issues">Report a Bug</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
        <li><a href="#preview">Preview</a></li>
        <li><a href="#objectives">Objectives</a></li>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#overview">Overview</a></li>
         <li><a href="#built-with">Built With</a></li>
      </ul>   
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- PREVIEW -->

## Preview

- Postman create product endpoint overview gif

<img style="display: block; 
           margin-left: auto;
           margin-right: auto;" 
      src='./assets/Postman_CreateProduct.gif'
      alt="alt"/>

<!-- ABOUT THE OBJECTIVES -->

## Objectives

### Create a e-commerce API fulfilling the following requirements:

 <ul>
    <li>User registration using <a href="https://www.npmjs.com/package/bcrypt">Bcrypt.</a></li>
    <li>User login + token + middleware.</a></li>
    <li>Admin role verification and permissions middleware.</a></li>
    <li>CRUD endpoints.</a></li>
    <li>Implement validations in user and product creation to eliminate possibility of null data fields</a></li>
    <li>At least one Many to Many relationship and another One to Many.</a></li>
    <li>Use of seeders.</a></li>
  </ul>

<!-- ABOUT THE PROJECT -->

## About The Project

The online store (E-commerce) CraftyCrates sells boxes of multiple sizes containing different products of a specific hobby theme or category.  The boxes may contain 1-3 products depending on size, and price is determined by box size chosen.

- The online store consists of 6 entities of multiple types of relationships (1:1, 1:N, M:M).  It also includes a super M:M relationship where 2 intermediate tables are called to access all information.
- Users can register, login, view products and themes, create an order selecting the box size and theme, and view their orders with products included in the box.
- Admin has permission to execute all endpoints, including the deletion of users, creation of new products,themes, and box sizes, and view of all created orders.


<p align="right">(<a href="#backend-project-e-commerce">back to top</a>)</p>

### Overview

<overview>
  <ol>
    <li>MySQL general overview</li>
    <img src='./assets/SQLWorkbench.png' alt="SQL Workbench overview" style="height: 50vh"/></br>
    <li>SQL tables and relationships diagram</li>
    <img src='./assets/CraftyCrates_SQL_diagram.png' alt="SQL tables diagram" style="height: 75vh"/>
  </ol>
</overview>

<p align="right">(<a href="#backend-project-e-commerce">back to top</a>)</p>

### Built With

* [![Node][Node.JS]][Node.JS-url]
* [![Express][Express.js]][Express.js-url]
* [![MySQL][MySQL]][MySQL-url]
* [![Sequelize][Sequelize]][Sequelize-url]
* [![JWT][JWT]][JWT-url]
* [![Postman][Postman]][Postman-url]

<p align="right">(<a href="#backend-project-e-commerce">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install express mysql2 sequelize bcryptjs jsonwebtoken
  ```

### Installation

Below is an example of how you can instruct your audience on installing and setting up your app.

1. Clone the repo
   ```sh
   git clone https://github.com/frances0688/CraftyCrates_backend_project
   ```
2. Install NPM packages
   ```sh
   npm install express mysql2 sequelize bcryptjs jsonwebtoken
   ```
3. Ready to start!
    ```sh
    npm start
    ```

<p align="right">(<a href="#backend-project-e-commerce">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/YourName`)
3. Commit your Changes (`git commit -m 'Add some YourName'`)
4. Push to the Branch (`git push origin feature/YourName`)
5. Open a Pull Request

<p align="right">(<a href="#backend-project-e-commerce">back to top</a>)</p>

<!-- LICENSE -->

## License

This project is under license of Frances Morales Velilla

<p align="right">(<a href="#backend-project-e-commerce">back to top</a>)</p>

<!-- CONTACT -->

## Contact

  <p align="center">
Frances Morales Velilla

<a href = "mailto:frances0688@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
<a href="https://www.linkedin.com/in/frances-morales/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>

</p>

<p align="right">(<a href="#backend-project-e-commerce">back to top</a>)</p>

---

Developed by [Frances Morales Velilla](https://github.com/frances0688)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/frances-morales
[HTML5]: https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
[HTML5-url]: https://developer.mozilla.org/en-US/docs/Glossary/HTML5
[CSS3]: https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white
[CSS3-url]: https://developer.mozilla.org/en-US/docs/Web/CSS
[JS]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[JS-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[Bootstrap]: https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com/
[MySQL]: https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white
[MySQL-url]: https://www.mysql.com/
[Sequelize]: https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white
[Sequelize-url]: https://sequelize.org/
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[JWT]: https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens
[JWT-url]: https://jwt.io/
[Vercel]: https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white
[Vercel-url]: https://vercel.com/
[MongoDB]: https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/es
[Express.js]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[Express.js-url]: https://expressjs.com/
[Node.JS]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[Node.JS-url]: https://nodejs.org/en/
[SASS]: https://img.shields.io/badge/SASS-pink?style=for-the-badge&logo=SASS&logoColor=white
[SASS-url]: https://sass-lang.com/
[React]: https://img.shields.io/badge/React-219ebc?style=for-the-badge&logo=React&typoColor=fedcba&logoColor=white
[React-url]: https://es.reactjs.org/
[Postman]: https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white
[Postman-url]: https://www.postman.com/