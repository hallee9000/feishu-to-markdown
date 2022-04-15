export type DOMMessage = {
  type: 'ENHANCE_INSPECTOR',
  comments?: any;
}

export type DOMMessageResponse = {
  title: string;
  headlines: string[];
}