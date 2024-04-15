import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-center items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain w-full" alt="" />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-[red]">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg font-montserrat text-slate-400 text-lg leading-7">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero sint quia dolorem atque facilis provident debitis rerum placeat, quibusdam iure.
        </p>
        <p className="mt-6 lg:max-w-lg font-montserrat text-slate-400 text-lg leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias magni debitis dolores, necessitatibus reiciendis expedita.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button 
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-400"
            textColor="text-slate-400"
          />
        </div>
    </div>
    </section>
  )
}

export default SpecialOffer