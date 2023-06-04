import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {schema } from "./validador";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { Input } from "../../components/input";
import { Styled, MainStyled } from "./styles";
import { toast } from 'react-toastify';




export const Dashboard = () => {

    const { register, handleSubmit,formState:{errors} } = useForm({
    resolver: zodResolver(schema)
    })
    
    const navigate = useNavigate()  
    
    const handleRegister = async (data) => {
 
      try {
        const token = localStorage.getItem("projetofull:token")
        const userId =localStorage.getItem("userId:token")
        api.defaults.headers.common.authorization = `Bearer ${token}`
        await api.post(`/contatos/${userId}`, data)
        toast.success('Sucesso ao criar a conta')
      } catch {
         toast.error('Opa! Algo deu errado!')
    }
  }


  return (
      <MainStyled>
      <Styled>
        
        <main>
          <h2>Cadastro de contatos</h2>
              
          <form onSubmit={handleSubmit(handleRegister)}>
            <div>
              
            <Input label="Name" type="name"   placeholder="Name"  error={errors.name?.message} {...register('name')} />
            <Input label="E-mail" type="email"  placeholder="E-mail" error={errors.email?.message} {...register('email')}/>
            <Input label="Telefone" type="telefone"  placeholder="Telefone" error={errors.telefone?.message} {...register('telefone')}/>
             
            <button type="submit">Cadastrar</button>
           
            </div>
            
           
            <Link
              to="Contatos"
              onClick={(e) => {
              e.preventDefault();
              navigate("Contatos");
              }}
              >Contatos cadastrados
            </Link>
              
          </form>
       </main>
      </Styled>
      </MainStyled>
    )
}