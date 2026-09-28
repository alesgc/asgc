import { Button } from "@/app/components/ui/Button";
import { Badge } from "@/app/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/app/components/ui/Card";

export default function ButtonsDevPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Galeria de Botões</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="primary" isLoading>Loading</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Galeria de Badges / Tags</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Badge variant="default">Default</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="accent">SQL</Badge>
          <Badge variant="accent">Python</Badge>
          <Badge variant="accent">Next.js</Badge>
        </CardContent>
      </Card>
    </div>
  );
}