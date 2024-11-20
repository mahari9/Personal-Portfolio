'use client'
import LandngPage from "./components/LandingPage"
import BackToTop from "./components/BackToTop"

export default function Home() {

  return (
    <>
    <main className="relative w-full min-h-screen h-full p-[2%] bg-[url('../../public/img/home-bg.svg')] gap-10">
      <LandngPage />
      <BackToTop targetId={"top"} />
    </main>
    </>
  )
}
