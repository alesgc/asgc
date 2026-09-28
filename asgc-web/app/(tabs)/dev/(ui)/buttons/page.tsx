import { Button } from "@/app/components/ui/Button";

export default function ButtonsPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Galeria de Botões</h2>
      <div className="flex gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="danger">Danger</Button>
      </div>
    </div>
  );
}