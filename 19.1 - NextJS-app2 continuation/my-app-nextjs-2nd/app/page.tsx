import Link from "next/link";

export default function Home() {
  return(<>
    <div className="w-full flex justify-center items-center">
      <div className=""> Todo app </div>
      <div><Link href="/signup"> Sign up to Todo App </Link> </div> 
      <div><Link href="/signin"> Sign in to Todo App </Link> </div>
    </div>
  </>)
}
