class EventBrite {
    constructor() {
        this.token_auth = 'B7GEKAL4VDA4RQLZP43S';
        this.ordenar = 'date';
    }

    // Obtiene las categorias en init()
    async obtenerCategorias() {
        // Consultar las categorias a la REST API
        const respuestaCategorias = await fetch (`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);

        // Esperar la respuesta de las categorias y devolver un json
        const categorias = await respuestaCategorias.json();

        // Devolvemos el resultado
        return {
            categorias
        }
    }
}