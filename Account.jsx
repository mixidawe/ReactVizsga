import React from "react";

const Account = () =>{
   return (
    <div className="container">
        <div className="col col-5 bejelentkezes">
            <h2 className="center">Bejelentkezés</h2>
            <form action="" method="GET">
                <h3 className="col col-12 center">Email</h3>
                <input type="text" name="email" className="col col-6" placeholder="Kérlek add meg az email címedet!" />
                <h3 className="col col-12 center">Jelszó</h3>
                <input type="text" name="password" className="col col-6" placeholder="Kérlek add meg a jelszavadat!" />
                <button className="belepes col col-4">Belépés</button> <button className="cancel col col-4">Mégsem</button>
            </form>
        </div>
        <div className="col col-6 reg">
            <h2 className="center">Regisztáció</h2>
            <form action="" method="GET">
                <h3 className="col col-12 center">Email</h3>
                <input type="text" name="email" className="col col-6 center" placeholder="Kérlek add meg az email címedet" />
                <input type="checkbox" name="checkbox" id="checkbox" className="checkbox col"/><label htmlFor="checkbox" id="checkbox"><p className="adatvedelem">Elfogadom az adatvédelmi nyilatkozatot</p></label>
                <button className="regisztracio col col-6">Küldés</button>
            </form>
        </div>
    </div>
   )
}
export default Account;