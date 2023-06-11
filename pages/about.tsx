import {Inter} from 'next/font/google'
import {Navbar} from '@/components/Navbar';
import Image from 'next/image';

const inter = Inter({subsets: ['latin']})

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-between p-12 p0'>
      <Navbar/>
      <p className='p-2 mt-8 font-montserrat text-center md:mt-0 md:p-12 md:text-left'>
        Welcome! My name is Drew Mirman and I am currently an Associate Marriage and Family Therapist working under the
        license and supervision of Dr. Chantel Cortinovis, Psy.D. (PSY 28895). I previously received my Master’s in
        Marriage and Family Therapy from the University of Southern California, during which I spent my traineeship at
        Beit T’Shuvah- a residential addiction treatment center. My time there focused on facilitating individual,
        group, and family therapy.
      </p>
      <div className="columns-1 text-center p-2 md:p-12 md:columns-2 md:text-left">
        <div className='font-montserrat'>
          <p className='mb-8'>
            Therapy can be daunting for some and feel like home for others. My goal of working with you is to meet you
            where you are at, and foster an environment of warmth, safety, and understanding that enables us to grow
            together.
          </p>
          <p className='my-8'>
            I understand that life can feel overwhelming, challenging, and leave us feeling like we don’t know where to
            turn next. Through compassion, empathy, and authenticity, I encourage you to explore what gets us “stuck”,
            and the barriers that prevent us from healing.
          </p>
          <p className='my-8'>
            Each individual I work with has their own story, experiences, and worldview. I encourage you to come into my
            office just as you are, as your story is what makes you uniquely you. Using an individualized and
            integrative approach, I look forward to supporting you in reconnecting to your authentic self.
          </p>
        </div>
        <div className='md:ml-12'>
          <Image
            src='/drew-mirman-headshot.webp'
            alt='Drew Mirman Headshot'
            width={800}
            height={533}
          />
        </div>
      </div>
    </div>
  )
}
