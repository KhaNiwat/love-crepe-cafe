import logo from "../img/All.png";
import css from "../components/css/option.module.css";
import Coption from "../components/Coption/Coption.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
function option() {
  return (
    <>
      <Navbar />
      <div className={css.displaybig}>
        <div className="grid grid-cols-2">
          {/* Left */}
          <div className="bg-rose-500 flex justify-center items-center h-screen">
            <img className="mx-auto block w-full h-600" src={logo} alt="" />
          </div>
          {/* Right */}
          <div className="flex items-center ">
          <div className="p-4 w-full">
            <Coption />
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
                <Coption />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default option;
