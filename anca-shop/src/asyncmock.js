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
    detalle: "Alimento para perros Old Prince"
  },
  {
    nombre: "Vital Can",
    img: "./img/vitalcan.png",
    id: 6,
    precio: 14800,
    categoria: "alimento",
    detalle: "Alimento para perros Vital Can"
  },
  {
    nombre: "Buzo California rosa",
    img: "./img/california.png",
    id: 7,
    precio: 5800,
    categoria: "ropa",
    detalle: "Buzo color rosa con capucha"
  },
  {
    nombre: "Buzo con estampa de caniches",
    img: "./img/estampacaniches.png",
    id: 8,
    precio: 4200,
    categoria: "ropa",
    detalle: "Buzo color verde sin mangas estampado"
  },
  {
    nombre: "Buzo rojo con capucha",
    img: "./img/rojo.png",
    id: 9,
    precio: 7000,
    categoria: "ropa",
    detalle: "Buzo rojo con mangas"
  },
  {
    nombre: "Buzo negro tejido",
    img: "./img/tejido.png",
    id: 10,
    precio: 6200,
    categoria: "ropa",
    detalle: "Buzo negro tejido"
  },
  {
    nombre: "Juguete Kong",
    img: "./img/kong.png",
    id: 11,
    precio: 9700,
    categoria: "juguete",
    detalle: "Juguete para ejercitar los dientes"
  },
  {
    nombre: "Juguete Nylabone",
    img: "./img/nylabone.png",
    id: 12,
    precio: 8900,
    categoria: "juguete",
    detalle: "Juguete didáctico para buscar comida"
  },
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

export const getProductosPorCategoria = (categoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosFiltrados = misProductos.filter(
        (prod) => prod.categoria === categoria
      );
      resolve(productosFiltrados);
    }, 2000);
  });
};

