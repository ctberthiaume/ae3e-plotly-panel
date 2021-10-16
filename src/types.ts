export interface SimpleOptions {
  title: string;
  layout: object;
  config: object;
  data: any[];
  frames: any[];
}

export type EditorCodeType = string | undefined;
export type EditorLanguageType = 'javascript' | 'html' | 'json' | undefined;

export const defaults: SimpleOptions = {
  title: 'title',
  layout: {
    font: {
      color: 'darkgrey',
    },
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    margin: {
      t: 30,
      b: 20,
    },
    xaxis: {
      type: 'date',
    },
  },
  config: {
    displayModeBar: false,
  },
  data: [
    {
      type: 'scatter',
      mode: 'markers',
    },
  ],
  frames: [],
};
