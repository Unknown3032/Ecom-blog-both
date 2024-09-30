import React from 'react'
import HeroBanner from './HeroBanner'
import Wrapper from './Wrapper'
import { VelocityScroll } from './ui/scroll-based-velocity'
import GradualSpacing from "./ui/gradual-spacing";


const Home = () => {
    return (
        <div className='h-[150vh]'>
            <div>
                <HeroBanner />
            </div>

            <Wrapper>
                {/* text for showing our motive  */}
                <div className='mt-4'>
                    <VelocityScroll
                        text="Wear Your Culture In Modern Way"
                        default_velocity={2}
                        className=" select-none font-display text-center text-3xl font-bold tracking-[-0.02em] text-black/70 drop-shadow-sm dark:text-white md:text-8xl md:leading-[5rem]"
                    />
                </div>
                {/* text for showing our motive ends  */}

                {/* all product section start  */}
                <div className='mt-4'>
                    {/* heading  */}
                    <GradualSpacing
                        className=" select-none font-display text-left text-3xl font-bold -tracking-widest  text-black/90 dark:text-white md:text-4xl md:leading-[5rem]"
                        text="Latest Products"
                    />
                    {/* heading  end */}
                </div>

            </Wrapper>

        </div>
    )
}

export default Home