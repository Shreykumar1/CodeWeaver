import type { ITheme } from '@xterm/xterm';

const style = getComputedStyle(document.documentElement);
const cssVar = (token: string) => style.getPropertyValue(token) || undefined;

export function getTerminalTheme(overrides?: ITheme): ITheme {
  return {
    cursor: cssVar('--codeweaver-elements-terminal-cursorColor'),
    cursorAccent: cssVar('--codeweaver-elements-terminal-cursorColorAccent'),
    foreground: cssVar('--codeweaver-elements-terminal-textColor'),
    background: cssVar('--codeweaver-elements-terminal-backgroundColor'),
    selectionBackground: cssVar('--codeweaver-elements-terminal-selection-backgroundColor'),
    selectionForeground: cssVar('--codeweaver-elements-terminal-selection-textColor'),
    selectionInactiveBackground: cssVar('--codeweaver-elements-terminal-selection-backgroundColorInactive'),

    // ansi escape code colors
    black: cssVar('--codeweaver-elements-terminal-color-black'),
    red: cssVar('--codeweaver-elements-terminal-color-red'),
    green: cssVar('--codeweaver-elements-terminal-color-green'),
    yellow: cssVar('--codeweaver-elements-terminal-color-yellow'),
    blue: cssVar('--codeweaver-elements-terminal-color-blue'),
    magenta: cssVar('--codeweaver-elements-terminal-color-magenta'),
    cyan: cssVar('--codeweaver-elements-terminal-color-cyan'),
    white: cssVar('--codeweaver-elements-terminal-color-white'),
    brightBlack: cssVar('--codeweaver-elements-terminal-color-brightBlack'),
    brightRed: cssVar('--codeweaver-elements-terminal-color-brightRed'),
    brightGreen: cssVar('--codeweaver-elements-terminal-color-brightGreen'),
    brightYellow: cssVar('--codeweaver-elements-terminal-color-brightYellow'),
    brightBlue: cssVar('--codeweaver-elements-terminal-color-brightBlue'),
    brightMagenta: cssVar('--codeweaver-elements-terminal-color-brightMagenta'),
    brightCyan: cssVar('--codeweaver-elements-terminal-color-brightCyan'),
    brightWhite: cssVar('--codeweaver-elements-terminal-color-brightWhite'),

    ...overrides,
  };
}
