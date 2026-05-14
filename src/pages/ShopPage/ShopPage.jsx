import MainHeader from "../../components/Layout/MainHeader/MainHeader";
import CommonFooter from "../../components/Layout/CommonFooter/CommonFooter";
import ColoredHeader from "../../components/Layout/ColoredHeader/ColoredHeader";
import FilterSection from "../../components/Common/FilterSection/FilterSection";
import ProductCard from "../../features/Shop/components/ProductCard/ProductCard";
import ShopHeader from "../../features/Shop/components/ShopHeader/ShopHeader";
import ProgressBar from "../../features/Shop/components/ProgressBar/ProgressBar";
import CartIcon from "../../features/Shop/components/CartIcon/CartIcon";
import { useState, useEffect } from "react";
import styles from "./ShopPage.module.css";
import { productsMock } from "../../mocks/products";
import { filtros } from "../../mocks/filters/shopFilters.js";
import CazeStore from '../../assets/CazeStore.png';
import Banner1 from "../../assets/banners/banner1.png";
import Banner2 from "../../assets/banners/banner2.png";
import Banner3 from "../../assets/banners/banner3.png";


export default function ShopPage() {

  const banners = [Banner1, Banner2, Banner3];

  const [filtroAtivo, setFiltroAtivo] = useState("Todos");

  const [maxProductsLoaded, setMaxProductsLoaded] = useState(6);

  const [pesquisa, setPesquisa] = useState("");

  const [cartAmount, setCartAmount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const amount = cart.reduce((total, item) => {
      return total + item.amount;
    }, 0);

    setCartAmount(amount);
  }, []);

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find(
      (item) =>
        item.id === product.id &&
        item.color === product.color
    );

    if (existingProduct) {
      existingProduct.amount += 1;
    } else {
      cart.push({
        ...product,
        amount: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    const amount = cart.reduce((total, item) => {
      return total + item.amount;
    }, 0);

    setCartAmount(amount);
  };

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
        banners={banners}
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
              id={produto.id}
              nome={produto.nome}
              preco={produto.preco}
              img={produto.img}
              cores={produto.coresDisponiveis}
              addToCart={addToCart}
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

      <CartIcon amount={cartAmount} />

      <CommonFooter />
    </div>
  );
}