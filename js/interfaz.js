class Interfaz {
    constructor() {
        // Inicializa la app al instanciar
        this.init();
        // Leer el resultado
        this.listado = document.getElementById('resultado-eventos');
    }

    //Método para cuando inicialice la app
    init() {
        // Llamar a imprimirCategorias()
        this.imprimirCategorias();
    }

    // Imprimir categorias
    imprimirCategorias() {
        const listaCategorias = eventbrite.obtenerCategorias()
            .then(categorias => {
                const cats = categorias.categorias.categories;
                
                // Seleccionar el Select de Categorias
                const selectCategoria = document.getElementById('listado-categorias');

                // Recorremos el arreglo e imprimimos los <option>
                cats.forEach(cat => {
                    const option = document.createElement('option');
                    option.value = cat.id;
                    option.appendChild(document.createTextNode(cat.name_localized));
                    selectCategoria.appendChild(option);
                })
            })
    }
}