import Bali from "@/components/Home/bali";
import CostaRica from "@/components/Home/costaRica";
import GroupLogo from "@/components/Home/groupLogo";
import Hour from "@/components/Home/hour";
import India from "@/components/Home/india";
import Our from "@/components/Home/our";
import Section from "@/components/Home/section";
import Text from "@/components/Home/text";


export default function Home() {
  return (
    <main className="bg-[#FFFFFF]">
      <Section/>
      <Text/>
      <Bali/>
      <GroupLogo/>
      <Hour/>
      <CostaRica/>
      <India/>
      <Our/>
    </main>
  )
}
