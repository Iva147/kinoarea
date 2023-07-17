export const getRatingColor = (rating: number): string => {
  const hue = (rating / 10) * 120 // Вычисляем оттенок в диапазоне 0-120
  const saturation = 70 // Насыщенность цвета (в данном случае, 100%)
  const lightness = 50 // Яркость цвета (в данном случае, 50%)

  // Ограничиваем оттенок между 0 и 120
  const clampedHue = Math.max(0, Math.min(hue, 120))

  if (rating >= 5) {
    return `hsl(${clampedHue}, ${saturation}%, ${lightness}%)`
  } else {
    // Отрицательный рейтинг - градиент от желтого (60) к красному (0)
    return `hsl(${clampedHue}, ${saturation}%, ${lightness}%)`
  }
}
