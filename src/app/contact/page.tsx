'use client'
import NavBar from "../components/NavBar"
import MyContact from "../components/MyContact"
import BackToTop from "../components/BackToTop"
import Footer from "../components/footer"

export default function Home() {
  return (
    <main className="relative flex w-full min-h-screen h-full p-[5%] text-white bg-gradient-to-tr from-stone-950 via-green-950 to-stone-950 flex flex-col gap-10 mt-0 pb-10 mb-0 overflow-hidden">
      <MyContact/>
      <BackToTop targetId={"top"} />
    </main>
  )
}