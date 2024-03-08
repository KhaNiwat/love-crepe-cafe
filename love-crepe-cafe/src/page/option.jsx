import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import css from "../components/css/option.module.css";
import logo from "../img/All.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function option() {
  return (
    <>
      <div class={css.grid}>
        <div class={css.left_right}>
          
            <img src={logo} alt="" />
          
        </div>
        <div class={css.left_right}>Right</div>
      </div>
    </>
  );
}

export default option;
