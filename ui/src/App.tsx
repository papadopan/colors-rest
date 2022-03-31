import React from "react";
import "./App.css";
import { Layout } from "antd";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  return (
    <Layout className="__mainLayout__">
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout.Content>
        <Content />
      </Layout.Content>
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
}

export default App;
