import { CATEGORY } from "@/constants/category";

export const MOCK_VOTE_LIST = [
  {
    id: 1,
    title: "2024년 최고의 영화",
    description: "2024년에 개봉한 최고의 영화를 투표해주세요.",
    author: "홍길동",
    votes_count: 1500,
    created_at: "2025-03-28T12:40:00",
    expires_at: "2025-03-30T12:40:00", // 2일 뒤
    category: CATEGORY.문화
  },
  {
    id: 2,
    title: "가장 좋아하는 프로그래밍 언어",
    description: "2024년 가장 좋아하는 프로그래밍 언어는 무엇인가요?",
    author: "김철수",
    votes_count: 0,
    created_at: "2025-03-28T12:40:00",
    expires_at: "2025-03-29T12:40:00", // 1일 뒤
    category: CATEGORY.기술
  },
  {
    id: 3,
    title: "가장 기대되는 게임",
    description: "가장 기대되는 게임은 무엇인가요?",
    author: "이영희",
    votes_count: 3200,
    created_at: "2025-03-28T12:40:00",
    expires_at: "2025-03-31T12:40:00", // 3일 뒤
    category: CATEGORY.문화
  },
  {
    id: 4,
    title: "2024년 최고의 기술 기기",
    description: "2024년 최고의 기술 기기를 뽑아주세요.",
    author: "",
    votes_count: 0,
    created_at: "2025-03-28T12:40:00",
    expires_at: "2025-03-28T13:40:00", // 1시간 뒤
    category: CATEGORY.기술
  },
  {
    id: 5,
    title: "올해의 최고 음악 앨범",
    description: "올해 가장 영향을 미친 음악 앨범은 무엇인가요?",
    author: "정지은",
    votes_count: 5000,
    created_at: "2025-03-28T12:40:00",
    expires_at: "2025-03-30T12:40:00", // 2일 뒤
    category: CATEGORY.문화
  },
  {
    id: 6,
    title: "올해 가장 영향력 있는 인물",
    description: "2024년 가장 영향력 있는 인물은 누구인가요?",
    author: "최유진",
    votes_count: 2100,
    created_at: "2025-03-28T12:40:00",
    expires_at: "2025-03-28T13:10:00", // 30분 뒤
    category: CATEGORY.사회
  },
  {
    id: 7,
    title: "최고의 레스토랑",
    description: "가장 기억에 남는 레스토랑을 뽑아주세요.",
    author: "",
    votes_count: 1800,
    created_at: "2025-03-28T12:40:00",
    expires_at: "2025-03-29T12:40:00", // 1일 뒤
    cateogry: CATEGORY.문화
  },
  {
    id: 8,
    title: "가장 좋아하는 TV 시리즈",
    description: "가장 좋아하는 TV 시리즈는 무엇인가요?",
    author: "한수진",
    votes_count: 1100,
    created_at: "2025-03-28T12:40:00",
    expires_at: "2025-03-28T13:40:00", // 1시간 뒤
    category: CATEGORY.문화
  },
  {
    id: 9,
    title: "2024년 최고의 모바일 앱",
    description: "2024년 최고의 모바일 앱은 무엇인가요?",
    author: "오세훈",
    votes_count: 3500,
    created_at: "2025-03-28T12:40:00",
    expires_at: "2025-03-31T12:40:00", // 3일 뒤
    category: CATEGORY.기술
  },
  {
    id: 10,
    title: "올해 최고의 스포츠 팀",
    description: "올해 최고의 스포츠 팀은 어디인가요?",
    author: "송지혜",
    votes_count: 0,
    created_at: "2025-03-28T12:40:00",
    expires_at: "2025-03-28T13:30:00", // 50분 뒤
    category: CATEGORY.이슈
  }
];
