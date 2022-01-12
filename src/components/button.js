import React from "react";
import { useHistory } from 'react-router-dom';
import '../App'



function HomeButton() {
  const history = useHistory();

  function handleClick() {
    history.push("/stats.js");
  }

  return (
    <button  className='App-buttom App-buttom_text' type="button" onClick={handleClick}>
    Views Stats
    </button>
  );
}
export default HomeButton;
const domContainer = document.querySelector('#button.js');
ReactDOM.render(e(LikeButton), domContainer);