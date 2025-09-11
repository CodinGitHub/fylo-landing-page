import { TestimonialCard } from './testimonial-card';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Satish Patel',
    role: 'Founder & CEO, Huddle',
    image: '/public/images/profile-1.jpg',
    quote: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.'
  },
  {
    name: 'Bruce McKenzie',
    role: 'Founder & CEO, Huddle',
    image: '/images/profile-2.jpg',
    quote: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.'
  },
  {
    name: 'Iva Boyd',
    role: 'Founder & CEO, Huddle',
    image: '/images/profile-3.jpg',
    quote: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.'
  }
]

export const Testimonials = () => {
  return (
    <div className='flex flex-col gap-6 items-center pt-6 relative'>
      <img className='size-6 absolute top-0 left-8' src="/images/bg-quotes.png" alt="bg quotes" />
      {
        testimonials.map((testimonial: Testimonial)=>(
          <TestimonialCard 
            key={testimonial.name} 
            {...testimonial}
          />
        ))
      }
    </div>
  )
}
