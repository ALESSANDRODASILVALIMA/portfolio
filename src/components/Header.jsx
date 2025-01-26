import React from "react";
import style from "./Header.module.css";


export function Header() {
  return (
    <header className={style.headerContainer}>
      <div className={style.headerLeft}>
        <span className={style.greeting}>Olá! me chamo,</span>
        <h1 className={style.name}>Alessandro Silva!</h1>
        <p className={style.profession}>Frontend Developer...</p>

        <button>Contrate-me!</button>

        <div className={style.icons}>
            <a href="https://github.com/ALESSANDRODASILVALIMA"><box-icon type='logo' name='github' color="white" size="2rem" animation="tada"></box-icon> <span>GitHub</span> </a>
            <a href="http://"><box-icon type='logo' name='github' color="white" size="2rem"></box-icon> <span>LinkeDin</span> </a>
        </div>
      </div>

      <div className={style.headerRight}>
        {/* Adicione conteúdo ou imagem aqui */}
      </div>
    </header>
  );
}
