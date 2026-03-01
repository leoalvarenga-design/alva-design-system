export { Button } from './button/Button';
export type { ButtonProps, ButtonVariant } from './button/button.types';

export { Icon } from './icon/Icon';
export type { IconProps, IconSize } from './icon/icon.types';

export { Field } from './field/Field';
export type { FieldProps, FieldStatus } from './field/field.types';

export { Label } from './label/Label';
export type { LabelProps } from './label/label.types';

export { Input } from './input/Input';
export type { InputProps, InputStatus } from './input/input.types';

/*
 * CSS — import all required files once at your app root (or in globals.css / layout):
 *
 *   import 'alva-ui/src/tokens/alva.css';   ← design tokens (required)
 *   import 'alva-ui/src/button/button.css'; ← Button component styles
 *   import 'alva-ui/src/icon/icon.css';     ← Icon component styles
 *   import 'alva-ui/src/field/field.css';   ← Field component styles
 *   import 'alva-ui/src/label/label.css';   ← Label component styles
 *   import 'alva-ui/src/input/input.css';   ← Input component styles
 *
 * With @import (CSS / PostCSS):
 *   @import 'alva-ui/src/tokens/alva.css';
 *   @import 'alva-ui/src/button/button.css';
 *   @import 'alva-ui/src/icon/icon.css';
 *   @import 'alva-ui/src/field/field.css';
 *   @import 'alva-ui/src/label/label.css';
 *   @import 'alva-ui/src/input/input.css';
 */
