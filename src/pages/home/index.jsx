import React from 'react'
import RootLayout from '../../layouts/RootLayout'
import cars from '../../assets/images/cars.jpg'
import fashion1 from '../../assets/images/fashion1.jpg'
import phones from '../../assets/images/phones.jpg'
import furniture from '../../assets/images/furniture.jpg'
import agric from '../../assets/images/food.jpg'
import photo from '../../assets/images/homeappliance.jpg'
import sports  from '../../assets/images/sports (2).jpg'
import babies from '../../assets/images/babies.jpg'
import animals from '../../assets/images/cats.jpg'
import sneaker from '../../assets/images/sports.jpg'
import luxury from '../../assets/images/sportcar.jpg'
import beauty from '../../assets/images/beauty.jpg'
import homes from '../../assets/images/homes.jpg'
const Home = () => {
  return (
    <>
    <RootLayout>
      <div className='h-[30vh] bg-white flex flex-row gap-[1rem] justify-center mt-[2rem]'>
        <span>
        <img src={cars} alt="" className='w-[120px] h-[120px] rounded-[50%]' />
        <h1>Vehicle</h1>
        <h4>77 ads</h4>
        </span>

        <span>
        <img src={fashion1} alt="" className='w-[120px] h-[120px] rounded-[50%]' />
<h1>Fashion</h1>
        </span>

        <span>
        <img src={phones} alt="" className='w-[120px] h-[120px] rounded-[50%]' />
<h1>phones & tablets</h1>
        </span>


      <span>
      <img src={furniture} alt="" className='w-[120px] h-[120px] rounded-[50%]' />
<h1> Furniture</h1>
      </span>

      <span>
      <img src={agric} alt="" className='w-[120px] h-[120px] rounded-[50%]' />
<h1>Agriculture&Food</h1>
      </span>

<span>
<img src={sports} alt="" className='w-[120px] h-[120px] rounded-[50%]' />
<h1> sports equipments</h1>
</span>

<span>
<img src={babies} alt="" className='w-[120px] h-[120px] rounded-[50%]' />
<h1>babies and kids</h1>
</span>

<span>
<img src={animals} alt="" className='w-[120px] h-[120px] rounded-[50%]' />
<h1>pets</h1>
</span>

        {/* <img src={cars} alt="" className='w-[200px] h-[200px]' />
        <img src={cars} alt="" className='w-[200px] h-[200px]' /> */}

      </div>
    </RootLayout>

    <div className='flex flex-row pb-[40px]'>
      <div className='flex flex-row gap-[1rem] '>
        <img src={photo}alt=""  className='w-[500px] h-[565px] m-[10px] rounded-[10px] mt-[45px]'/>
      </div>
       <div className='gap-[1rem]  grid  grid-cols-2	mt-[3rem] pb-[10px]	rounded-[10px]'>
        <img src={sneaker} alt="" className='w-[320px] h-[300px] rounded-[10px]' />
        <img src={luxury} alt="" className='w-[320px] h-[300px] rounded-[10px]' />
        <img src={beauty} alt="" className='w-[320px] h-[230px] mt-[0.5rem] rounded-[1rem]' />
        <img src={homes} alt="" className='w-[320px] h-[230px] mt-[0.5rem] rounded-[1rem] ' />
         
       </div>
       <div>
        {/* <img src= {} alt="" /> */}
       </div>
    </div>
    </>
  )
}

export default Home
