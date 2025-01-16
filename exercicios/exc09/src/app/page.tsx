"use client"

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { ThemeProvider } from "@/contexts/ThemeContext";

const Page = () => {
  return (
    <ThemeProvider>
      <Container>
        <header className="py-5">
          <h1 className="text=3xl">Título da Página</h1>
        </header>
        <section>
          <p className="py-5">Conteúdo da página</p>

          <Button label="Clicque aqui" onClick={() => {}}/>
        </section>
        <ThemeSwitch />
      </Container>
    </ThemeProvider>
  );
}

export default Page;