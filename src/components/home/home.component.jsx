import React from 'react'
import { how_work, why_choose } from './json-data'
import { NavLink } from 'react-router-dom'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export const HomeComponent = () => {
  const base_path_icon = "/assets/images/icons"
  const base_path_image = "/assets/images"
  const options = [
    'one', 'two', 'three'
  ];
  const defaultOption = options[0];
  return (
    <>
      <section className='py-20'>
        <div className='lg:container mx-auto'>
          <div className='flex items-center justify-between'>
            <div>
              <p className="font-bold xl:text-[2.38rem] text-2xl">
                How Does It <span className="text-primary-green">Work</span>?</p>
              <p className='text-primary-dark leading-10'>With just a few simple steps, you can issue, sell, and fulfill Promise Bonds. Here’s the journey</p>
            </div>
            <NavLink to='/' className='text-base font-bold flex items-center gap-x-2'>See More
              <img src={`${base_path_icon}/arrow-right.png`} alt="" />
            </NavLink>
          </div>

          <div className='pt-[90px] flex'>
            {
              how_work.map((work, index) => {
                return (
                  <div className='text-primary-gray-500 w-1/3' key={work.label}>
                    <div className='max-w-[280px]'>
                      <img src={`${base_path_icon}/bell.png`} alt="" />
                      <div className='text-xl font-semibold pt-4 leading-10'>{work.label}</div>
                      <div className='text-base'>
                        {work.text}
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>


        </div>
      </section>
      <section>
        <div className='lg:container mx-auto'>
          <div className='flex justify-between items-center'>
            <div className='flex-1 relative bg-primary-sea-green-300 px-[70px] py-[85px] before:block before:w-[250px] before:h-full before:bg-primary-sea-green-300 before:absolute before:-right-[250px] before:top-0
            '>
              <h2 className="font-bold xl:text-[2.38rem] text-2xl text-primary-dark pb-10">Why Choose <span className="font-normal text-primary-green ">Us</span>?</h2>
              <div className='flex flex-col gap-y-7'>
                {
                  why_choose.map((choose, index) => {
                    return (
                      <div className='flex items-start gap-x-4 text-primary-dark' key={choose.label}>
                        <img src={`${base_path_icon}${choose.icon}`} alt={choose.icon} />
                        <div className="flex flex-col justify-between">
                          <div className="font-medium  lg:text-[1.25rem] text-[1rem]">{choose.label}</div>
                          <p className="lg:text-[0.94rem] text-[0.75rem]">{choose.text}</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
              <a className="mt-[56px] bg-primary-dark flex justify-center gap-x-3 items-center text-white rounded-full text-base font-medium text-center py-[19px] w-[250px]" href="/">
                Discover All Features
                <img src={`${base_path_icon}/right-up.svg`} alt="" />
              </a>
            </div>
            <div className=' relative'>
              <img src={`${base_path_image}/bigball.png`} alt="bigball" className='max-w-[600px]' />
            </div>
          </div>
        </div>
      </section>

      <section className='pt-[120px]'>
        <div className='lg:container mx-auto'>
          <div className='flex items-center justify-between'>
            <div>
              <h2 className="font-bold xl:text-[2.38rem] text-2xl text-primary-dark pb-1">Meet Our
                <span className="text-primary-green "> Top Issuers</span></h2>
              <div className='text-base text-primary-dark'>Get some Inspirations from 1800+ skills</div>
            </div>
            <div className='flex items-center gap-x-10'>
              <Dropdown options={options} value={defaultOption} placeholder="Issuer" className='w-[150px]' />
              <Dropdown options={options} value={defaultOption} placeholder="Price Range" className='w-[150px]' />
              <NavLink to='/' className='border border-primary-dark flex justify-center gap-x-3 items-center text-primary-dark rounded-full text-base font-bold text-center py-[14px] w-[208px]'>
                View all Issuers
                <img src={`${base_path_icon}/right-up-black.svg`} alt="icon"></img>
              </NavLink>
            </div>
          </div>
          <div className='flex gap-7 pt-11'>
            {
              [1, 2, 3, 4].map((_, index) => {
                return (
                  <div className='w-1/4' key={index}>
                    <div className='bg-primary-sea-green-500 shadow-custom rounded-xl'>
                      <img src={`${base_path_image}/imag1.png`} alt="image" className='max-h-[247px] w-100' />
                      <div className='flex flex-col px-7 py-5'>
                        <div className=' font-semibold text-lg'>James Cameron</div>
                        <p className='py-3'>Helping small businesses grow with my expertise in design.</p>
                        <div className='flex items-center gap-x-3 font-medium text-lg'>
                          <span>15 Bonds Issued</span>
                          <span className='h-5 w-[1px] bg-primary-dark'></span>
                          <span>Level 3</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>


      <section className='pt-[120px]'>
        <div className='lg:container mx-auto'>
          <div className='flex items-center justify-between'>
            <div>
              <h2 className="font-bold xl:text-[2.38rem] text-2xl text-primary-dark pb-3"> Explore Trending
                <span className="text-primary-green"> Promise Bonds.</span></h2>
              <div className='text-base text-primary-dark'>Most viewed and all-time top-selling services</div>
            </div>
            <div className='flex items-center gap-x-10'>
              <Dropdown options={options} value={defaultOption} placeholder="Issuer" className='w-[150px]' />
              <Dropdown options={options} value={defaultOption} placeholder="Price Range" className='w-[150px]' />
            </div>
          </div>
          <div className='flex gap-7 pt-11'>
            {
              [1, 2, 3, 4].map((_, index) => {
                return (
                  <div className='w-1/4' key={index}>
                    <div className='border rounded-xl'>
                      <img src={`${base_path_image}/img2.png`} alt="image" className='max-h-[247px] w-100' />
                      <div className='flex flex-col px-7 py-5'>
                        <div className='text-[14px] text-[#6B7177]'>Design & Creative</div>
                        <div className=' font-medium text-lg py-2 leading-6'>I'll create a personalized marketing strategy.</div>
                        <div className='text-base font-medium flex items-center gap-x-2'>
                          <span>*</span>
                          <span>4.82</span>
                          <span className='text-[#6B7177]'>
                            <span className='pr-1'>94</span>
                            reviews
                          </span>
                        </div>
                        <div className='flex items-center justify-between border-t pt-3 mt-3'>
                          <div className='flex items-center gap-x-2'>
                            <img src={`${base_path_image}/imag1.png`} alt="image" className=' rounded-full w-[30px] h-[30px]' />
                            <span className='text-[14px] text-primary-dark'>Anne Smith</span>
                          </div>
                          <div className='flex items-center gap-x-2'>
                            <span className='text-[#6B7177]'>Starting at </span>
                            <span className='font-semibold'>$200</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className='pt-[60px]'>
            <a className="border border-primary-dark flex justify-center gap-x-3 mx-auto items-center text-primary-dark rounded-full text-base font-bold text-center py-[14px] w-[265px]" href="/">View all Promise Bonds<img src={`${base_path_icon}/right-up-black.svg`} alt="icon" /></a>
          </div>
        </div>
      </section>


      <section className='pt-[120px]'>
        <div className='lg:container mx-auto'>
          <div className='flex justify-between items-center bg-primary-sea-green-200 rounded-lg md:px-[80px]'>
            <div className='max-w-[650px]'>
              <h3 className='font-bold text-[32px] leading-9'>Fulfill your promises, share your progress, and level up.</h3>
              <div className='flex items-center gap-x-3 pt-7'>
                <a className="border border-primary-dark flex justify-center gap-x-3 items-center bg-primary-dark text-white rounded-full text-base font-bold text-center py-[17px] px-8" href="/">Find Bonds<img src={`${base_path_icon}/right-up.svg`} alt="icon" /></a>
                <a className="border border-primary-dark flex justify-center gap-x-3 items-center text-primary-dark rounded-full text-base font-bold text-center py-[18px] px-8" href="/">Find Talent<img src={`${base_path_icon}/right-up-black.svg`} alt="icon" /></a>
              </div>
            </div>
            <div className=' relative overflow-hidden min-w-[380px]'>
              <div className=' absolute bg-primary-green h-full w-[100%] -bottom-[50%] rounded-full'></div>
              <img src={`${base_path_image}/img3.png`} alt="image" className=' relative mx-auto' />
            </div>
          </div>
        </div>
      </section>

      <section className='pt-[120px]'>
        <div className='lg:container mx-auto'>
          <div className='flex items-center justify-between'>
            <div className='max-w-[690px]'>
              <h2 className="font-bold xl:text-[2.38rem] text-2xl text-primary-dark pb-2">Active Bids
                <span className="text-primary-green ">In The Marketplace</span></h2>
              <div className='text-base text-primary-dark'>Browse and manage your active bids in the marketplace, keeping track of ongoing opportunities. Stay updated on your potential projects and their status in real time.</div>
            </div>
            <NavLink to='/' className='border border-primary-dark flex justify-center gap-x-3 items-center text-primary-dark rounded-full text-base font-bold text-center py-[13px] w-[235px]'>
              Explore the Market
              <img src={`${base_path_icon}/right-up-black.svg`} alt="icon"></img>
            </NavLink>
          </div>
          <div className='flex gap-7 pt-11'>
            {
              [1, 2, 3, 4].map((_, index) => {
                return (
                  <div className='w-1/4' key={index}>
                    <div className='bg-primary-pink-400 shadow-custom rounded-xl'>
                      <img src={`${base_path_image}/imag1.png`} alt="user" className='max-h-[247px] w-100' />
                      <div className='flex flex-col px-7 py-5'>
                        <div className=' font-semibold text-lg'>James Cameron</div>
                        <p className='py-1'>Helping small businesses grow with my expertise in design.</p>
                        <div className='text-lg font-medium pt-2'>
                          $150
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>


      <section className='bg-primary-sea-green-200 mt-[120px] py-[120px] text-base'>
        <div className='lg:container mx-auto'>
          <div className='flex justify-between items-center text-primary-dark gap-4'>
            <div className='max-w-[850px]'>
              <div className='pr-[150px]'>
                <h3 className='font-bold text-[38px] leading-9'>Real <span className='text-primary-green '>Stories</span>, Real <span className='text-primary-green '>Impact</span>!</h3>
                <p className='pt-3'>Our issuers' success stories highlight the impact of our innovative solutions and dedicated service. Read what they have to say about partnering with others.</p>
              </div>
              <div className='flex'>
                <div className='w-1/3'>
                  <div className=' text-primary-dark pt-7 max-w-[250px]'>
                    <div className='text-[32px] font-bold'>4.9/5</div>
                    <div>Clients rate professionals on Promise Bond</div>
                  </div>
                </div>
                <div className='w-1/3'>
                  <div className=' text-primary-dark pt-7 max-w-[250px]'>
                    <div className='text-[32px] font-bold'>4.9/5</div>
                    <div>95% of customers are satisfied through to see their freelancers</div>
                  </div>
                </div>
                <div className='w-1/3'>
                  <div className=' text-primary-dark pt-7 max-w-[250px]'>
                    <div className='text-[32px] font-bold'>Award winner</div>
                    <div>G2’s 2023 Best Software Awards</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='max-w-[430px] bg-white p-10 rounded-lg shadow-custom text-xl'>
              <div className='text-primary-green'>Great Work</div>
              <p className='text-primary-dark pt-4 pb-10'>“I found the course material to be highly engaging, and the instructors to be helpful and communicative.”</p>
              <div className='border-t flex items-center gap-x-3 pt-4'>
                <div className='h-16 w-16 rounded-full overflow-hidden'>
                  <img src={`${base_path_image}/img2.png`} alt="profile" className='!h-full w-full' />
                </div>
                <div>
                  <div className='text-base text-primary-dark'>Courtney Henry</div>
                  <div className='text-[14px] text-primary-gray-500'>Web Designer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mt-[120px] py-[120px]'>
        <div className='lg:container mx-auto text-base text-primary-dark'>
          <div>
            <div className='flex items-center justify-between max-w-[900px] pb-1'>
              <div className='text-[28px] font-bold'>Top skills</div>
              <div className='text-[28px] font-bold opacity-30'>Trending skills</div>
              <div className='text-[28px] font-bold opacity-30'>TTop skills in US</div>
              <div className='text-[28px] font-bold opacity-30'>Project Catalog</div>
            </div>
            <div className='pt-14 flex justify-between'>
              <div className='max-w-[170px] text-base'>
                <ul className=' leading-10'>
                  <li>Data Entry Specialists</li>
                  <li className='text-primary-green underline'>Video Editors</li>
                  <li>Data Analyst</li>
                  <li>Shopify Developer</li>
                  <li>Ruby on Rails Developer</li>
                  <li>Social Media Manager</li>
                </ul>
              </div>
              <div className='max-w-[170px] text-base'>
                <ul className=' leading-10'>
                  <li>Android Developer</li>
                  <li>Bookkeeper</li>
                  <li>Content Writer</li>
                  <li>Copywriter</li>
                  <li>Database Administrator</li>
                  <li>Software Developer</li>
                </ul>
              </div>
              <div className='max-w-[170px] text-base'>
                <ul className=' leading-10'>
                  <li>Data Scientist</li>
                  <li>Front-End Developer</li>
                  <li>Game Developer</li>
                  <li>Graphic Designer</li>
                  <li>iOS Developer</li>
                  <li>Java Developer</li>
                </ul>
              </div>
              <div className='max-w-[170px] text-base'>
                <ul className=' leading-10'>
                  <li>JavaScript Developer</li>
                  <li>Logo Designer</li>
                  <li>Mobile App Developer</li>
                  <li>PHP Developer</li>
                  <li>Python Developer</li>
                  <li>Resume Writer</li>
                </ul>
              </div>
              <div className='max-w-[170px] text-base'>
                <ul className=' leading-10'>
                  <li>Technical Writer</li>
                  <li>UI Designer</li>
                  <li>UX Designer</li>
                  <li>Virtual Assistant</li>
                  <li>Web Designer</li>
                  <li>WordPress Developer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}