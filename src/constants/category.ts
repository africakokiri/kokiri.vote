export const CATEGORY = {
  전체: 0,
  사회: 1,
  정치: 2,
  문화: 3,
  이슈: 4,
  기타: 5,
  기술: 6
} as const;

type CATEGORY = (typeof CATEGORY)[keyof typeof CATEGORY];
