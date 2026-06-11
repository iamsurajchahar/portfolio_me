import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PINNED,
  RESOURCES,
  resourceLogoUrl,
  type Resource,
} from "@/data/resources";
import Link from "next/link";

export const metadata = {
  title: "Resources",
  description:
    "Tools, references, and learning resources I use and recommend to other developers.",
};

const BLUR_FADE_DELAY = 0.04;

function ResourceLogo({ resource }: { resource: Resource }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={resourceLogoUrl(resource.href)}
      alt={`${resource.title} logo`}
      className="size-8 rounded-md border bg-white object-contain p-1"
    />
  );
}

export default function ResourcesPage() {
  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-bold text-5xl mb-2 tracking-tighter">Resources</h1>
        <p className="text-muted-foreground mb-8">
          Tools, references, and learning material I use and recommend to other
          developers. Everything here is free.
        </p>
      </BlurFade>

      <div className="space-y-10">
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="space-y-4">
            <Badge className="text-sm px-3 py-1">📌 Pinned Reads</Badge>
            <div className="flex flex-col gap-3">
              {PINNED.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="hover:shadow-lg transition-all duration-300 ease-out">
                    <CardHeader className="p-4">
                      <div className="flex items-start gap-3">
                        <ResourceLogo resource={item} />
                        <div className="space-y-1">
                          <CardTitle className="text-base">
                            {item.title}
                          </CardTitle>
                          <p className="font-sans text-xs text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </BlurFade>

        {RESOURCES.map((group, groupId) => (
          <BlurFade
            key={group.category}
            delay={BLUR_FADE_DELAY * 3 + groupId * 0.05}
          >
            <div className="space-y-4">
              <Badge className="text-sm px-3 py-1">{group.category}</Badge>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {group.items.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 ease-out">
                      <CardHeader className="p-4">
                        <div className="flex items-start gap-3">
                          <ResourceLogo resource={item} />
                          <div className="space-y-1">
                            <CardTitle className="text-base">
                              {item.title}
                            </CardTitle>
                            <p className="font-sans text-xs text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
