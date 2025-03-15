export const CATEGORY = {
  사회: "사회",
  정치: "정치",
  문화: "문화",
  이슈: "이슈",
  기타: "기타"
} as const;

type CATEGORY = (typeof CATEGORY)[keyof typeof CATEGORY];
