import SearchBar from "../SearchBar/SearchBar";

import { useEffect, useState } from "react";

import styles from "./ShopHeader.module.css";

import Banner1 from "../../../../assets/image11.png";
import Banner2 from "../../../../assets/image11.png";
import Banner3 from "../../../../assets/image11.png";

export default function ShopHeader() {

    const banners = [Banner1, Banner2, Banner3];

    const [bannerAtual, setBannerAtual] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setBannerAtual((prev) =>
                prev === banners.length - 1 ? 0 : prev + 1
            );
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.header}>
            <SearchBar placeHolder={"Procurar produto"} />
            <div className={styles.carouselContainer}>
                <div
                    className={styles.carouselTrack}
                    style={{
                        transform: `translateX(-${bannerAtual * 100}%)`
                    }}
                >
                    {banners.map((banner, index) => (
                        <img
                            key={index}
                            src={banner}
                            alt={`Banner ${index + 1}`}
                            className={styles.banner}
                        />
                    ))}
                </div>
            </div>
            <div className={styles.viewAdShop}>

                {banners.map((_, index) => (
                    <span
                        key={index}
                        className={
                            index === bannerAtual
                                ? styles.active
                                : styles.dot
                        }
                    ></span>
                ))}

            </div>
        </div>
    );
}