import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/app/components/ui/Card";
import { Badge } from "@/app/components/ui/Badge";
import { CustomLink } from "@/app/components/ui/Link";

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  deployUrl?: string;
}

interface ProjectsGridProps {
  projects: ProjectItem[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <Card key={project.id} className="flex flex-col justify-between">
          <div>
            <CardHeader className="flex flex-row items-start justify-between gap-2 border-b-0 pb-0">
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>

            <CardContent className="mt-2">
              <CardDescription>{project.description}</CardDescription>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="accent">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </div>

          <CardFooter>
            {project.githubUrl ? (
              <CustomLink href={project.githubUrl} external>
                Ver no GitHub
              </CustomLink>
            ) : (
              <span />
            )}

            {project.deployUrl && (
              <CustomLink href={project.deployUrl} external>
                Acessar Projeto
              </CustomLink>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}