import { redirect } from "next/navigation";

export default function DevPage() {
  // Redireciona /dev diretamente para a aba inicial de componentes
  redirect("/dev/buttons");
}