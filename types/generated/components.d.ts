import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedButton extends Schema.Component {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
    icon: 'apps';
  };
  attributes: {
    Title: Attribute.String;
    To: Attribute.String;
    Type: Attribute.String;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    To: Attribute.String & Attribute.Required;
  };
}

export interface SharedMenu extends Schema.Component {
  collectionName: 'components_shared_menus';
  info: {
    displayName: 'Menu';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    Menu: Attribute.Component<'shared.link', true>;
    Title: Attribute.String;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'SEO';
    icon: 'alien';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.String;
    Tag: Attribute.Component<'shared.tag', true>;
  };
}

export interface SharedTag extends Schema.Component {
  collectionName: 'components_shared_tags';
  info: {
    displayName: 'Tag';
    icon: 'code';
  };
  attributes: {
    Name: Attribute.String;
    Content: Attribute.String;
  };
}

export interface SharedText extends Schema.Component {
  collectionName: 'components_shared_texts';
  info: {
    displayName: 'Text';
    icon: 'bold';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    variant: Attribute.String & Attribute.DefaultTo<'regular'>;
    color: Attribute.String & Attribute.DefaultTo<'black'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.button': SharedButton;
      'shared.link': SharedLink;
      'shared.menu': SharedMenu;
      'shared.seo': SharedSeo;
      'shared.tag': SharedTag;
      'shared.text': SharedText;
    }
  }
}
