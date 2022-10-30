import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";
import { connect } from './database';

const app = express();
connect();

app.get('/', (req, res) => {
    res.json({
        message: 'Cypress Hill'
    })
})


app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
    context: {
        messageId: 'test'
    }
}));

app.listen(3110, () => console.log('Server on port 3110')); 