import {Inter} from 'next/font/google'
import {Navbar} from '@/components/Navbar';
import Image from 'next/image';

const inter = Inter({subsets: ['latin']})

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-between p-12 p0'>
      <Navbar/>
      <p className='p-2 mt-8 font-montserrat text-center md:mt-0 xl:p-12 xl:text-left'>
        Welcome! My name is Drew Mirman and I am currently an Associate Marriage and Family Therapist working under the
        license and supervision of Dr. Chantel Cortinovis, Psy.D. (PSY 28895). I previously received my Master’s in
        Marriage and Family Therapy from the University of Southern California, during which I spent my traineeship at
        Beit T’Shuvah- a residential addiction treatment center. My time there focused on facilitating individual,
        group, and family therapy.
      </p>
      <div className="flex-col text-center p-2">
        <div className='w-full mx-auto xl:mr-12'>
          <Image
            src='/drew-mirman-headshot.webp'
            alt='Drew Mirman Headshot'
            width={800}
            height={533}
            className="mx-auto width-full my-8 xl:my-0"
          />
        </div>
        <div className='font-montserrat w-full xl:ml-12'>
          <h2 className='text-xl font-semibold mt-10'>Therapy for Adults</h2>
          <p className='my-8'>
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
        <div className='font-montserrat w-full xl:ml-12'>
          <h2 className='text-xl font-semibold mt-10'>Therapy for Adolescents</h2>
          <p className='my-8'>
            Adolescent years can bring up a myriad of thoughts, feelings, and behaviors due to navigating the ongoing
            emotional, relational, and physical changes. For some adolescents it may feel challenging to open up to
            trusted adults and friends, which is when an individualized space can help provide teens with an opportunity
            to name and explore what struggles they may be facing.
          </p>
          <p className='my-8'>
            My experience with teens primarily focuses on anxiety, depression, low self-esteem, body-image, sexuality,
            perfectionism, and relational difficulties. With curiosity, authenticity, and empathy, my goal is to create
            a safe and trusting relationship with adolescents so that they gain a deeper understanding of themselves,
            the world around them, and their ability to cope with the pressures they face.
          </p>
          <p className='my-8'>
            In addition to supporting adolescents, I also provide parenting sessions as I recognize adolescence can be a
            challenge for parents to navigate as well. In our sessions together, you can expect us to focus on exploring
            the relationship between you and your child while also providing you with tools to best manage and nurture
            this relationship.
          </p>
        </div>
      </div>
    </div>
  )
}
