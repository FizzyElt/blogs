import { extendTheme } from '@chakra-ui/react';

import components from '~/theme/components';
import colors from '~/theme/colors';
import styles from '~/theme/styles';

const theme = extendTheme({ colors, styles, components });

export default theme;
