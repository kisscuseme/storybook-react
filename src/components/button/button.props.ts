export interface ButtonProps {
  /**
   * 페이지 내 주요한 버튼인가?
   */
  primary?: boolean;
  /**
   * 버튼 배경 색상
   */
  backgroundColor?: string;
  /**
   * 버튼 글자 색상
   */
  color?: string;
  /**
   * 버튼 크기 설정
   */
  size?: "small" | "medium" | "large";
  /**
   * 버튼 텍스트 입력
   */
  label: string;
  /**
   * 클릭 핸들러
   */
  onClick?: () => void;
}
