import { Button } from './button'

export const Hero = () => {
  return (
    <section className='-mt-20 relative z-10 max-w-[450px] mx-auto md:-mt-40'>

      <h1 className='text-center text-2xl font-Raleway font-bold px-2'>All your files in one secure location, accessible anywhere.</h1>

      <p className='text-center text-sm mt-6 px-4'>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>

      <div className='text-center mt-6 mb-10'>
        <Button text='Get Started' styles='w-[240px]' />
      </div>

    </section>
  )
}
