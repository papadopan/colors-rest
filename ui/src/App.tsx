import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Layout } from "antd";
import { useFetchColorsQuery } from "./store/features/userSlice";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Layout className="__mainLayout__">
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout.Content>ontent</Layout.Content>
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
}

export default App;
