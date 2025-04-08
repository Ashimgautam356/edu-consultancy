import Link from "next/link";


export default function Home() {
  // const fullName = null; 
  const fullName =  { id: 1, name:"Ashim", role:"user"}
  return (
   <div className="pt-10">
    {
      fullName == null ? (
        <>
          <button className="p-2">
          <Link href={"/signin"} className="p-2 rounded-md bg-green-400" >Signin</Link>
          </button>

          <button className="p-2">
            <Link href={"/signup"} className="p-2 rounded-md bg-blue-400" >Signup</Link>
          </button>
        </>
      ):(
        <div className="bg-white p-4 rounded-md text-black flex justify-evenly">
            <span>{fullName.id}</span><p>{fullName.name}</p>
            <p>{fullName.role}</p>
            <div>
              <button  className="p-2 rounded-md bg-blue-400">
                <Link href={"/private"}>Private page</Link>
              </button>
              <button  className="p-2 rounded-md bg-red-400" >Logout</button>
            </div>
        </div>
      )
    }
      


   </div>
  );
}
