const misProductos = [
    {
      id: 1,
      nombre: "Royal Canin",
      precio: 15500,
      img: "./img/royalcanin.png",
      detalle: "Alimento balanceado Royal Canin"
    },
    {
      id: 2,
      nombre: "Eukanuba",
      precio: 16000,
      img: "./img/eukanuba.png",
      detalle: "Alimento balanceado Eukanuba"
    },
    {
      id: 3,
      nombre: "Pedigree",
      precio: 12000,
      img: "./img/pedigree.png",
      detalle: "Alimento balanceado Pedigree"
    },
    {
      id: 4,
      nombre: "Criadores",
      precio: 10000,
      img: "./img/criadores.png",
      detalle: "Alimento balanceado Criadores"
    },    
    {
      id: 5,
      nombre: "Old Prince",
      precio: 13500,
      img: "./img/oldprince.png",
      detalle: "Alimento balanceado Old Prince"
    },
    {
      id: 6,
      nombre: "Vital Can",
      precio: 14800,
      img: "./img/vitalcan.png",
      detalle: "Alimento balanceado Vital Can"
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
  