# Proyecto E-commerce con React y Firebase

Este proyecto es una aplicación web de comercio electrónico desarrollada con **React**. El objetivo es ofrecer una plataforma donde los usuarios puedan navegar por un catálogo de productos, ver detalles específicos de cada uno, agregar productos a un carrito de compras, y realizar una compra final con validación de datos de contacto. La aplicación está conectada a **Firebase** para la gestión de datos y almacenamiento de productos, así como la creación de órdenes de compra.

## Funcionalidades

### 1. Catálogo de productos
- Listado dinámico de productos almacenados en **Cloud Firestore**.
- Filtros de búsqueda por **autor** y **género** desde el menú de navegación (NavBar).

### 2. Detalles del producto
- Cada producto cuenta con una página de detalle donde se puede ver la información completa y seleccionar la cantidad de ítems a comprar.
- Sección de "cantidad" interactiva que permite sumar o restar unidades del producto.

### 3. Carrito de compras
- El estado del carrito de compras se almacena globalmente mediante **Context API**.
- Los usuarios pueden agregar productos al carrito, ajustar cantidades, y eliminar ítems.
- Visualización en tiempo real del total de productos seleccionados y el precio total.

### 4. Proceso de compra (CheckOut)
- Un formulario de contacto para completar los datos del comprador (nombre, teléfono, y email) con validación de los campos.
- Generación de una orden de compra en **Firestore**, incluyendo la lista de productos seleccionados y los datos del cliente.
- Muestra el ID de la orden generada, junto con el detalle de la compra y los datos del cliente.

### 5. Estilización y experiencia de usuario
- **CSS personalizado** para la aplicación.
- Implementación de mensajes condicionales como "carrito vacío" o "producto sin stock".
- Interfaz amigable, con botones interactivos y un diseño responsivo.

## Tecnologías utilizadas

- [React](https://reactjs.org/): Biblioteca de JavaScript para construir interfaces de usuario.
- [Firebase](https://firebase.google.com/): Plataforma utilizada para almacenamiento en tiempo real, incluyendo **Firestore** para la base de datos y gestión de productos.
- [React Router](https://reactrouter.com/): Librería para la navegación entre las diferentes vistas de la aplicación.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS): Para la estilización y diseño responsivo.

## Instalación y ejecución

1. Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/proyecto-ecommerce.git
