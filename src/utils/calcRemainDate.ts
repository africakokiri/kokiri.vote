import dayjs from "dayjs";

export const calcRemainDate = (expirationDate: string) => {
  const now = dayjs(); // 현재 시간
  const expiration = dayjs(expirationDate); // expires_at

  const timeDiff = expiration.diff(now, "minute"); // 차이를 분 단위로 계산

  if (timeDiff < 1440) {
    // 24시간 미만 (1440분)
    const hours = expiration.diff(now, "hour");
    const minutes = expiration.diff(now, "minute") % 60;

    if (hours < 1) {
      return `${minutes}분 남음`;
    } else {
      return `${hours}시간 ${minutes}분 남음`;
    }
  } else {
    const days = expiration.diff(now, "day");
    return `${days}일 남음`;
  }
};
