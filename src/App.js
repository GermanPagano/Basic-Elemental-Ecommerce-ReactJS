import { useState } from "react";
import dataBase from "./components/back/data";
import Header from "./components/front/header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./components/front/Routes/Routes";

const App = () => {
  const { productsItems } = dataBase;
  const [cartItems, setcartItems] = useState([]);
  console.log(cartItems);

  // funcion para agregar productos al carrito
  const handleAddProduct = (product) => {
    // guardo el elemento que tiene el id del producto clickeado
    const productExist = cartItems.find((element) => element.id === product.id);
    // comparo si hay algun producto con el id dentro de los productos
    productExist
      ? // si existe un producto con ese id entonces lo guardo con setcartItems
        setcartItems(
          // recorro los items en el estado con un .map()
          // y si el item pasado por parametro existe entre los productos
          // entonces traigo todo el valor de productExist  y le agrego un atributo quantity y le sumo 1
          cartItems.map((item) =>
            item.id === product.id
              ? { ...productExist, quantity: productExist.quantity + 1 }
              : // si no existe entonces solamente traigo el item ( el valor del producto clickeado fue agregado por primera vez)
                item
          )
        )
        // si no productExist es False entonces guardo en setCartItems 
        // el valor completo de cartItems + lo que traje por parametro product y le agrego la propiedad quantity con el valor 1
      : setcartItems([...cartItems, { ...product, quantity: 1 }]);
  };
  // funcion para Eliminar productos al carrito
  const handleRemoveProduct = (product) => {
    // guardo el elemento que tiene el id del producto clickeado
    const productExist = cartItems.find((element) => element.id === product.id);
    // compraro si la cantidad de productos en productExiste es 1
    productExist.quantity === 1
      ?
      // si es True ,guardo en setcartItems lo siguiente= 
      // recorro cartItems con un .filter()
      // y guardo todos los productos en cartItems , menos el que es igual al id del parametro
      setcartItems(cartItems.filter((item) => item.id !== product.id))
      // si la condicion fue False ,guardo en setcartItems lo siguiente=
      // recorro cartItems con un .map()
      // y guardo el item con el mismo id que el parametro
      // antes de guardarlo comparo si existe un producto con ese mismo ID 
      // si existe , entonces guardo todo lo que tenia en productExist y le agrego una propiedad quantity con el valor -1 ( porque ya exstia un producto , habia q restarle una unidad )
      : setcartItems(
          cartItems.map((item) =>
            item.id === product.id
              ? { ...productExist, quantity: productExist.quantity - 1 }
              // si no existe , entonces guardo el item ( el producto no estaba en el carrito y ahora fue agregado )
              : item
          )
        );
  };


      // funcion para limpiar carrito 
      const handleClearCart =() => {
        setcartItems([])
      }    
  

  return (
    <div>
      <Router>
        <Header  cartItems={cartItems}  />
        <RoutesComponent
          productsAll={productsItems}
          cartItems={cartItems}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          handleClearCart={handleClearCart}
        />
      </Router>
    </div>
  );
};

export default App;
