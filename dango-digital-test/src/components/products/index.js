import './index.css';
import CardComponent from '../card'
import { useState } from 'react'

import image1 from '../../assets/image_blue.png'
import image2 from '../../assets/image_orange.png'
import image3 from '../../assets/image_green.png'
import image4 from '../../assets/image_purple.png'


const data = [
    {
        id: 1,
        title: 'Tourmaline & Eucalyptus Bar Soap',
        image: image1,
        price: 12.00,
        description: 'Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion',
        link: ''
    },
    {
        id: 2,
        title: 'Tourmaline & Argan Oil Bar Soap',
        image: image2,
        price: 15,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit quasi eveniet ratione totam aut mollitia pariatur perspiciatis molestiae, eius, blanditiis quo placeat. Mollitia perferendis ea autem, veritatis ducimus dolorum numquam?',
        link: ''
    },
    {
        id: 3,
        title: 'Tourmaline & Tea Tree Bar Soap',
        image: image3,
        price: 10,
        description: 'Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion',
        link: ''
    },
    {
        id: 4,
        title: 'Tourmaline & Unscented Bar Soap',
        image: image4,
        price: 15,
        description: 'Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion',
        link: ''
    },
    {
        id: 5,
        title: 'Tourmaline & Tea Tree Bar Soap',
        image: image3,
        price: 15,
        description: 'Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion',
        link: ''
    },
    {
        id: 6,
        title: 'Tourmaline & Unscented Bar Soap',
        image: image4,
        price: 15,
        description: 'Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion',
        link: ''
    },
]

function ListProduct() {

  const [products, setProducts] = useState(data.map(p => ({...p, cant: 0})));
  const [titles, setTitles] = useState("");
  const [fontSize, setFontSize] = useState(20);

  const handleChangeTitles = (e) => {
    setTitles(e.target.value);
  }

  const handleChangeFontSize = (e) => {
    setFontSize(e.target.value);
  }

  const handleChangeCantProduct = (productId, cant) => {
    console.log('handleChangeCantProduct', )
    setProducts(products.map(p => {
        if (p.id !== productId){ return p}
        return {...p, cant}
    }));
  }
  

  return (
    <div className='list'>
        <div className='form'>
            <div className='form-field'>
                <label>Title the Products</label>
                <input type="text" name="titles" id="titles" value={titles} onChange={handleChangeTitles} />
            </div>
            <div className='form-field'>
                <label>Font Size</label>
                <input type="range" name="fontsize" id="fontsize" min="10" max="22" value={fontSize} onChange={handleChangeFontSize} />
            </div>
        </div>
        <div className="list-body">
            <div className="list-container">
                {products.map( product => (
                    CardComponent(product, titles, fontSize, handleChangeCantProduct)
                ))}
            </div>
        </div>
        <div>
            <hr />
            <label>Totals</label>
            <table>
                <thead>
                    <tr>
                        <th>Quantity Products</th>
                        <th>Amount to Pay</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{products.reduce((acc, value)=> { return acc + value.cant}, 0)}</td>
                        <td>$ {products.reduce((acc, value)=> { return acc + (value.cant *  value.price)}, 0)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  );
}

export default ListProduct;
