import Image from "next/image"

import HeroLogo from "@public/assets/img/chips-Oman.png"
import HeroChips from "@public/assets/img/potato-chips.png"
import Link from "next/link"

const Home = () => {
  return (
    <section className="heroSection">
      <div className="flex w-[90%] m-auto">
        <div className="left w-full">
          {/* <Image className="w-72" src={HeroChips} alt="potato-chips" /> */}
          <Image className="mt-14" src={HeroLogo} alt="chips-Oman" />
        </div>
        <div className="right w-full flex items-center justify-center flex-col">
          <h1 className="text-white text-3xl md:text-5xl xl:text-8xl font-bold text-center ">Taste the <br /> best of East</h1>
          <Link href={"#"} className="bg-primary text-white inline-flex mt-12 py-3 px-8 rounded-lg capitalize font-bold">buy now</Link>
        </div>
      </div>
    </section>
  )
}

export default Home