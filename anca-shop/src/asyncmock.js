const misProductos = [
    {
      id: "royal-canin",
      nombre: "Royal Canin",
      precio: 15500,
      img: "./img/royalcanin.png",
      leyenda: "Alimento balanceado Royal Canin"
    },
    {
      id: "eukanuba",
      nombre: "Eukanuba",
      precio: 16000,
      img: "./img/eukanuba.png",
      leyenda: "Alimento balanceado Eukanuba"
    },
    {
      id: "pedigree",
      nombre: "Pedigree",
      precio: 12000,
      img: "./img/pedigree.png",
      leyenda: "Alimento balanceado Pedigree"
    }
  ];
  
  export const getProductos = () => {
    return new Promise((res) => {
      setTimeout(() => {
        res(misProductos);
      }, 2000);
    });
  };
  
  export const getUnProducto = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const producto = misProductos.find((prod) => prod.id === id);
        resolve(producto);
      });
    });
  };
  