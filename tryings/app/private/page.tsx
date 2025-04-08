import Link from 'next/link'



export default function pri() {
    return(
        <div>
            <h1>Private</h1>
            <Link href={"/"} className='p-2 text-white bg-blue-400 rounded-md'>home</Link>
        </div>

    )
}