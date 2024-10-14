import React, { useState } from "react";
import Navbar from "./assets/components/Navbar";
import Products from "./assets/components/Products";
function App()
{
    const [val, setval] = useState([
      {id: 1, name: "Brown shoe", image: "https://images.unsplash.com/photo-1673332655640-d97338b1c6b7?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
      {id: 2, name: "Blue T-shirt", image: "https://i5.walmartimages.com/asr/3c92c819-468f-4edd-8098-551a16ea9f1c.a8809b55a1038c8f51139443cd9e92db.jpeg"},
      {id: 3, name: "Black Trouser", image: "https://th.bing.com/th/id/OIP.THxHyW6k3Z1nVxnHrfdZAQAAAA?rs=1&pid=ImgDetMain"},
      {id: 4, name: "White Cap", image: "https://th.bing.com/th/id/OIP.lWedS4LiY3H1c0yIcKp50gHaFj?rs=1&pid=ImgDetMain"},
      {id: 5, name: "Bottles", image: "https://i.pinimg.com/originals/62/48/4a/62484af71fa7d8b14a9a11df5ac823a1.jpg"},
      {id: 6, name: "Running Shoe", image: "https://th.bing.com/th/id/OIP.Vlv6-hh9aDcDnlHGYMHNhwHaHa?w=168&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"}
    ]);
    return(
      <div className="bg-zinc-100">
        <Navbar/>
        <div className="h-full w-full flex flex-wrap justify-evenly items-center p-20">{val.map((item, idx) => <Products val = {item} />)}</div>
      </div>
    );
}

export default App;