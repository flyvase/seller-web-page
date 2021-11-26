import { TypographyVariant, useTheme } from '@mui/material';

export function useFontSize(variant: TypographyVariant) {
  const theme = useTheme();
  return theme.typography[variant].fontSize?.valueOf();
}
