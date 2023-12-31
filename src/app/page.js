import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeader from "@/components/layout/SectionHeader";

export default function Home() {
  return (
    <>
      
      <Hero />
      <HomeMenu />
      <section>
        <SectionHeader title={"Our story"} />
        <div className="max-w-xl text-center mx-auto text-gray-500">
          <p>
            Our family roots are 6th generation Italian and our recipes come
            from 150 years of family cooking passed down from parent to children
            with love and strict adherence to the our secret recipes.
          </p>
          <p className="mt-4">
            We use only the freshest ingredients harvested daily from our own
            organic micro-farms but our authentic wines, cheeses and meats are
            imported from Italy. Our pasta, is of course, made fresh at order
            time and delivered to your table with love.
          </p>
          <p className="mt-4">
            Please be sure to book your table at least 6 weeks in advance in order to avoid disappointment as the demand for reservations is extremely high.  
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeader title={'Contact us'} />
        <a href="tel:+4923444556677" className="text-3xl underline text-gray-500 hover:text-gray-700">+49 234 4455 6677</a>
      </section>
      
    </>
  );
}
