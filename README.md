# MBLabs Teste técnico

Essa API foi construída para auxiliar na gestão de eventos, para facilitar a procura e compra de ingressos para eventos diversos..

# Eventos

### Cadastro de um novo evento

Esta rota é utilizada para a criação de novos eventos.

`POST /events/ - FORMATO DA REQUISIÇÃO:`

```json
{
	"name": "1º curso python",
    "location_name": "Pavilhão 1",
	"date": "30/07/2022",
    "description": "Curso básico de python para iniciantes",
    "time": "9 horas",
    "organization": "Kenzie",
    "tickets": 200
}
```

`POST /events/ - FORMATO DA RESPOSTA - STATUS 201:`

```json
{
    "id": "id_do_evento",
	"name": "1º curso python",
    "location_name": "Pavilhão 1",
	"date": "30/07/2022",
    "description": "Curso básico de python para iniciantes",
    "time": "9 horas",
    "organization": "Kenzie",
    "tickets": 200
}
```

### Busca de todos os eventos

Esta rota é utilizada para retornar todos eventos cadastrados.

`GET /events/ - FORMATO DA REQUISIÇÃO:`

```json
{}
```

`GET /events/ - FORMATO DA RESPOSTA - STATUS 200:`

```json
{
    [
        {
            "id": "id_do_evento",
            "name": "1º curso python",
            "location_name": "Pavilhão 1",
            "date": "30/07/2022",
            "description": "Curso básico de python para iniciantes",
            "time": "9 horas",
            "organization": "Kenzie",
            "tickets": 200
        },
        {
            "id": "id_do_evento",
            "name": "1º curso typescrypt",
            "location_name": "Zoom",
            "date": "15/08/2022",
            "description": "Curso básico de typescrypt para iniciantes",
            "time": "14 horas",
            "organization": "MB Labs",
            "tickets": 400
        }
    ]
}
```

### Pesquisa de eventos

Esta rota é utilizada para pesquisa de eventos.

`GET /events/search/:params - FORMATO DA REQUISIÇÃO:`

```json
params = Kenzie
{}
```

`GET /events/search/:params - FORMATO DA RESPOSTA - STATUS 200:`

```json
{
    [
        {
            "id": "id_do_evento",
            "name": "1º curso python",
            "location_name": "Pavilhão 1",
            "date": "30/07/2022",
            "description": "Curso básico de python para iniciantes",
            "time": "9 horas",
            "organization": "Kenzie",
            "tickets": 200
        }
    ]
}
```

### Remoção de evento

Esta rota é utilizada para deletar eventos cadastrados.

`DELETE /events/:event_id - FORMATO DA REQUISIÇÃO:`

```json
{}
```

`DELETE /events/:event_id - FORMATO DA RESPOSTA - STATUS 200:`

```json
{
    "message": "Event deleted"
}
```

### Atualização de evento

Esta rota é utilizada para atualizar dados de eventos cadastrados.

`PATCH /events/:event_id - FORMATO DA REQUISIÇÃO:`

```json
{
    "date": "02/08/2022"
}
```

`PATCH /events/:event_id - FORMATO DA RESPOSTA - STATUS 200:`

```json
{
    "id": "id_do_evento",
    "name": "1º curso python",
    "location_name": "Pavilhão 1",
    "date": "02/08/2022",
    "description": "Curso básico de python para iniciantes",
    "time": "9 horas",
    "organization": "Kenzie",
    "tickets": 200
}
```

# Compra

### Compra de tickets

Esta rota é utilizada para a compra de tickets para eventos.

`POST /buy/:event_id - FORMATO DA REQUISIÇÃO:`

```json
{
	"quantity": 2
}
```

`POST /buy/:event_id - FORMATO DA RESPOSTA - STATUS 200:`

```json
{
    [
        {
            "name": "1º curso python",
            "location_name": "Pavilhão 1",
            "date": "02/08/2022",
            "time": "9 horas",
            "organization": "Kenzie"
        },
        {
            "name": "1º curso python",
            "location_name": "Pavilhão 1",
            "date": "02/08/2022",
            "time": "9 horas",
            "organization": "Kenzie"
        }
    ]
}
```