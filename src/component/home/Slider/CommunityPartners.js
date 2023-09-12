import React,{useState , useEffect} from 'react'
import Slider from 'react-slick'

function CommunityPartners() {
const [partners, setpartners] = useState([])
useEffect(()=>{
    getData()
})
const getData = async() =>{
    const response = await fetch('https://csit-asc-default-rtdb.firebaseio.com/CommunityPartners.json')
    setpartners(await response.json())
}


const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    autoplaySpeed:3000,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 624,
          settings: {
            slidesToShow: 3,
          }
        }
      ]
  };
  return (
    <>
    <h2 className="py-[3.7rem] font-semibold text-center text-[1.4rem] text-primary">
         Community Partners
          <hr className="border-secondary m-auto border-[1.9px] w-44 rounded-3xl" />
        </h2>
    <div className='overflow-hidden w-5/6 m-auto cursor-pointer'>
    <Slider {...settings}>
        {
            partners.map((items)=>(
                <div key={items.id} className=''>
                    <img src={items.img} alt={items.Name} className='w-[5rem] m-auto ' />
                </div>
            ))
        }
    </Slider>
        </div>
    </>
  )
}

export default CommunityPartners