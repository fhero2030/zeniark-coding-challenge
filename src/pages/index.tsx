import Image from "next/image";
import Container from "../layouts/Container";

export default function Home() {
  return (
    <Container className="p-28">
      <Image src={"/images/zeniark-logo.png"} width={344} height={91} alt="Zeniark Logo" />
    </Container>
  );
}
