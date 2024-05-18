import React from 'react'
// import NavBar from '../components/NavBar';

import About01 from '../images/aboutImg/About01.png'
import About02 from '../images/aboutImg/About02.jpeg'
import About03 from '../images/aboutImg/About03.jpeg'
import About04 from '../images/aboutImg/About04.png'
import About05 from '../images/aboutImg/About05.jpeg'
import About06 from '../images/aboutImg/About06.png'
import About07 from '../images/aboutImg/About07.jpeg'
import About08 from '../images/aboutImg/About08.png'
import About09 from '../images/aboutImg/About09.jpeg'
import About10 from '../images/aboutImg/About10.jpeg'
import About11 from '../images/aboutImg/About11.jpg'
import About12 from '../images/aboutImg/About12.jpeg'
import About13 from '../images/aboutImg/About13.jpeg'

function AboutUs() {
  // const aboutStyle = {
  //   backgroundImage: `url(${About02})`,
  //   backgroundSize: 'cover',
  //   height: '640px', // Adjust as needed
  //   width: '100%',
  //   transition: 'background-image 0.5s ease'
  // };

  const aboutStyle02 = {
    position: 'relative',
    backgroundImage: `url(${About02})`,
    backgroundSize: 'cover',
    height: '640px',
    width: '100%',
    transition: 'background-image 0.5s ease',
  };

  const overlayStyle02 = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to right, rgba(0,0,0), rgba(94, 77, 64, 0.7))',
    opacity: 0.8,
  };

  const textStyle02 = {
    position: 'absolute',
    top: '367px',
    left: '156px',
    color: 'white',
    width: '762px',
    height: '97px',
  };

  const aboutStyle03 = {
    position: 'relative',
    backgroundImage: `url(${About03})`,
    backgroundSize: 'cover',
    height: '448px',
    width: '50%',
    transition: 'background-image 0.5s ease',
  };

  const aboutStyle05 = {
    position: 'relative',
    backgroundImage: `url(${About05})`,
    backgroundSize: 'cover',
    height: '448px',
    width: '50%',
    transition: 'background-image 0.5s ease',
  };

  const aboutStyle07 = {
    position: 'relative',
    backgroundImage: `url(${About07})`,
    backgroundSize: 'cover',
    height: '448px',
    width: '50%',
    transition: 'background-image 0.5s ease',
  };

  const aboutStyle09 = {
    position: 'relative',
    backgroundImage: `url(${About09})`,
    backgroundSize: 'cover',
    height: '640px',
    width: '828px',
    // backdropFilter: 'blur(90px)',
    filter: 'blur(10px)',
    zIndex: -1,
    transition: 'background-image 0.5s ease',
  };

  const overlayStyle09 = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to right, rgba(0,0,0), rgba(0,0,0))',
    opacity: 0.7,
    zIndex: 0,
  };

  const textStyle09 = {
    position: 'absolute',
    top: '367px',
    left: '156px',
    color: 'white',
    zIndex: 1,
    // width: '762px',
    // height: '97px',
  };

  const aboutStyle10 = {
    position: 'relative',
    backgroundImage: `url(${About10})`,
    backgroundSize: 'cover',
    height: '640px',
    width: '612px',
    overflow: 'hidden',
    transition: 'background-image 0.5s ease',
  };

  const aboutStyle11 = {
    position: 'relative',
    backgroundImage: `url(${About11})`,
    backgroundSize: 'cover',
    height: '512px',
    width: '360px',
    transition: 'background-image 0.5s ease',
  };

  const overlayStyle11 = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to top, black, transparent)',
    opacity: 0.9,
  };

  const aboutStyle12 = {
    position: 'relative',
    backgroundImage: `url(${About12})`,
    backgroundSize: 'cover',
    height: '512px',
    width: '360px',
    transition: 'background-image 0.5s ease',
    // borderRadius: '8px',
  };

  const overlayStyle12 = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to top, black, transparent)',
    opacity: 0.9,
  };

  const aboutStyle13 = {
    position: 'relative',
    backgroundImage: `url(${About13})`,
    backgroundSize: 'cover',
    height: '512px',
    width: '360px',
    transition: 'background-image 0.5s ease',
  };

  const overlayStyle13 = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to top, black, transparent)',
    opacity: 0.9,
  };

  return (
    <div>
      {/* <NavBar /> */}


      <div className='flex w-full h-[763px] gap-20'>
        <div className='h-[185px] w-[552px] mt-[120px] ms-[156px] gap-9'>
          <div className=' leading-[76.8px]'>About Us</div>
          <div>
            <div>WE PRIDE OURSELF ON</div>
            <div className=''>
              <div className='text-customOrange font-bold text-4xl'>
                Our authentic momo recipes
              </div>
              <div className='font-bold text-4xl'>
                passed down through generations
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center relative bottom-0 h-[631px] w-[456px] mt-4'>
          <div className='absolute bottom-0 w-[456px] h-[456px] bg-about rounded-full z-10'>
            {/* <div className='fexx justify-center'>
              <img className='absolute bottom-0 h-[631px] w-[390px]' src={About01} alt="" />
            </div> */}
          </div>
          <div className='z-10 w-[456px] h-[456px] rounded-full flex justify-center'>
            <img className='overflow-hidden h-[631px] w-[390px]' src={About01} alt="" />
          </div>
        </div>
      </div>



      {/* <div className='h-[640px] w-full bg-gradient-to-r from-green-400 to-blue-500'>
   <div style={aboutStyle} className=" mix-blend-over-lay">
       

        <div className='h-[97px] w-[762px] relative top-[367px] left-[156px] text-white'>
          <p className='font-bpld text-5xl'>Process behind the making</p>
          <p className='text-2xl'>See how we make momos that you like from only the best ingredients</p>
        </div>
        
      </div>
</div> */}


      {/* <div style={aboutStyle} className="">
       

        <div className='h-[97px] w-[762px] relative top-[367px] left-[156px] text-white'>
          <p className='font-bpld text-5xl'>Process behind the making</p>
          <p className='text-2xl'>See how we make momos that you like from only the best ingredients</p>
        </div>
        
      </div> */}
      <div style={{ position: 'relative' }}>
        <div style={aboutStyle02}>
          <div style={overlayStyle02}></div>
          <div style={textStyle02} className='text-white'>
            <p className='font-bold text-5xl'>Process behind the making</p>
            <p className='text-2xl'>See how we make momos that you like from only the best ingredients</p>
          </div>
        </div>
      </div>




      <div className='h-[1920px] w-full flex flex-col items-center gap-[120px]'>
        <div className='h-[448px] w-[1128px] mt-[120px]'>
          <div className='flex'>
            <div className='w-[50%] pe-[120px] flex flex-col gap-[16px]'>
              <p className='font-bold text-4xl'> Our momos are <span className='text-customOrange'>made with love</span> </p>
              <p className='bg-white '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eius molestiae accusamus assumenda pariatur dolor a officia explicabo quidem provident, sequi expedita praesentium deserunt id? Magni eos ad facilis architecto.</p>

            </div>
            <div className='relative' style={aboutStyle03}>
              <div className=' absolute bottom-[-50px] left-[-25%]'>
                <img className='w-[264px] h-[191px]' src={About04} alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>




        <div className='h-[448px] w-[1128px] bg-black'>
          <div className='flex'>
            <div className='relative' style={aboutStyle05}>
            </div>
            <div className='w-[50%] pe-[120px] flex flex-col'>
              <p className='font-bold text-4xl'> Our momos are <span className='text-customOrange'>made with love</span> </p>
              <p className='bg-white '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eius molestiae accusamus assumenda pariatur dolor a officia explicabo quidem provident, sequi expedita praesentium deserunt id? Magni eos ad facilis architecto.</p>
              <div className='relative'>
                <div className=' absolute bottom-[-300px] left-[-25%]'>
                  <img className='w-[264px] h-[191px]' src={About06} alt="" srcset="" />
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className='h-[448px] w-[1128px]'>
          <div className='h-[448px] w-[1128px] mt-[120px]'>
            <div className='flex'>
              <div className='w-[50%] pe-[120px] flex flex-col gap-[16px]'>
                <p className='font-bold text-4xl'> Our momos are <span className='text-customOrange'>made with love</span> </p>
                <p className=''> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eius molestiae accusamus assumenda pariatur dolor a officia explicabo quidem provident, sequi expedita praesentium deserunt id? Magni eos ad facilis architecto.</p>

              </div>
              <div className='relative' style={aboutStyle07}>
                <div className=' absolute bottom-[-50px] left-[-25%]'>
                  <img className='w-[264px] h-[191px]' src={About08} alt="" srcset="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className='flex h-[640px] w-full' >
        <div className='' style={aboutStyle09}>
          <div style={overlayStyle09}></div>
          <div style={textStyle09} className=''>
            <p className=''>Momo is not just about sustenance, it's about bringing people together and creating memories. At our restaurant, we strive to create a warm and inviting atmosphere where our guests can enjoy delicious momo, great company, and unforgettable experiences</p>
          </div>
        </div>
        <div className='h-full' style={aboutStyle10}></div>
      </div>




      <div className='flex flex-col gap-[40px] h-[897px] w-full bg-slate-400'>
        <div className='flex flex-col items-center gap-[8px] mt-16'>
          <p className='font-bold text-4xl'>Meet The <span className='text-customOrange'>Team</span></p>
          <p className='font-bold text-2xl text-[#0C6967]'>Our talented team members who delivers only the best results</p>
        </div>
        <div className='flex justify-center h-[512px] w-[1,128px] gap-[24px] '>
          <div className='rounded' style={aboutStyle11}>
            <div style={overlayStyle11}>
              <div className='text-white absolute bottom-5 left-5 font-bold'>
                <p>Head Chef</p>
              </div>
            </div>
          </div>
          <div className='rounded' style={aboutStyle12}>
            <div style={overlayStyle12}>
              <div className='text-white absolute bottom-5 left-5 font-bold'>
                <p>Assistant Chef</p>
              </div>
            </div>
          </div>
          <div className='rounded' style={aboutStyle13}>
            <div style={overlayStyle13}>
              <div className='text-white absolute bottom-5 left-5 font-bold'>
                <p>Assistant Chef</p>
              </div>
            </div>
          </div>
        </div>


        <div>
          abdaj
        </div>
      </div>



      <div></div>

    </div>
  )
}

export default AboutUs;



