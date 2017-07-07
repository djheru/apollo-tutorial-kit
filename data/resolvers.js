import {Author} from './connectors';

const resolvers = {
	Query: {
		author(root, args) {
			return Author.find({where: args})
		}
	},
	Author: {
		posts(author) {
			return author.getPosts();
		}
	},
	Post: {
		author(post) {
			post.getAuthor();
		}
	}
};

export default resolvers;