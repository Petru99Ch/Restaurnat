import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './layout//header/Header';
import Footer from './layout/footer/Footer';
import Main from './layout/main/Main';
import Menu from './layout/restaurant/Menu';

import Food from "./layout/restaurant/Food"

let menuArrData = [
  new Food(1, "Pizza", "https://www.simplyrecipes.com/thmb/pjYMLcsKHkr8D8tYixmaFNxppPw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg", 100 ),
  new Food(2, "Soup", "https://sugarspunrun.com/wp-content/uploads/2021/09/Tomato-Soup-Recipe-1-of-1.jpg", 80 ),
  new Food(3, "Steak", "https://www.cookingclassy.com/wp-content/uploads/2022/07/grilled-steak-15.jpg", 180 ),
  new Food(4, "Salade", "https://assets.afcdn.com/recipe/20190704/94666_w1024h576c1cx2689cy1920cxt0cyt0cxb5378cyb3840.jpg", 75 )

]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App>
      <Header />
      <Main>
        <Menu data={menuArrData}/>        
      </Main>
      <Footer />
    </App>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
