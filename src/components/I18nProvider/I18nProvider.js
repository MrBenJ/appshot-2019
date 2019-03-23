// @flow
import React, { Component, type Node } from 'react';

type I18nProviderProps = {
  /** 2 letter language code to default to */
  language: string,

  /** Stuff to render */
  children: Node,

  /** a YAML file containing all the strings for the app in multiple languages */
  strings: Object
};

type I18nProviderState = {
  language: string,
  t: string => string,
  setLanguage: string => void
};

type I18nContextValue = {
  t: string => string,
  setLanguage: string => void
};

const {
  Provider,
  Consumer: I18nConsumer
} = React.createContext<I18nContextValue>({
  t: str => str,
  setLanguage: () => {}
});

/**
 * A Provider component that sends translate and setLanguage strings to the any
 * child component that needs it. Also controls how strings are translated in
 * the app.
 */
class I18nProvider extends Component<I18nProviderProps, I18nProviderState> {
  constructor(props: I18nProviderProps) {
    super(props);

    this.state = {
      language: props.language,
      t: this.translate,
      setLanguage: this.setLanguage
    };
  }

  static defaultProps = {
    language: 'en'
  };

  /**
   * Sets the language in the app
   * @public
   */
  setLanguage = (language: string): void => {
    this.setState({ language });
  };

  /**
   * Translates a string with "path.to.string" notation
   * @public
   */
  translate = (str: string): string => {
    const { language } = this.state;
    const { strings } = this.props;
    const path = str.split('.');
    let depth = 0;
    let translation = strings[language];

    while (typeof translation !== 'string') {
      if (!translation) {
        return `No entry found for ${str}`;
      }
      translation = translation[path[depth]];
      depth++;
    }
    return translation;
  };

  render(): Node {
    const { children } = this.props;
    return <Provider value={this.state}>{children}</Provider>;
  }
}

export { I18nConsumer };
export default I18nProvider;
