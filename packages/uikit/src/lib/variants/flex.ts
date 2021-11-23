import { VariantConfig } from '@toss-ui/styled';

export const flex = {
  direction: {
    horizontal: {
      display: 'flex',
      flexDirection: 'row',
    },
    vertical: {
      display: 'flex',
      flexDirection: 'column',
    },
  } as VariantConfig<'horizontal' | 'vertical'>,
};
