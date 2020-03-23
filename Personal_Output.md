# Personal Output

This file is supposed to contain what I've learned from the NTU evaluation tasks assinged to me, Alan and an under estimated job seeker.

The tasks are:
  1. Three buttons using SVG buttons.
  2. A table with 3 columns:
      - Name.
      - Edit.
      - Delete.
  3. A form submit button.
  
Required technology stack:
  1. ReactJS – As the main User Interface technology
  2. NodeJS – As the local I/O interface
  3. MySQL/MariaDB – As the application SGDB

## 1. Front-End - React
My undetstanding of React after finishing the tasks is, React is a front-end framework for drawing pages' purpose. What makes it different from drawing HTML directly is we could break entire long pages with html page (trunk) and components (branches). This hierarchical strucure is achieved by getting target html label tags and plugging html components into bigger component formed html file.

## 2. Front-End - Redux
Since we can draw pages now, we need a another layer of middleware to help the project ot manage send request to back-end and receice response from it as well. Redux is a second-designed framework on FLUX, and uses a "store->reducer->action" and "store<->action" transition map to handle the front-end dynamics. To be honest, I am not fully understand how reducer and store work, so hence I'm using the "store<->action" transition. The "store" is a store tree to save all the "states".

In this project, we have multiple onClick functions including SQL CRUD. Therefore, every operation could be integrated on one page, and value updating could be achieved by pop-up "prompt". The "state" of this page is the "users" which is ought to be listed on the page showing to people who is browsing the page. My strategy is to update the "state" after each CRUD operation with latest data stored in the MySQL database. Because of the "state" mechanism, everytime state is being updated, Redux will re-render the related component. Additionally, the bigger transition will only be activated when page is refreshed and an action is detected to show all "user" from database. 
  - The "action", "refresh page" here, will firstly caught by reducer and send to the components as "props". 
  - Secondly, "props" inside components will call "constructor" function to set the initial "state" of the page. Here the initial "state" refers to the returned data by sending request of fetching all "user" to the back-end.
  - For the CRUD operations, function will be called directly on the page by implementing "onCLick" or "submit" functions, and "state" will be updated with the returned data of called functions.
  
## 3. Back-End - Express
As NodeJS required, I choose to import an advance NodeJS back-end web framework to help me handling html req and res, migrating and seeding database. Fisrt thing first, we have to proxy the client to the server to avoid cross-region problem. Bsesides migrating files and seeding files, rest of the code also is qutie simple: a url dispatcher to handle different requests, several html pages for back-end debugging and models of "user" synced with database. Hence a simple MVC model is been established.

  ### 3.1. Back-End - Sequelize
  Since model is designed in Express, Sequelize is introduced as ORM to interact with MySQL robustly.

