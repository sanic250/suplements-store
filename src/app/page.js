"use client"
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Slider from "./components/Slider";
import Itembox from "./components/Itembox";
import products from "./components/products"; // Promocja
import bialko from "./components/bialko"; // Białko
import kreatyna from "./components/kreatyna"; // Kreatyna
import zdrowieStawy from "./components/zdrowieStawy"; // Zdrowie i stawy
import akcesoria from "./components/akcesoria"; // Akcesoria

export default function Home() {
  
  
  return (
   <div className={styles.container}>
    <div className={styles.mainIcons}>
    <div className={styles.iconTrans}>
       <FontAwesomeIcon icon={faTruckFast} size="lg" color="black" 
        className={styles.icon}
       /> 
       <div className={styles.desc}>
       <p className={styles.mainDesc}>Darmowa dostawa</p>
       <p className={styles.subDesc}>Darmowa dostawa już od 159zł</p>
       </div>
    </div>
    <div className={styles.iconTrans}>
       <FontAwesomeIcon icon={faLocationDot} size="lg" color="black"
       className={styles.icon}
        />
        <div className={styles.desc}>
       <p className={styles.mainDesc}>Wiele lokalizacji w całej Polsce</p>
       <p className={styles.subDesc2}>Sprawdź lokalizację naszych punktów.</p>
        </div>
    </div>
    </div>
    <div className={styles.sliderPromo}>
     <Slider />
     <section className={styles.promo}>
      <div className={styles.promoTitleBox}>
        <h1 className={styles.titlePromo}>Promocja</h1>
      </div>
      <div className={styles.promoContainer}>
      {products.map((product) => (
              <div key={product.id} className={styles.slide}>
                <Itembox
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  flavors={product.flavors}
                  description={product.description}
                />
          </div>
        ))}
      </div>
     </section>
     <section className={styles.promo}>
      <div className={styles.promoTitleBox}>
        <h1 className={styles.titlePromo}>Białko</h1>
      </div>
      <div className={styles.promoContainer}>
      {bialko.map((bialko) => (
              <div key={bialko.id} className={styles.slide}>
                <Itembox
                  name={bialko.name}
                  price={bialko.price}
                  image={bialko.image}
                  flavors={bialko.flavors}
                  description={bialko.description}
                />
          </div>
        ))}
      </div>
     </section>
     <section className={styles.promo}>
      <div className={styles.promoTitleBox}>
        <h1 className={styles.titlePromo}>Kreatyna</h1>
      </div>
      <div className={styles.promoContainer}>
      {kreatyna.map((product) => (
              <div key={product.id} className={styles.slide}>
                <Itembox
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  flavors={product.flavors}
                  description={product.description}
                />
          </div>
        ))}
      </div>
     </section>
     <section className={styles.promo}>
      <div className={styles.promoTitleBox}>
        <h1 className={styles.titlePromo}>Zdrowie i stawy</h1>
      </div>
      <div className={styles.promoContainer}>
      {zdrowieStawy.map((product) => (
              <div key={product.id} className={styles.slide}>
                <Itembox
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  flavors={product.flavors}
                  description={product.description}
                />
          </div>
        ))}
      </div>
     </section>
     <section className={styles.promo}>
      <div className={styles.promoTitleBox}>
        <h1 className={styles.titlePromo}>Akcesoria</h1>
      </div>
      <div className={styles.promoContainer}>
      {akcesoria.map((product) => (
              <div key={product.id} className={styles.slide}>
                <Itembox
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  flavors={product.flavors}
                  description={product.description}
                />
          </div>
        ))}
      </div>
     </section>
    </div>
   </div>
    
  );
}
