import React from "react";
import Header from "./Header";
import ContactForm from "./ContactForm";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;
