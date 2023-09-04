# Rappi CampusLands

![rappi](./assets/banner-rappi.png)

Rappi es una plataforma virtual compuesta por una aplicacion para dispositivos moviles y una pagina web por medio de la cual los aliados comerciales exhiben, ofrecen y comercializan productos y/o servicios para que sean adquiridos por los usuarios/consumidores.

### ¿Cómo funciona rappi?
Esta aplicacion tiene varios sevicios y herramientas a dispocision del usuario. Se puede ver los productos y servicios ofrecidos, se puede pagar, ver el estado del pedido, rastrear su ruta de entrega, calificarlos y ponerse en contacto.
Su diseño se encuentra divididos por categorias, al ingresar a cada categoria se observas los aliados comerciales que ofrecen sus productos y servicios.

Algunos de los servicios y herramientas disponibles son:

* Restaurante: Rappi permite a los usuarios pedir comida a restaurantes locales y recibir la entrega en su domicilio. Los usuarios pueden explorar menús, hacer pedidos y pagar a través de la aplicación.

* Supermercado: Rappi ofrece la posibilidad de comprar productos de supermercado, desde alimentos hasta productos de limpieza y más. Los usuarios pueden armar su lista de compras en línea y recibir la entrega en su hogar.

* Farmacia: Rappi permite a los usuarios pedir medicamentos y productos de farmacia a través de la aplicación. Esto es especialmente útil para personas que necesitan recetas médicas o productos de cuidado personal.

* Tiendas: Rappi ofrece la opción de comprar en tiendas físicas y recibir la entrega de los productos en su domicilio. Esto incluye una variedad de tiendas, como tiendas de conveniencia, electrónica, librerías, entre otros.

* Express: Rappi Express es un servicio de mensajería y entrega rápida. Los usuarios pueden enviar documentos, paquetes y otros artículos a través de la plataforma, y los repartidores se encargan de la entrega.

* Licores: Rappi permite a los usuarios pedir bebidas alcohólicas y licores a través de la aplicación, que son entregados de forma segura a su dirección.

* SOAT: En algunos países, Rappi ofrece la posibilidad de adquirir SOAT (Seguro Obligatorio de Accidentes de Tránsito) a través de la aplicación, facilitando el proceso de compra y entrega del seguro.

* Rappi Travel: Este servicio permite a los usuarios buscar y reservar vuelos, hoteles y actividades de viaje a través de la aplicación.

* Mascotas: Rappi ofrece la opción de comprar alimentos, productos y accesorios para mascotas, lo que facilita el cuidado de los animales domésticos.

## Enfoque

Nuesto enfoque principalmente se hará en el servicio que ofrece rappiTravel, ya que este nos ofrece una mejor curva de aprendizaje y es más de nuestro interes.

### Rappi_Travel
Rappi, la súper app de tecnología, anunció el lanzamiento de Rappi Travel, a través de la cual se podrán reservar y descubrir las mejores ofertas en viajes. A partir de hoy, los usuarios encontrarán vuelos a cualquier destino del mundo y, próximamente, esta nueva funcionalidad sumará alojamientos, seguros de viaje, paquetes turísticos, excursiones y alquiler de vehículos.

"En Rappi estamos en la búsqueda constante por ofrecer nuevas soluciones e innovaciones para los millones de usuarios que utilizan nuestra aplicación. A través de Rappi Travel, y de nuestra tecnología, queremos apoyar y brindar incentivos al sector turístico y contribuir a su reactivación para este nuevo año", afirmó Matías Casoy, gerente General para Rappi Cono Sur.

El objetivo principal de Rappi Travel es integrar las mejores ofertas de vuelo, y es parte de la estrategia de la compañía para consolidarse como la súper app de Latinoamérica.


A través de este nuevo botón, los usuarios podrán vivir una experiencia de compra novedosa, sencilla, rápida y totalmente digital. Además, tendrán la posibilidad de crear alertas para ser notificados sobre los mejores vuelos y promociones. 

