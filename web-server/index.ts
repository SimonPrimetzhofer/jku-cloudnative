import * as express from 'express';
import { IPerson } from './person';

const persons: IPerson[] = [
    { firstname: 'Simon', lastname: 'Primetzhofer', age: 22 },
    { firstname: 'Stefan', lastname: 'Haslhofer', age: 22 },
    { firstname: 'Ilija', lastname: 'Jolevski', age: 29 }
]

const server = express();
server.get('/api/persons', (_, response) => response.send(persons));

server.get('/api/persons/:filter', (request, response) => 
    response.send(persons.filter(
        person => person.firstname.includes(request.params.filter) || 
        person.lastname.includes(request.params.filter))
    )
);

server.post('/api/persons', (request, response) => {
    persons.push(request.body);
    response.statusCode = 201;
    response.send(persons);
});

const port = 80;
server.listen(port, () => console.log("Server is listening on port 80"));