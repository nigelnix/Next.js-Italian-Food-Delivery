import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeader from "./SectionHeader";

export default function HomeMenu() {
  return (
    <>
      <section className="my-8">
        <SectionHeader title={'Our Menu'} />
        <div className="grid grid-cols-4 gap-4 relative">
          <MenuItem /> 
          <MenuItem /> 
          <MenuItem /> 
          <MenuItem /> 
          <MenuItem /> 
          <MenuItem /> 
          <MenuItem /> 
          <MenuItem /> 
        </div>
      </section>
        <hr />
    </>
  );
}
