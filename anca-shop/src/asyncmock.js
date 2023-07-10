const misProductos = [
  {
    nombre: "Royal Canin",
    img: "./img/royalcanin.png",
    id: 1,
    precio: 15500,
    categoria: "alimento",
    detalle: "Alimento balanceado Royal Canin"
  },
  {
    nombre: "Eukanuba",
    img: "./img/eukanuba.png",
    id: 2,
    precio: 16000,
    categoria: "alimento",
    detalle: "Alimento balanceado Eukanuba"
  },
  {
    nombre: "Pedigree",
    img: "./img/pedigree.png",
    id: 3,
    precio: 12000,
    categoria: "alimento",
    detalle: "Alimento balanceado Pedigree"
  },
  {
    nombre: "Criadores",
    img: "./img/criadores.png",
    id: 4,
    precio: 10000,
    categoria: "alimento",
    detalle: "Alimento balanceado Criadores"
  },
  {
    nombre: "Old Prince",
    img: "./img/oldprince.png",
    id: 5,
    precio: 13500,
    categoria: "alimento",
    detalle: "Alimento balanceado Old Prince"
  },
  {
    nombre: "Vital Can",
    img: "./img/vitalcan.png",
    id: 6,
    precio: 14800,
    categoria: "alimento",
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

export const getProductosPorCategoria = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = misProductos.find((prod) => categoria === categoria);
      resolve(producto);
    });
  });
};