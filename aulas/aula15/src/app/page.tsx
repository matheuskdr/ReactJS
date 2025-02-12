import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Button >Clique aqui</Button>
      <ThemeToggle />
    </div>
  );
}

export default Page;