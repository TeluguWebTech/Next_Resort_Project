

import NextAuth from 'next-auth'
import CredentialProvider from 'next-auth/providers/credentials'
import UserModel from './utils/models/User'


export const {auth, signIn, signOut, handlers:{GET, POST}} = NextAuth({
    providers:[
        CredentialProvider({
            name: 'credentials',

            async authorize(credentials){
                const user = await UserModel.findOne({email: credentials?.email})
                if(!user){
                    return null;
                }
                if(credentials?.password !== user.password){
                    return null
                }
                return {name: user.username, email: user.email, role: user.role}
            }

        })

    ],
    secret:process.env.SECRET_KEY,
    callbacks:{
        async jwt({token, user}){
            if(user){
                token.userId = user.id;
                token.username = user.name
                token.role = user.role;
                token.email = user.email

            }
            return token
        },
        async session({session, token}){
            session.userId = token.userId;
            session.username = token.username;
            session.role = token.role;
            session.email = token.email
            return session
        }
    }

})