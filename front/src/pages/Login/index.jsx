import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { schema } from "./validator"
import { LoginStyled, MainStyled } from "./styles";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Input } from "../../components/input";




export const Login = () => {

    const { register, handleSubmit,formState:{errors} } = useForm({
    resolver: zodResolver(schema)
    })

    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
  
    
  
    useEffect(() => {
      const token = localStorage.getItem("projetofull:token")
  
      if(!token) {
        setLoading(false)
        return
      }
  
      api.defaults.headers.common.authorization = `Bearer ${token}`
      setLoading(false)
    }, [])
  
  
  const signIn = async (data) => {
      try {
        const response = await api.post("/loginCliente", data)
        const token = response.data
       
        api.defaults.headers.common.authorization = `Bearer ${token}`
        localStorage.setItem("projetofull:token", token.token)
        localStorage.setItem("userId:token", token.userId)
        toast.success("Usuário Logado com sucesso");
  
        navigate('dashboard')
      } catch (error) {
        toast.error("Email ou senha inválidos");
        console.error(error)
      }
  }
  
  
    return (
      <main>
        <MainStyled>
        <LoginStyled>
            
              <h2>Login</h2>
              
            <form onSubmit={handleSubmit(signIn)}>

              <div>

                <Input label="Email" type="email" id="email"  error={errors.email?.message}  {...register('email')} />
        
                <Input label="Password" type="password" id="password"  error={errors.password?.message}  {...register('password')} />
        
                <button type="submit">Entrar</button>
              </div>
              </form>
            
        </LoginStyled>
        </MainStyled>
            </main>
          )
    
}