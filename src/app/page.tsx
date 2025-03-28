import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { MOCK_VOTE_LIST } from "@/mock/vote_list";

import { ChevronRight, Clock, Users } from "lucide-react";
import Link from "next/link";

export default function page() {
  return (
    <div className="space-y-4 px-4">
      {MOCK_VOTE_LIST.map(
        ({
          id,
          title,
          description,
          author,
          votes_count,
          created_at,
          expires_at
        }) => {
          return (
            <Card
              key={id}
              className="h-full"
            >
              <CardHeader>
                <CardTitle className="line-clamp-1">{title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className="flex items-center gap-4 text-sm
text-muted-foreground"
                >
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{votes_count}명</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>1234일 남음</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link
                  href={`/vote/${id}`}
                  className="ml-auto"
                >
                  <Button
                    variant="ghost"
                    className="gap-1"
                    aria-label="투표하기"
                  >
                    투표하기
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          );
        }
      )}
    </div>
  );
}
