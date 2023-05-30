

type IUserRequest = {
    name:string
    email: string
    password: string
}

type IUserloginRequest = {
    email: string
    password: string
}

export { IUserRequest,IUserloginRequest }