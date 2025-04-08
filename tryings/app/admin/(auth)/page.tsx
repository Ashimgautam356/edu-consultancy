import Link from 'next/link'



export default function admin() {
    return(
        <div>
            <h1>This is Admin Page</h1>
            <Link href={"/"} className='p-2 text-white bg-blue-400 rounded-md'>home</Link>
        </div>

    )
}