const { ApolloServer, gql} = require('apollo-server');
import mongoose from 'mongoose'
import Pedidos from './models/pedidos'

const typeDefs = gql`
 type Pedido {
        _id: ID
        produto: String
        email: String
    }, 
    type Query{
        Pedidos: [Pedido]
        
    },
    type Mutation{
        createPedido(email: String, produto: String): Pedido
    }

`

const resolvers = {
    Query: {
    Pedidos: () => Pedidos.find(),
    
    
},
Mutation:{
   
    createPedido: (_, {produto, email}) =>   Pedidos.create({produto, email})
}
}



mongoose.connect('mongodb://localhost:27017/postit', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url})=> console.log(`iniciou o server ${url}`))


