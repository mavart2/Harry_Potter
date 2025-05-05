import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import logo from "./assets/image/pngegg.png";
import imagen from "./assets/image/6127d724aa481f0004ea72c6.png";

import "./App.scss";
import Title from "./components/Title";
import Button from "./components/Button";
import Home from "./pages/Home";
import Characters from "./pages/Characters"; // Asegúrate de que `Layout` está bien definido
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Recarga");
  }, [count]);

  return (
   
    <Router>
      <div className="image-varita">
        <a href={logo} target="_blank">
          <img src={logo} className="logo" alt="logo" />
        </a> </div>
       <div className="image-container">
       

<img src={imagen} alt="Descripción de la imagen" />
</div>
      
        <Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="characters" element={<Characters />} />
  </Route>
</Routes>
        {/*<Title text="Personajes de serie" />
        <Button text="Ver imágenes" />
        */}
        
        
       {/*<Button onClick={() => alert("ir al home")} text="Volver" /><Button onClick={() => setCount(count + 1)} text={`+1`} />
        <Title text={`Número ${count}`} /> */} 
        
        
     
    </Router>
  );
}

function Layout() {
  const navigate = useNavigate(); // Hook para redireccionar

  return (
    <>
      <nav>
      <Button text="Home"  onClick={() => navigate("/")}Home/>
        <Button text="Personajes" iconClass = "fa fa-search" onClick={() => navigate("/characters")}>Characters</Button>

      </nav>
      <Outlet />
    </>
  );
}





export default App;


