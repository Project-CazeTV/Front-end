import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './HomeNews.module.css';

export default function HomeNews({ newsList }){
    
    const currentNews = newsList[index]

    return(
        <section className={styles.heroContainer}>
            <AnimatePresence mode="wait">
                <motion.div 
          key={currentNews.id} 
          className={styles.contentFlex}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* lado esquerdo: a imagem */}
          <motion.div 
            className={styles.imageWrapper}
            initial={{ x: -100 }} // Imagem sai/entra pela esquerda
            animate={{ x: 0 }}
            exit={{ x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <img src={currentNews.image} alt={currentNews.title} className={styles.heroImage} />
          </motion.div>

          {/* lado direito: o texto */}
          <motion.div 
            className={styles.textWrapper}
            initial={{ x: 100 }} // Texto sai/entra pela direita
            animate={{ x: 0 }}
            exit={{ x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <h2>{currentNews.title}</h2>
            <p>{currentNews.description}</p>
            <button className={styles.btn}>Ver notícia completa</button>
          </motion.div>
        </motion.div>
            </AnimatePresence>
        </section>
    )
}