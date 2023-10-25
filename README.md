
![Logo](https://drive.google.com/uc?export=download&id=12zBhO-hc_vPfFuycQH5RJDVilOG_A3gM)


# NetflixS2

NetflixS2 es una aplicación que representa un ejemplo básico de una plataforma de streaming bajo demanda, similar a servicios populares como Netflix. Está desarrollada utilizando la biblioteca de JavaScript llamada React, que se utiliza comúnmente para crear aplicaciones web interactivas y de una sola página (SPA, por sus siglas en inglés).

**Protocolo de Streaming:** NetflixS2 utiliza el protocolo HLS (HTTP Live Streaming) para garantizar una experiencia de streaming suave y adaptable en una variedad de dispositivos y condiciones de red. HLS es ampliamente compatible y permite la transmisión de contenido multimedia en tiempo real a través de la web.




## Screenshots

![HomeMenu](https://drive.google.com/uc?export=download&id=10YmqWkYF6wJq1GXUsO_gPSwU5Y9Qx9na)

![ContetView](https://drive.google.com/uc?export=download&id=1a2JXSiVJU7s2vwVZBQS6zM91KRQdZq_G)

![Network](https://drive.google.com/uc?export=download&id=1zxaadJCUvg_VNCKKONYf5f7ZIho_sPw4)


## Live Demo

Puedes probar la aplicacion aqui: 
https://proyecto-telecomunicacio-7e0e4.web.app

## Tech Stack

**Client:** ReactJS

**Server:** Firebase


## Servicios necesarios.

Para utilizar este proyecto necesistas contar con una CDN previamente configurada para poder servir el contenido multimedia mediante el protocolo HLS algunas que te recomendamos:

 - [AWS CloudFront](https://docs.aws.amazon.com/es_es/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
 - [Bunny.net](https://bunny.net/)

 Adicionalmente para este proyecto se utilizan los servicios de Firebase por lo tanto debes crear y configurar un proyecto, ya que   es nuestro motor de base de datos y servidor de despliegue.

 - [Bunny.net](https://firebase.google.com/?hl=es-419)


## Instalacion

Instala el proyecto con npm

```bash
  cd netflixs2
  npm install
  npm start
```
    
## Environment Variables

Para ejecutar este proyecto, necesitas configurar tu  archivo .env coon las siguientes Variables de entorno 


  `REACT_APP_apiKey` 

  `REACT_APP_authDomain`

  `REACT_APP_projectId` 

  `REACT_APP_storageBucket` 

  `REACT_APP_messagingSenderId`

  `REACT_APP_appId`

  `REACT_APP_measurementId` 

Puedes encontrar un archivo `.env.example` para ayudarte.



## Deployment

Para desplegar este proyecto, debes tener firebase hosting previamente configurado. Luego de ello ejecutar los siguiente comandos.

```bash
  npm install -g firebase-tools
  firebase login
  firebase init
  firebase deploy
```


## Relacionado

Algunos proyectos y librerias utiles para el desarrollo de este proyecto.

[HLS.js](https://github.com/video-dev/hls.js)


## Documentacion

[Documentacion](https://linktodocumentation)


## Authors

- [@DJPORTILLO30](https://github.com/DJPORTILLO30)
- [@SFMZ21](https://github.com/SFMZ21)
- [@lighnio](https://github.com/lighnio)
- [@HJOC15](https://github.com/HJOC15)
- [@Davinderpro01](https://github.com/Davinderpro01)


## License

[MIT](https://github.com/DJPORTILLO30/netflixs2/blob/master/LICENSE)

