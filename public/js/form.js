async function traerSelect(){
    try {
        // traemos json y guardamos en const
        const resp = await fetch('../../public/docs/selectlist.json')
        // si ocurre error
        if (!resp.ok){
            throw new Error(`Estado de la respuesta: ${resp.status}`);
        }
        
        // convierte datos a json
        const json = await resp.json();
        // guardamos json en const provincias
        const provincias = json.provincias;
        // eltos del select para mostrar lista
        const select = document.getElementById('opciones');

        // itera cada provincia y las agrega al select
        provincias.forEach(provincia => {
            // crea elemento option para cada provincia
            const option = document.createElement('option');
            // el contenido del option se rellena con la prov iterada
            option.textContent = provincia;
            // lo agrega al select
            select.appendChild(option);
        });

    } catch (error){
        console.error(error.message);
    }
}

// escuchamos evento submit
document.getElementById('formulario').addEventListener('submit', function(event){
    // evitamos que el form se envíe de manera predeterminada
    event.preventDefault();
    
    // obtenemos valores delos input ingresados
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const telefono = document.getElementById('telefono').value;
    const ciudad = document.getElementById('ciudad').value;
    const opciones = document.getElementById('opciones').value;
    const textarea = document.getElementById('textarea').value;

    // guardamos los valores en un objeto
    const datos = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        password: password,
        telefono: telefono,
        ciudad: ciudad,
        opciones: opciones,
        textarea: textarea
    };

    console.log(datos);
});

// llamamos a la funcion
traerSelect();
