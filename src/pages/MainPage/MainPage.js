import React from 'react';
import SideBar from 'components/SideBar';
import Footer from 'components/Footer';
import Carousel from 'components/Carousel';
import Header from 'components/Header';
import MenuButton from 'components/MenuButton';
import './mainPage.scss';

const MainPage = () => {
  return (
    <div className="wrapper">
      <MenuButton />

      <section className="wrapper__side-bar">
        <SideBar />
      </section>

      <section className="content wrapper__content">
        <Header />
        <main className="main">
          <h1 className="main__title">Каршеринг</h1>
          <h2 className="main__title main__title--green">Need for drive</h2>
          <p className="main__subtitle">Поминутная аренда авто твоего города</p>
          <button className="button main__button">Забронировать</button>
        </main>
        <Footer />
      </section>

      <section className="wrapper__carousel">
        <Carousel />
      </section>
    </div>
  );
};

export default MainPage;
