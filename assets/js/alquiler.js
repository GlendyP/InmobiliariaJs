const propiedadesAlquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        banos: 2,
        costo: '2.000',
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        banos: 3,
        costo: '2,500',
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src:'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial' ,
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        banos: 2,
        costo: '2,200',
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa Cape Coral',
        src: 'https://www.century21.com/listhub/photo/maxxmax/lh.rdcpix.com/53fdc5ae3482ca287700633b99c21cfdl-f3753426205r.jpg',
        descripcion: 'Adéntrate en un mundo de lujo con esta casa NUEVA de 3 dormitorios y 2 baños que cuenta con un diseño impecable y una calidad superior',
        ubicacion: ' 2005 NW 18th Street Cape Coral, FL 33993',
        habitaciones: 3,
        banos: 2,
        costo: '4.150',
        smoke: false,
        pets: true
    },
]


const permiteFumar = (permite) => {
    let puedesFumar;
    if (permite === true) {
      puedesFumar = `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`;
    } else {
      puedesFumar = `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`;
    }
    return puedesFumar;
  };
  
  const aceptaMascotas = (acepta) => {
    let aceptaMascota;
    if (acepta === true) {
      aceptaMascota = `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`;
    } else {
      aceptaMascota = `<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>`;
    }
    return aceptaMascota;
  };
  
  const alquiler = document.querySelector("#alquileres");
  let templateAlquiler = "";
  
  for (let propiedad of propiedadesAlquiler) {
    templateAlquiler += `
                  <div class="col-md-4 mb-4">
                  <div class="card">
                      <img src="${propiedad.src}" class="card-img-top" alt="${
      propiedad.nombre
    }">
                      <div class="card-body">
                          <h5 class="card-title">${propiedad.nombre}</h5>
                          <p class="card-text">${propiedad.descripcion}</p>
                          <p><i class="fas fa-map-marker-alt"></i> ${
                            propiedad.ubicacion
                          }</p>
                          <p><i class="fas fa-bed"></i> ${
                            propiedad.habitaciones
                          } Habitaciones | 
                          <i class="fas fa-bath"></i> ${propiedad.banos} Baños</p>
                          <p><i class="fas fa-dollar-sign"></i> ${
                            propiedad.costo
                          }</p>
                              ${permiteFumar(propiedad.smoke)}
                              ${aceptaMascotas(propiedad.pets)}
                      </div>
                  </div>
              </div>
              `;
  }
  alquiler.innerHTML = templateAlquiler;
  