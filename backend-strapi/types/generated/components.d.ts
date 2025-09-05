import type { Schema, Struct } from '@strapi/strapi';

export interface ProductVariant extends Struct.ComponentSchema {
  collectionName: 'components_product_variants';
  info: {
    displayName: 'Variant';
    icon: 'apps';
  };
  attributes: {
    Color: Schema.Attribute.String & Schema.Attribute.Required;
    Marca: Schema.Attribute.String;
    Size: Schema.Attribute.String & Schema.Attribute.Required;
    sku: Schema.Attribute.String;
    Stock: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'product.variant': ProductVariant;
    }
  }
}
