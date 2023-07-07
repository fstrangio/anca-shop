const misProductos = [
    {
      id: "Royal Canin",
      nombre: "Royal Canin",
      precio: 15500,
      img: "./img/royalcanin.png",
      leyenda: "Alimento balanceado Royal Canin"
    },
    {
      id: "Eukanuba",
      nombre: "Eukanuba",
      precio: 16000,
      img: "./img/eukanuba.png",
      leyenda: "Alimento balanceado Eukanuba"
    },
    {
      id: "Pedigree",
      nombre: "Pedigree",
      precio: 12000,
      img: "./img/pedigree.png",
      leyenda: "Alimento balanceado Pedigree"
    },
    {
      id: "Criadores",
      nombre: "Criadores",
      precio: 10000,
      img: "./img/criadores.png",
      leyenda: "Alimento balanceado Criadores"
    },    
    {
      id: "Old Prince",
      nombre: "Old Prince",
      precio: 13500,
      img: "./img/oldprince.png",
      leyenda: "Alimento balanceado Old Prince"
    },
    {
      id: "Vital Can",
      nombre: "Vital Can",
      precio: 14800,
      img: "./img/vitalcan.png",
      leyenda: "Alimento balanceado Vital Can"
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
  