"Gran parte de nuestros usuarios son viajeros y sabemos que para ellos puede ser muy útil contar con la posibilidad de acceder a ofertas de pasajes aéreos en la misma aplicación donde realizan sus compras de cercanía. Como oferta de lanzamiento, durante todo el mes de enero, los usuarios que realicen una compra en Rappi Travel encontrarán promociones y devoluciones de hasta hasta el 20% en rappicréditos, que podrán ser utilizados para compras en cualquier producto dentro de la app", afirmó Guido Becher, Head Global de Rappi Travel.

## Bibliografia
* [Rappi](https://www.rappi.com.co/)
* [Rappi - Terminos y Condiciones](https://legal.rappi.com.co/colombia/terminos-y-condiciones-de-uso-de-plataforma-rappi-2/)

## AUTORES Y COLABORADORES
- [Jonathan David Alvarez Monsalve](https://github.com/jdam97)    
- [Juan Camilo Paez Ariza](https://github.com/AoKuangg)
- [CampusLands](https://github.com/CampusLands)

---------------------------------------------------------------------------------------------------------------------------------------------------------------------.

# **PROYECTO RAPPITRAVEL CAMPUS**

La plataforma "RAPPI TRAVEL CAMPUS" es un proyecto innovador y orientado al servicio que busca revolucionar la forma en que las personas planifican y reservan sus viajes,estadias y automoviles. Inspirado por el éxito de servicios como Rappi Travel y consciente de la creciente demanda de soluciones integrales, utilizando una base de datos con Mongodb y Node.js (Express).


## OBJETIVO GENERAL

El proyecto se centra en proporcionar una plataforma integral de reservas de vuelos, automóviles y hospedajes que tiene como objetivo simplificar y mejorar la experiencia de planificación de viajes para los usuarios, brindando comodidad, seguridad y eficiencia a la hora de reservar tus vuelos, hospedajes o mediod e transporte.


## OBJETIVOS ESPECIFICOS

1. Diseñar e implementar una base de datos para almacenar información relevante, como usuarios, vuelos, hospedajes, automoviles, contratos, etc.

2. Desarrollar un módulo de gestión de contratos y su respectivo estado que permita agregar, editar y eliminar nuevos contratos, así como mantener actualizada su información.

3. Crear un módulo de gestión de vuelos que permita mantener un registro de los vuelos reservados , incluyendo su información de usuario y detalles de las reservas.

4. Crear un módulo de gestión de hospedajes que permita mantener un registro de los hospedajes reservados de tipo apartamento, hotel u otros , incluyendo su información de usuario y detalles de las reservas.

5. Crear un módulo de gestión de automoviles que permita mantener un registro de los automoviles reservados , incluyendo su información de recodiga y dejada, además de la información de las reservas.

## COLECCIONES

Inicialmente contendrá estas tablas:

- **USUARIOS**: Permite registrar nuevos usuarios y gestionar los usuarios y registrados.

- **VUELOS**: Permite Registrar y gestionar los vuelos de los usuarios con su respectiva información.

- **HOSPEDAJES**: Esta tabla contiene las reservas de los hospedajes además de su respectiva información.

- **AUTOMOVILES**: Hace referencia a las reservas de los mismos automoviles con su punto de recogida y dejada.

- **CONTRATOS**: Esta tabla contiene las reservas de cada usuario separandolas por tipo y el estado en el que se encuentra la reserva.

- **ROL**: PENDIENTE

## DIAGRAMA DE LA BASE DE DATOS

![Diagrama relacional de la base de datos](assets/RAPPI.jpg)

<h2 style="background-color: #27AE60; color: white; padding: 10px;">INSTALACIÓN</h2>

1. Clonar este repositorio en tu maquina, para eso utiliza el siguiente script:

```bash
git clone https://github.com/jdam97/rappi_campus.git
```

2. Ahora asegurate de tener instalado **Node.js**, si no lo tienes instalado podrás hacerlo en el siguiente link [Node js](https://nodejs.org/es/download)

3. Instala las dependencias requeridas del proyecto con el siguiente script:

```bash
npm i
```

4. Dentro del proyecto copia el siguiente ejemplo de configuracion y pegalos en el archivo .env, luego de esto asigna los valores correspondientes a cada campo, de esta manera asignas tus propias variables de entorno.

```
POR DEFINIR
MY_SERVER={}
ATLAS_CONNECTION={}
JWT_KEY={}
```

5. 
# PARA LAS COLECCIONES:

Busca en la carpeta  **database** y luego el archivo **db.mongodb**(querys mongodb), selecciona todo y ejecuta todos los query en orden de la base de datos para crear la DB y sus respectivas colecciones.

# PARA LOS DATOS:
Busca la carpeta **database** y luego el archivo **data.mongodb**(Datos mongodb)  ejecuta todas las inserciones de los datos.


6. Para finalizar, debes ejecutar en la terminal el siguiente comando. Con él inicializas el servidor y podrás empezar a correr el proyecto.

```bash
npm run dev
```
------------------------------------------------------------------------------------------------------------------------------------------------

## IMPLEMENTACIÓN DE LOS ENDPOINTS

\*Hay algo a tener muy en cuenta a la hora de usar los endpoints y eso es el **JWT**, esto debido a que todos **solicitan un TOKEN** de un empleado registrado.

**A TENER EN CUENTA:** Cuando un empleado se registra, el endpoint **NO SOLICITA** un **TOKEN**, si no que le crea uno. Este servirá para validar en los demás endpoints.

**NOTA**: Las url mostradas en la siguiente parte son de ejemplo y pueden variar dependiendo de la configuracion en las variables de entorno que pusiste al momento de la instalacion y configuracion explicados en el punto **4**.

Aparte utilizar **Thunder Client** para ultilizar los endpoints.

### USUARIOS
//Genera un token haciendo registrando un empleado con la solicitud POST en el endpoint empleado, a continuación te muestro la url que debes usar:

```bash
  http://127.16.16.16:4600/usuarios
```

_**NOTA: RECUERDA QUE LAS URL USADAS EN LA DOCUMENTACIÓN SON DE EJEMPLO, VARÍAN DEPENDIENDO DE TUS VARIABLES DE ENTORNO**_

Ahora usando este formato json crea un nuevo usuario y a su vez crea un nuevo token, es necesario que se envie el formato de esta manera ya que se aplica un DTO que verifica todos los datos.

**A TENER EN CUENTA:** Si quieres generar un nuevo token creando otro usuario, debes cambiar el correo, ya que este es un campo único.

```json
    {
      "id": 6,
      "cedula": "123456789",
      "nombre": "Juan",
      "apellido": "Perez",
      "email": "juan@example.com",
      "ubicacion": {
        "pais": "Colombia",
        "departamento": "Antioquia",
        "ciudad": "Medellín",
        "direccion": "Calle 123"
    }}
```

_Este debe ser el primero, debido a que con su POST generamos el TOKEN que requieren los demás endpoints._


POST: `http://127.16.16.16:4600/usuarios` _Este endpoint permite registrar un usuario nuevo, además de generar su TOKEN_

GET: `http://127.16.16.16:4600/usuarios` _Este endpoint permite listar todos los usuarios registrados_

GET: `http://127.16.16.16:4600/usuarios/:id` _Este endpoint permite listar un empleado especifico por el id_

DELETE: `http://127.10.16.15:4018/empleados/:ObjectId` _Este endpoint permite eliminar los usuarios buscandolo por el ObjectId_


### VUELOS

El endpoint VUELOS permite crear una nueva reserva de vuelo,editarloy  obtener todas las reservas o una es específica por su numero de id.

_**A TENER EN CUENTA: ES NECESARIO QUE SE ENVÍE EL FORMATO DE ESTA MANERA YA QUE SE APLICA UN DTO QUE VERIFICA TODOS LOS DATOS**_

**EJEMPLO**

```json
    {
      "id": 6,
      "origen": "Bucaramanga",
      "destino": "Bogotá",
      "ida": "2023-09-01T00:00:00.000Z",
      "vuelta": "2023-09-10T00:00:00.000Z",
      "npasajeros": 3,
      "clase": "primeraClase",
      "tipoHuesped": {
        "adultos": 2,
        "niños": 1
      }
    }
```

POST: `http://127.16.16.16:4600/vuelos` _Este endpoint permite registrar una reserva de vuelo_

GET: `http://127.16.16.16:4600/vuelos` _Este endpoint permite listar las reservas de vuelo_

GET: `http://127.16.16.16:4600/vuelos:id` _Este endpoint permite listar una reserva en especifico por id de la reserva_

DELETE: `http://127.16.16.16:4600/:Objectid` _Este endpoint permite eliminar las reservas buscandolo por Objectid_

### HOSPEDAJES

Hospedajes es un endpoint que permite manejar las reservas de los usuarios ya registrados.

_**A TENER EN CUENTA: ES NECESARIO QUE SE ENVÍE EL FORMATO DE ESTA MANERA YA QUE SE APLICA UN DTO QUE VERIFICA TODOS LOS DATOS**_

**EJEMPLO**
```json
    {
      "id": 6,
      "destino": "Cartagena",
      "tipo": "hotel",
      "llegada": "2023-10-15T00:00:00.000Z",
      "salida": "2023-10-20T00:00:00.000Z",
      "habitaciones": 1,
      "nhuespedes": 2,
      "tipo_huesped": {
        "adultos": 2,
        "niños": 0
      }}
```

POST: `http://127.16.16.16:4600/hospedajes` _Este endpoint permite registrar una reserva de hospedaje nuevo_

GET: `http://127.16.16.16:4600/hospedajes` _Este endpoint permite listar todos las reservas de hospedajes_

GET: `http://127.16.16.16:4600/hospedajes/:id` _Este endpoint permite listar una reserva especifica pasandole el id_

DELETE: `http://127.16.16.16:4600/hospedajes/:ObjectID` _Este endpoint permite elimionar una reserva pasandole el ObjectID de la que se queire eliminar_


### AUTOS

Autos permite registrar cada reserva nueva, eliminar, actualizar y mostrar todas las reservas disponibles.

_**A TENER EN CUENTA: ES NECESARIO QUE SE ENVÍE EL FORMATO DE ESTA MANERA YA QUE SE APLICA UN DTO QUE VERIFICA TODOS LOS DATOS**_

**EJEMPLO**

```json
    {
      "id": 6,
      "punto_recogida": "Hotel12",
      "punto_devolucion": "Aeropuerto",
      "fecha_recogida": "2023-09-15",
      "fecha_devolucion": "2023-09-25"
    },
```
POST: `http://127.16.16.16:4600/autos` _Este endpoint permite registrar una reserva de auto_

GET: `http://127.16.16.16:4600/autos` _Este endpoint permite listar todas las reservas de autos_

GET: `http://127.16.16.16:4600/autos:id` _Este endpoint permite listar una reserva por su id_

PUT: `http://127.16.16.16:4600/autos/:ObjectID` _Este endpoint permite editar una reserva pasandole el ObjectID_

DELETE: `http://127.16.16.16:4600/autos/:ObjectID` _Este endpoint permite eliminar una reserva pasandole el ObjectID_

### CONTRATOS

Contratos permite llevar registro del tipo de reserva que se hace por usuario.

_**A TENER EN CUENTA: ES NECESARIO QUE SE ENVÍE EL FORMATO DE ESTA MANERA YA QUE SE APLICA UN DTO QUE VERIFICA TODOS LOS DATOS**_

**EJEMPLO**

```json
 {
      "id": 6,
      "usuarioId": 1,
      "tipoReserva": "vuelo",
      "reservaId": 1,
      "fechaContrato": "2023-08-29",
      "estado": "activo"
    }
```
POST: `http://127.16.16.16:4600/contratos` _Este endpoint permite registrar un contrato nuevo en la DB_

GET: `http://127.16.16.16:4600/contratos` _Este endpoint permite listar todos los contratos actuales_

GET: `http://127.16.16.16:4600/contratos:id` _Este endpoint permite listar un contrato por su id_

PUT: `http://127.16.16.16:4600/contratos:ObjectID` _Este endpoint permite editar un contrato pasandole el ObjectID_

DELETE: `http://127.16.16.16:4600/contratos/:ObjectID` _Este endpoint permite eliminar un contrato pasandole el ObjectID_



## AUTORES Y COLABORADORES

- [jdam97](https://github.com/jdam97)
- [AoKuangg](https://github.com/AoKuangg)
- [CampusLands](https://github.com/CampusLands)

