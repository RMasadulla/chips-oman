import Image from "next/image"
import AboutPic from "@public/assets/img/pic.png"

const About = () => {
  return (
    <section className="flex flex-wrap lg:flex-nowrap justify-center items-center pt-20">
      <div className="w-full mx-8 md:mx-0 lg:ml-20">
        <h2 className="text-primary font-bold text-2xl mb-4">About Us</h2>
        <p className="text-lg">Chips Oman was born out of the bifurcation of Ali Shaihani Food Industries in 1989, by Al Jufair Food Industry L.L.C The premier product of the industry is the chilli flavoured Potato Chips- Chips Oman, which is the most popular product of its kind in the Sultanate of Oman and the entire gulf region. The Chips are known in the region for their distinctive red and blue signature packaging, and can be found in UAE's restaurants, bars and cafes.</p>
        <p className="text-lg mt-6">Chips Oman's brand as of 2019, began distribution to Europe with its European distribution agency based in the UK.</p>
      </div>
      <div className="w-full mx-8 mt-8 md:mt-0 md:mx-0">
        <Image className="w-full" src={AboutPic}  alt="info"/>
      </div>
    </section>
  )
}

export default About