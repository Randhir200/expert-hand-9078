import React from 'react'



const images = [
    {image : 'https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo2.jpg'},
    {image : 'https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo3.jpg'},
    {image : 'https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo4.jpg'},
    {image : 'https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo5.jpg'},
    {image : 'https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo6.jpg'},
    {image : 'https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo7.jpg'},
    {image : 'https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo8.jpg'},
    {image : 'https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo9.jpg'},
    {image : 'https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo10.jpg'},
    {image : 'https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo11.jpg'},
    {image : 'https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo2.jpg'},
    {image : 'https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo3.jpg'},
    {image : 'https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo4.jpg'},
    {image : 'https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo5.jpg'},
    {image : 'https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo6.jpg'},
    {image : 'https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo7.jpg'},
    {image : 'https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo8.jpg'},
    {image : 'https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo9.jpg'},
    {image : 'https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo10.jpg'},
    {image : 'https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo11.jpg'},
    {image : 'https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo2.jpg'},
    {image : 'https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo3.jpg'},
    {image : 'https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo4.jpg'},
    {image : 'https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo5.jpg'},
    {image : 'https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo6.jpg'},
    {image : 'https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo7.jpg'},
    {image : 'https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo8.jpg'},
    {image : 'https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo9.jpg'},
    {image : 'https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo10.jpg'},
    {image : 'https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo11.jpg'},
    {image : 'https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo2.jpg'},
    {image : 'https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo3.jpg'},
    {image : 'https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo4.jpg'},
    {image : 'https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo5.jpg'},
    {image : 'https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo6.jpg'},
    {image : 'https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo7.jpg'},
    {image : 'https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo8.jpg'},
    {image : 'https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo9.jpg'},
    {image : 'https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo10.jpg'},
    {image : 'https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo11.jpg'},
]
const Slider = () => {
  return (
    <div className='slider'>
          <div className="slide__track">
              {images.map((ele) => {
                  return (
                    <div className='slide'>
                        <img src={ele.image} alt="logo" />      
                    </div>
                )
            })}
          </div>      
    </div>
  )
}

export default Slider