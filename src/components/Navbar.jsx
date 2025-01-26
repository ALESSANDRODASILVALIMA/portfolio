import React from "react";
import style from "./Navbar.module.css"

const itensListMenu = ["Home", "Experience", "Potifolio"]

export function Navbar(){
    return(
        <>
            <div className={style.navContainer}>
                <div className={style.navLeft}>
                    <div className={style.navName}>Alessandro</div>
                    <span>Silva</span>
                </div>

                <div className={style.navRight}>
                    <div className={style.navList}>
                        <ul>
                            {
                            itensListMenu.map( itens => <li>{itens}</li>)
                            }   
                        </ul>
                    </div>
                    <button className="button">Contato</button>
                </div>
            </div>
        </>
    )
}