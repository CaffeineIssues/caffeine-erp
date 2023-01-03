export interface UserData {
    user_id?: number
    name: string
    gender: string
    birthdate: string
    email: string
    role_id: number
    company_id: number
    prefered_name?: string
}

export interface UserLoginData {
    user_login_data_id?: number
    user_id?: number
    username: string
    passhash: string
}

export interface GrantedPermissions {
    role_id: number
    permission_id: number
}
