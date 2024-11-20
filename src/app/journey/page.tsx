'use client'
import ProfileBar from "../components/ProfileBar"
import MyJourney from "../components/MyJourney"
import BackToTop from "../components/BackToTop"

export default function Home() {
  return (
    <main className="relative w-full min-h-screen h-full bg-gradient-to-tr from-stone-950 via-green-950 to-stone-950 px-[2%] py-[5%] mt-0 mb-0 overflow-hidden gap-10">
      <ProfileBar />
      <MyJourney />
      <BackToTop targetId={"top"} />
    </main>
  )
}
