# Web Market application
[Live page](https://kpapura.github.io/web-market/)

_Role: developer_

_Individual project_

This website serves as a platform for online shopping. It allows users to explore available products, filter them based on various criteria such as category and sort by price, also they can get more info by clicking on the selected product. It simplifies the process of finding products. It consists of three main pages:
* _Main page_: displays a list of available products. Initially, 10 advertisements are shown, and additional ones can be loaded by clicking the "Load more" button. Users can filter advertisements by category, price, and search by themselves using a search input. Each advertisement card includes detailed information about the selected product by clicking the icon on each card or card itself. Clicking on the icon opens a modal window with detailed information about the product. Additionally, there is a "Scroll to Top" button that returns users to the top of the page. 
---
## Technical Specifications

### Frontend:
- Developed using React.js with React Router for routing.
- State management is handled using Redux.
- Axios library is used for making API requests.
- Semantic and valid HTML markup with responsive design.
- Styled with styled-components.
- Loader component is displayed while asynchronous data is being fetched. It also responds to changes in the Redux store.

### Backend:
- Backend is implemented using mockapi.io service.
- Products resource is created with the following fields: id, name, price, image and desc.
- Pagination is implemented on the backend.
- Filtering options are available for product category, price range and search field.

### Additional Features:
- Dropdown for selecting product category.
- Dropdown for selecting price range.
- Input field to search by entering the searching product's name.
---

### Technologies

This application has the following technologies:

- __HTML__ - a markup language for creating web pages
- __CSS__ - a stylesheet language for styling web pages
- __styled-components__ - a library that allows to write CSS in JS while building custom components in React.js.  
- __react__ - a library for web and native user interfaces
- __redux__ - a library that provides a structured and predictable way to manage the state of an application
- __react-dom__ - a library for working with the DOM in React
- __redux-toolkit__ - a library for working with global state of app
- __redux-persist__ - a state management tool that allows the state in a Redux store to persist across browser and app sessions
- __axios__ - a library for making HTTP requests
- __react router__ - a JavaScript framework that lets handle client and server-side routing in React applications
- __react-select__ - a library component used for dynamic form input or as a select menu.
- __react-icons__ - a library of popular icons
- __react-hook-form__ - a library that helps to manage complex forms
- __react-toastify__ - a library for adding toast notifications to the React application

---
### Instalation
To run this project just follow these steps:
- clone the repository using the command _`git clone https://github.com/kpapura/web-market`_
-  install the dependencies using the command _`npm install`_
-  start the project using the command _`npm start`_
- you will be redirected to the following address _`http://localhost:3000`_ 