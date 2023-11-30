import Container from "@/components/pages/Home/Container/Container";
import Jumbotron from "@/components/shared/Jumbotron";

export default function Home() {
  return (
    <section className="layout">
      <Jumbotron />
      <Container />
    </section>
  );
}
