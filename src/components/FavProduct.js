import styles from './css/FavProduct.module.css';

export default function FavProduct({product}){

    // console.log(product)

    return (
        <div className={styles.container}>
            <div className={styles.img_container}>
                <img src={product.image_url} alt={product.name}/>
            </div>
            <div className={styles.body}>
                <div className={styles.name}>{product.description}</div>
            </div>
        </div>
    )
}