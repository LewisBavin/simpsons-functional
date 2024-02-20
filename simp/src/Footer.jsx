import React from "react";
function Footer() {
  return (
    <>
      <div className="foot">
        <form className="flx jc-c ">
            <label for='email'>Enter your eMail to recieve your favourites list!</label>
          <input type="email" placeholder="please type eMail..."></input>
        </form>
      </div>
    </>
  );
}

export default Footer;
