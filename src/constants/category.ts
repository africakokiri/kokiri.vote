export const CATEGORY = {
  사회: 0,
  정치: 1,
  문화: 2,
  이슈: 3,
  기타: 4
} as const;

type CATEGORY = (typeof CATEGORY)[keyof typeof CATEGORY];
