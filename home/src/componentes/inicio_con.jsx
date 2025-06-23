import React from 'react';
import Styles from '../css/inicio_con.module.css';
import Menu from './menulateral_con';
import Seguranca from './seguranca';
import Conversa_fs from './conversa_fs';
import Navbar from './navbar';
import { Routes, Route } from 'react-router-dom';

export default function Inicio_con() {
  return (
    <main>
      <Navbar/>
      <section className={Styles.conteudo}>
        <Menu className={Styles.menu} />
        <div className={Styles.chatContainer}>
          <Routes>
            <Route path="/" element={<Seguranca />} />
            <Route path="conversa_fs/:id" element={<Conversa_fs />} />
          </Routes>
        </div>
      </section>
    </main>
  );
}
