export const subTestIdInit = (
  testid: string
): ((subtestId: string) => string) => {
  return (subtestId): string => `${testid}-${subtestId}`;
};
