export { Button } from './button/Button';
export type { ButtonProps, ButtonVariant } from './button/button.types';

export { Icon } from './icon/Icon';
export type { IconProps, IconSize } from './icon/icon.types';

/*
 * CSS — import all required files once at your app root (or in globals.css / layout):
 *
 *   import 'alva-ui/src/tokens/alva.css';   ← design tokens (required)
 *   import 'alva-ui/src/button/button.css'; ← Button component styles
 *   import 'alva-ui/src/icon/icon.css';     ← Icon component styles
 *
 * With @import (CSS / PostCSS):
 *   @import 'alva-ui/src/tokens/alva.css';
 *   @import 'alva-ui/src/button/button.css';
 *   @import 'alva-ui/src/icon/icon.css';
 */
