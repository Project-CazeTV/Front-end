import MainHeader from "../../components/Layout/MainHeader/MainHeader";
import CommonFooter from "../../components/Layout/CommonFooter/CommonFooter";
import ColoredHeader from "../../components/Layout/ColoredHeader/ColoredHeader";
import FilterSection from "../../components/Common/FilterSection/FilterSection";
import ProductCard from "../../features/Shop/components/ProductCard/ProductCard";
import ShopHeader from "../../features/Shop/components/ShopHeader/ShopHeader";

import { useState } from "react";

import styles from "./ShopPage.module.css"

//mock
import { productsMock } from "../../mocks/products";

export default function ShopPage() {

  const filtros = [
    "Maior para menor preço",
    "Menor para maior preço",
    "Acima de R$100",
    "Abaixo de R$100",
    "Em promoção",
  ];

  const [filtroAtivo, setFiltroAtivo] = useState("")
  const [maxProductsLoaded, setMaxProductsLoaded] = useState(6)

  const loadMoreProducts = () => {
    setMaxProductsLoaded((prev) => prev + 4)
  }
  
  return (
    <div className={styles.page}>
      <ColoredHeader />
      <MainHeader />
      <ShopHeader />
      <FilterSection titulo={"filtro de preços"} filtros={filtros} filtroAtivo={filtroAtivo} setFiltroAtivo={setFiltroAtivo}/>
      <div className={styles.productsArea}>
        {productsMock.slice(0, maxProductsLoaded).map((produto) => (
          <ProductCard key={produto.id} nome={produto.nome} preco={produto.preco} img={produto.img} cores={produto.coresDisponiveis}/>
        ))}
      </div>
      <button onClick={loadMoreProducts} className={styles.viewMoreButton}>Ver mais</button>
      <CommonFooter />
    </div>
  );
}