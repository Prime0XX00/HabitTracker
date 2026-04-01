const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const typeDefs = gql`
	type Query {
		hello: String
	}
`;

const resolvers = {
	Query: {
		hello: () => "Hello world!",
	},
};
const server = new ApolloServer({ typeDefs, resolvers });
const app = express();

const main = async () => {
	await server.start();
	server.applyMiddleware({ app });
};

main().then(
	app.listen({ port: 4000 }, () =>
		console.log(
			`Server ready at http://localhost:4000${server.graphqlPath}`,
		),
	),
);
