import React from 'react';
import './menu-item.styles.scss'

//functional component
const MenuItem = ({title, imageUrl}) => (
    <div style={{
        backgroundImage: `url(${imageUrl})`
    }} 
    className='menu-item'>
    <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'></span>
        <ul className="header">
           
           <a href="/shop" className='subtitle'>Click Here</a>

        </ul>
    </div>
</div>
)

export default MenuItem;