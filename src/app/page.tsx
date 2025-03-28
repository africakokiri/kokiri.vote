import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { cn } from "@/libs/shadcn/utils";
import { MOCK_VOTE_LIST } from "@/mock/vote_list";
import { calcRemainDate } from "@/utils/calcRemainDate";

import { ChevronRight, Clock, Users } from "lucide-react";
import Link from "next/link";

const MOCK_DATA_EXPIRES_AT_ASC = MOCK_VOTE_LIST.sort((a, b) => {
  if (a.expires_at > b.expires_at) return 1;
  if (a.expires_at < b.expires_at) return -1;

  return 0;
});

export default function page() {
  return (
    <div className="space-y-4 px-4">
      {MOCK_DATA_EXPIRES_AT_ASC.map(
        ({ id, title, description, votes_count, expires_at }) => {
          const remainDate = calcRemainDate(expires_at);

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
                  <div
                    className={cn(
                      "flex items-center gap-1",
                      remainDate.includes("분 남음") && "text-red-500"
                    )}
                  >
                    <Clock className="h-4 w-4" />
                    <span>{remainDate}</span>
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
