import MainHeader from "../../components/Layout/MainHeader/MainHeader";
import CommonFooter from "../../components/Layout/CommonFooter/CommonFooter";
import ColoredHeader from "../../components/Layout/ColoredHeader/ColoredHeader";
import FilterSection from "../../components/Common/FilterSection/FilterSection";
import ProductCard from "../../features/Shop/components/ProductCard/ProductCard";
import ShopHeader from "../../features/Shop/components/ShopHeader/ShopHeader";
import ProgressBar from "../../features/Shop/components/ProgressBar/ProgressBar";

import { useState } from "react";

import styles from "./ShopPage.module.css";

// mock
import { productsMock } from "../../mocks/products";

export default function ShopPage() {

  const filtros = [
    "Todos",
    "Maior para menor preço",
    "Menor para maior preço",
    "Acima de R$100",
    "Abaixo de R$100",
    "Em promoção",
  ];

  const [filtroAtivo, setFiltroAtivo] = useState("Todos");

  const [maxProductsLoaded, setMaxProductsLoaded] = useState(6);

  const [pesquisa, setPesquisa] = useState("");

  const loadMoreProducts = () => {
    setMaxProductsLoaded((prev) => prev + 4);
  };

  const produtosFiltrados = [...productsMock]

    .sort((a, b) => {

      if (filtroAtivo === "Maior para menor preço") {
        return b.preco - a.preco;
      }

      if (filtroAtivo === "Menor para maior preço") {
        return a.preco - b.preco;
      }

      return 0;

    })

    .filter((produto) => {

      const nomeMatch = produto.nome
        .toLowerCase()
        .includes(pesquisa.toLowerCase());

      if (!nomeMatch) {
        return false;
      }

      if (filtroAtivo === "Acima de R$100") {
        return produto.preco > 100;
      }

      if (filtroAtivo === "Abaixo de R$100") {
        return produto.preco < 100;
      }

      if (filtroAtivo === "Em promoção") {
        return produto.preco < 80;
      }

      return true;

    });

  const productsLoaded = (maxLoaded, products) => {
    return maxLoaded > products.length
      ? products.length
      : maxLoaded;
  };

  return (
    <div className={styles.page}>

      <ColoredHeader />

      <MainHeader />

      <ShopHeader
        pesquisa={pesquisa}
        setPesquisa={setPesquisa}
      />

      <FilterSection
        titulo={"Filtro de preços"}
        filtros={filtros}
        filtroAtivo={filtroAtivo}
        setFiltroAtivo={setFiltroAtivo}
      />

      <div className={styles.productsArea}>

        {produtosFiltrados
          .slice(0, maxProductsLoaded)
          .map((produto) => (

            <ProductCard
              key={produto.id}
              nome={produto.nome}
              preco={produto.preco}
              img={produto.img}
              cores={produto.coresDisponiveis}
            />

          ))}

      </div>

      <p className={styles.amountProducts}>
        <strong>
          {productsLoaded(maxProductsLoaded, produtosFiltrados)} de{" "}
          {produtosFiltrados.length}
        </strong>{" "}
        produtos
      </p>

      <ProgressBar
        current={productsLoaded(
          maxProductsLoaded,
          produtosFiltrados
        )}
        total={produtosFiltrados.length}
      />

      {maxProductsLoaded < produtosFiltrados.length && (
        <button
          onClick={loadMoreProducts}
          className={styles.viewMoreButton}
        >
          Ver mais
        </button>
      )}

      <CommonFooter />

    </div>
  );
}