import { features } from '../common/constants'
import type { Feature } from '../types/type'

export const Features = () => {
  return (
    <div className='grid grid-cols-1 gap-20 mt-[140px] md:grid-cols-2 max-w-[920px] mx-auto'>
      {
        features.map(({title, description, iconUrl}: Feature) => (
          <div key={title} className='flex flex-col items-center text-center'>
            <img src={iconUrl} alt={title} />
            <div>
              <h3 className='font-bold mb-2'>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}
