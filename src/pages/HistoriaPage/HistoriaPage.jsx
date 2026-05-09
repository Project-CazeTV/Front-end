import ColoredHeader from "../../components/Layout/ColoredHeader/ColoredHeader";
import MainHeader from "../../components/Layout/MainHeader/MainHeader";
import HeroBanner from "../../features/Historia/components/HeroBanner/HeroBanner";
import HistoriaContent from "../../features/Historia/components/HistoriaContent/HistoriaContent";
import CommonFooter from "../../components/Layout/CommonFooter/CommonFooter";

export default function HistoriaPage() {
  
  return (
    <div>
        <ColoredHeader />
        <MainHeader isTransparent={true} />
        <HeroBanner/>
        <HistoriaContent />
        <CommonFooter />
    </div>
  );
}