declare module 'phosphor-react-native' {
    import { FC } from 'react';
    import { SvgProps } from 'react-native-svg';
  
    type IconProps = SvgProps & {
      weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';
      color?: string;
      size?: number;
    };
  
    const Icon: FC<IconProps>;
    export default Icon;
  }
  