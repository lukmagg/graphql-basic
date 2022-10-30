import { tasks } from './sample'
import User from './models/User'

export const resolvers = {
    
    Query: {
        hello: () => {
            return 'Ushuaia'
        },
        greet: (root, args, context) => {
            console.log(context)
            return `Hello ${args.name}`
        },
        tasks: () => {
            return tasks
        },
        async users(){
            return await User.find()
        }
    },

    Mutation: {
        createTask(_, { input }){
            input._id = tasks.length
            tasks.push(input)
            return input
        },
        async createUser(_, { input }){
            const newUser = new User(input)
            await newUser.save()
            return newUser
        },
        async deleteUser(_, { _id }){
            return User.findByIdAndDelete(_id)
        }
    }



};