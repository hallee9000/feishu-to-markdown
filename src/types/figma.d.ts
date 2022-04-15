interface Window {
  figma: PluginAPI;
  editor: any;
}

interface FigmaStyle {
  id: string;
  description: string;
  key: string;
  name: string;
  remote: boolean;
  type: string;
}

interface FigmaStyles {
  [type: string]: FigmaStyle
}

interface FigmaNode {
  id: string;
  name: string;
  type: string;
}

type ChangedCallback = (nodes: FigmaNode[], componentIds: string[]) => void;
type StylesGotCallback = (styles: FigmaStyles) => void;
