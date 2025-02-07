import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our <span className="text-[red]">Customers</span> Say?
      </h3>
      <p className="font-montserrat text-slate-400 text-lg leading-7 m-auto mt-4 max-w-lg text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod eveniet iste dolorem sapiente minima error, hic voluptatem ipsam quos provident?
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
          {
            reviews.map((review) => (
              <ReviewCard key={review.customerName} 
              imgURL={review.imgURL} 
              customerName={review.customerName} 
              rating={review.rating} 
              feedback={review.feedback}
              />
            ))
          }
      </div>
    </section>
  )
}

export default CustomerReviews