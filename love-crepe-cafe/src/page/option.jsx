import logo from "../img/All.png";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Addanddel from "../components/addanddel/addanddel.jsx";
import css from "../components/css/option.module.css";
import Amount from "../components/amount/amount.jsx";
import Payment from "../components/Payment/Payment.jsx";
function option() {
  return (
    <>
      <div className={css.displaybig}>
        <div className="grid grid-cols-2">
          {/* Left */}
          <div className="bg-rose-500 flex justify-center items-center h-screen">
            <img className="mx-auto block w-full h-600" src={logo} alt="" />
          </div>
          {/* Right */}
          <div className=" bg-gray-100 p-10 flex justify-center items-center h-screen">
            <div className="p-10 h-100 w-100 shadow-2xl border-4">
              <h1 className="flex">ชื่อเมนู</h1>
              <h3 className="flex  text-yellow-400">2000 W</h3>
              <div className="grid grid-cols-1 gap-1">
                <br />
                {["checkbox", "vae"].map((type) => (
                  <div key={`default-${type}`}>
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`default ${type}`}
                    />
                  </div>
                ))}
                <br />
                <div class="my-auto grid justify-items-center">
                <Amount/>
                </div>
                <br />
                <Payment/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className={css.mobile}>
        <div className={css.card}>
          <div className={css.boximg}>
            <img src={logo} />
          </div>
          <div className={css.content}>
            <div className={css.price}>
              <div className="w-auto">
              <h1 className="flex">ชื่อเมนู</h1>
              <h2 className="flex  text-yellow-400">2000 W</h2>
              <div className="grid grid-cols-1 gap-auto">
                {["checkbox", "vae"].map((type) => (
                  <div key={`default-${type}`} className={css.customformcheck}>
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`default ${type}`}
                      className={css.customcheckboxinput}
                    />
                  </div>
                ))}
                <div class="my-1 grid justify-items-center">
                <Amount/>
                </div>
                <br />
                <br />
                <br />
                <Payment/>
              </div>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default option;
