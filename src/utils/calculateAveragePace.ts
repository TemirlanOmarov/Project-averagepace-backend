export function calculateAveragePace(
    duration: number,
    distanceM: number,
  ): string {
    const distanceKm = distanceM / 1000;
  
    return `${duration / distanceKm} min / km`;
  }
  