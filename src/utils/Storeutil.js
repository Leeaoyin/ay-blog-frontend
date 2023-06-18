

export const saveUserName = (username)=>{
        localStorage.setItem('username', username)
    }

export const getUserName = () => {
        return localStorage.getItem('username')
    }

export const removeUserName = () => {
    localStorage.removeItem('username')
}