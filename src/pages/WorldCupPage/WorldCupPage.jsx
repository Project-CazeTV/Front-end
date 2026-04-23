import MainHeader from '../../components/Layout/MainHeader/MainHeader';
import CommonFooter from '../../components/Layout/CommonFooter/CommonFooter';
import CountdownCard from '../../features/WorldCup/components/CountdownCard/CountdownCard';
import FilterSection from '../../components/Common/FilterSection/FilterSection';
import styles from './WorldCupPage.module.css';
import ColoredHeader from '../../components/Layout/ColoredHeader/ColoredHeader';

export default function WorldCupPage() {
  return (
    <div className={styles.pageContainer}>
        <ColoredHeader></ColoredHeader>
      <MainHeader isTransparent={true} />
      
      <main className={styles.mainContent}>
        <CountdownCard />
      </main>

      <CommonFooter />
    </div>
  );
}