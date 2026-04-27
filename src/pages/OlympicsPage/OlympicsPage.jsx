import MainHeader from '../../components/Layout/MainHeader/MainHeader';
import CommonFooter from '../../components/Layout/CommonFooter/CommonFooter';
import CountdownCard from '../../features/WorldCup/components/CountdownCard/CountdownCard';
import FilterSection from '../../components/Common/FilterSection/FilterSection';
import ColoredHeader from '../../components/Layout/ColoredHeader/ColoredHeader';
import MedalTable from '../../features/Olimpiadas/components/MedalTable/MedalTable';
import styles from './OlympicsPage.module.css'

export default function OlympicsPage(){
    return (
           <div className={styles.pageContainer}>
                <ColoredHeader></ColoredHeader>
              <MainHeader isTransparent={true} />
              <MedalTable />
              </div>
        
        
    )
}