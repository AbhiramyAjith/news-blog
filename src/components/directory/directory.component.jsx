import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss'

//class component as we need to store the state value
class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections : [
                {
                  title: 'ISSF Shotgun World Cup: Indian Skeet Mixed Teams Disappoint In Cairo',
                  imageUrl: 'https://c.ndtvimg.com/2021-02/16p0g5s8_mairaj-ahmad-khan-instagram_625x300_28_February_21.jpg?output-quality=60&output-format=webp&downsize=555:*',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://c.ndtvimg.com/2021-02/km6dmiao_nishad-kumar-instagram_625x300_28_February_21.jpg?output-quality=60&output-format=webp&downsize=555:*',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://c.ndtvimg.com/2021-02/6mlraoqo_myanmar-protest_625x300_28_February_21.jpg',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://www.ndtv.com/education/cache-static/media/presets/625X400/presets/635X384/article_images/2021/2/28/GPAT-pharmacy-ruhs.PNG',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://c.ndtvimg.com/2021-02/jo0j4sm_monty-panesar-twitter_625x300_28_February_21.jpg?output-quality=60&output-format=webp&downsize=555:*',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
        }
    }

    render() {
        return(
            <div className='directory-menu'>
                {
                  this.state.sections.map(({title,id,imageUrl}) => (
                    <MenuItem key={id}  imageUrl={imageUrl}/>
                  ))
                  
                }
            </div>
        )
    }
}

export default Directory;