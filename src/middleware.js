
import {getToken} from 'next-auth/jwt'
import { NextResponse } from 'next/server'

export async function middleware(request){

    const path = request.nextUrl.pathname

    const isAllowedPath = ["/", "/register", "/login", "/invoice"].includes(path)

    const token = await getToken({req:request, secret:process.env.SECRET_KEY})

    if(token && isAllowedPath){
        return NextResponse.redirect(new URL('/', request.url))
    }
    if(!token && !isAllowedPath){
        return NextResponse.redirect(new URL('/login', request.url))
    }
    return NextResponse.next()

}

export const config = {
    matcher: ['/login','/register','/admin/:path*']
}