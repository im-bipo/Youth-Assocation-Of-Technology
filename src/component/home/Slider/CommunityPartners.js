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
  };
  return (
    <>
    <h3  className='text-secondary text-center font-bold py-2'>We've worked with</h3>
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