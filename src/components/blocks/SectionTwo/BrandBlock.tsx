import { Image } from '../../miscellaneous'
import logoWhite from '../../../assets/images/common/logo-black.png'

export const BrandBlock = ({ className }: { className?: string }) => {
  return (
    <div className={`bg-blue-600 ${className}`}>
      <div className="block-inner px-[3rem] pt-[3rem] pb-[6rem] text-white">
        <Image src={logoWhite} alt="Paramount logo" className="pb-[5rem]" />
        <span className="block text-[3rem] uppercase mb-[.5rem]">what to watch this month</span>
        <span className="block text-[2.5rem] uppercase mb-[.5rem]">Two tickets to trending</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur vestibulum
          lacus.{' '}
        </p>
        <p>
          Maecenas non diam nunc. Morbi id tincidunt libero, pharetra dapibus tortor. Phasellus
          sagittis erat vitae orci eleifend pretium.
        </p>
        <p className="pb-[5rem]">
          Integer condimentum congue ante a feugiat. Praesent mi neque, tempor et blandit non,
          pellentesque eget turpis. Vivamus lorem ex, sollicitudin eget augue interdum, dictum
          tincidunt nibh. Nullam accumsan tellus ac libero porttitor tempor.
        </p>
        <div className="block-months flex items-center pb-[5rem] justify-around">
          <span className="text-[1.2rem] uppercase mr-[.3rem]  border-white">jan</span>
          <span className="text-[1.2rem] uppercase mr-[.3rem]  border-white">feb</span>
          <span className="text-[1.2rem] uppercase mr-[.3rem]  border-white">mar</span>
          <span className="text-[1.2rem] uppercase mr-[.3rem]  border-white">apr</span>
          <span className="text-[1.2rem] uppercase mr-[.3rem]  border-white">may</span>
          <span className="text-[1.2rem] uppercase mr-[.3rem]  border-white">jun</span>
          <span className="text-[1.2rem] uppercase mr-[.3rem]  border-white">jul</span>
          <span className="text-[1.2rem] uppercase">aug</span>
        </div>
        <div className="block-video w-full h-[10rem] bg-purple-400 text-white">
          <span>logo</span>
        </div>
      </div>
    </div>
  )
}
