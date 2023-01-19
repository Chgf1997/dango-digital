import './index.css';
import { useEffect, useRef } from 'react';

function Card(product, titles, fontSize, handleChangeCantProduct) {
    const {
        id,
        title,
        image,
        price,
        cant,
        description,
        link
    } = product;

    const titleNode = useRef(null);

    const handleChangeCant = (e) => {
        handleChangeCantProduct(id, Number(e.target.value));
    }

    useEffect(()=>{
        titleNode.current.style.fontSize = `${fontSize}px`;

    }, [fontSize]);

  return (
    <div className="card-body" key={id}>
        {/* imagen */}
        <div className="card-imagen-container">
            <div className='card-imagen'>
                <img src={image} alt="imagen" />
            </div>
        </div>

        {/* content */}
        <div className='card-content'>
            <div className='card-title'>
                <label ref={titleNode}>
                    {titles.length ? titles : title}
                </label>
            </div>
            <div className='card-price-container'>
                <div>
                    ${Number(price * (cant + 1)).toFixed(2)}
                </div>
                <div>
                    <input type="number" min="0" value={cant} onChange={handleChangeCant}/>
                </div>
            </div>
            <div className='card-description'>
                {description}
            </div>
            <div className='card-btns-container'>
                <div>
                    <button className='card-btn-to-add' type='submit'>
                        Add to cart
                    </button>
                </div>
                <div>
                    <a href="http://google.com.ve" className='card-link'>
                        Learn More
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Card;
