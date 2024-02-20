import { Producto } from "./producto.model";

let mockProductos: Producto[] = [
    {
        id: 1,
        componente: 'Tarjeta Grafica',
        nombre: 'AMD Radeon RX 6750XT',
        descripcion: 'OC 12GB GDDR6',
        precio: 369
    },
    {
        id: 2,
        componente: 'Tarjeta Grafica',
        nombre: 'Gigabyte GeForce RTX 3060',
        descripcion: 'OC 12GB GDDR6 Rev 2.0',
        precio: 334
    },
    {
        id: 3,
        componente: 'Tarjeta Grafica',
        nombre: 'MSI GeForce RTX 4090',
        descripcion: 'X TRIO 24GB GDDR6X DLSS3',
        precio: 1999
    },
    {
        id: 4,
        componente: 'Procesador',
        nombre: 'AMD Ryzen 5 7600',
        descripcion: '3.8/5.1 GHz',
        precio: 209
    },
    {
        id: 5,
        componente: 'Procesador',
        nombre: 'Intel Core i7-14700KF',
        descripcion: '3.4/5.6GHz',
        precio: 415
    },
    {
        id: 6,
        componente: 'Procesador',
        nombre: 'AMD Ryzen 5 7600X',
        descripcion: '4.7 GHz sin Ventilador',
        precio: 245
    },
    {
        id: 7,
        componente: 'Ventilador CPU',
        nombre: 'Forgeon Solarian Cooler',
        descripcion: '4Pipes 120mm ARGB',
        precio: 59
    },
    {
        id: 8,
        componente: 'Ventilador CPU',
        nombre: 'Nfortec AEGIR X',
        descripcion: '6Pipes 140mm',
        precio: 245
    },
    {
        id: 9,
        componente: 'Ventilador CPU',
        nombre: 'Noctua NH-U12S',
        descripcion: '4Pipes 120mm',
        precio: 79
    }
]
export default mockProductos;