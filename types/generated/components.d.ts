import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedAccordion extends Schema.Component {
  collectionName: 'components_shared_accordions';
  info: {
    displayName: 'Accordion';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    detailsLink: Attribute.String;
    detailsText: Attribute.String;
    img: Attribute.Media;
    backgroundColor: Attribute.String;
    textWithIcon: Attribute.Component<'shared.text-with-icon', true>;
  };
}

export interface SharedBulletList extends Schema.Component {
  collectionName: 'components_shared_bullet_lists';
  info: {
    displayName: 'Bullet list';
    icon: 'apps';
  };
  attributes: {
    Title: Attribute.String;
    media: Attribute.Media;
  };
}

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

export interface SharedDateStatus extends Schema.Component {
  collectionName: 'components_shared_date_statuses';
  info: {
    displayName: 'date - status';
    icon: 'car';
  };
  attributes: {
    date: Attribute.String;
    enable: Attribute.Boolean;
  };
}

export interface SharedHtmlCssTemplate extends Schema.Component {
  collectionName: 'components_shared_html_css_templates';
  info: {
    displayName: 'HtmlCssTemplate';
    icon: 'medium';
  };
  attributes: {
    Html: Attribute.Text & Attribute.DefaultTo<'Html'>;
    Css: Attribute.Text & Attribute.DefaultTo<'Css'>;
  };
}

export interface SharedIcon extends Schema.Component {
  collectionName: 'components_shared_icons';
  info: {
    displayName: 'Icon';
    icon: 'lightbulb';
  };
  attributes: {
    name: Attribute.Enumeration<
      [
        'IconArrowGoToBold',
        'IconComputerRegular',
        'IconRemoveCloseBold',
        'IconHomeBold',
        'IconCarRegular',
        'IconLightEnergyFlashRegular',
        'IconLightLampBulbRegular',
        'IconPlugRegular'
      ]
    >;
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

export interface SharedMultiRegionBlock extends Schema.Component {
  collectionName: 'components_shared_multi_region_blocks';
  info: {
    displayName: 'MultiRegionBlock';
    icon: 'apps';
  };
  attributes: {
    Txt: Attribute.String;
    regions: Attribute.Relation<
      'shared.multi-region-block',
      'oneToMany',
      'api::region.region'
    >;
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

export interface SharedTextWithIcon extends Schema.Component {
  collectionName: 'components_shared_text_with_icons';
  info: {
    displayName: 'textWithIcon';
    icon: 'book';
  };
  attributes: {
    text: Attribute.String;
    icon: Attribute.Component<'shared.icon'>;
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
      'shared.accordion': SharedAccordion;
      'shared.bullet-list': SharedBulletList;
      'shared.button': SharedButton;
      'shared.date-status': SharedDateStatus;
      'shared.html-css-template': SharedHtmlCssTemplate;
      'shared.icon': SharedIcon;
      'shared.link': SharedLink;
      'shared.menu': SharedMenu;
      'shared.multi-region-block': SharedMultiRegionBlock;
      'shared.seo': SharedSeo;
      'shared.tag': SharedTag;
      'shared.text-with-icon': SharedTextWithIcon;
      'shared.text': SharedText;
    }
  }
}
