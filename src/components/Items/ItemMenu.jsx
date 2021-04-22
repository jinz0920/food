import { Card} from 'antd';
import ButtonMenu from '../Buttons/ButtonMenu';
// import img from '../../img/01.jpg'



function ItemMenu({info}) {

    const { Meta } = Card;
    return (
      <div className="site-card-wrapper">
        <Card 
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={info.src} />}
    >
    <Meta title={info.nom} style={{paddingBottom:'5px'}}/>
     <ButtonMenu textContent={info.buttonText} />
  </Card>
  
    </div>
    )
}

export default ItemMenu
