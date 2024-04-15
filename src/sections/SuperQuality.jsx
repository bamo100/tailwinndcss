import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You 
          <span className="text-[red]">Super Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg font-montserrat text-slate-400 text-lg leading-7">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero sint quia dolorem atque facilis provident debitis rerum placeat, quibusdam iure.
        </p>
        <p className="mt-6 lg:max-w-lg font-montserrat text-slate-400 text-lg leading-7">Our Dedication to detail and excellence ensures yourf satisfaction</p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="Shoe8" width={570} height={522} className="object-contain" />
      </div>
    </section>
  )
}

export default SuperQuality