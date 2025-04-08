"use client"

import { signIn} from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Component() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const router = useRouter()

    const handleLogin = async (e:any)=>{
        e.preventDefalut()
        const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
          })

          console.log(res)

          if (res?.ok) {
            router.push("/dashboard")
          } else {
            setError("Invalid credentials")
          }
    }
    


  return (
    <div>
        <h1>signin</h1>
        <form onSubmit={handleLogin}>
        <div>
            <label htmlFor="email">Email</label>
            <input type="text" value={email} onChange={(e:any)=>setEmail(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="passowrd">Password</label>
            <input type="text"value={password} onChange={(e:any)=>setPassword(e.target.value)}/>
        </div>

        <button type="submit">Login</button>

        </form>
        
    </div>
  )

}