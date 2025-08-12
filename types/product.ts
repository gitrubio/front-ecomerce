export interface ProductType {
    id:          number;
    documentId:  string;
    productName: string;
    slug:        string;
    description: string;
    active:      boolean;
    price:       number;
    isFeature:   boolean;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    images:      Image[];
    category:    Category;
}

export interface Category {
    id:           number;
    documentId:   string;
    categoryName: string;
    slug:         string;
    createdAt:    Date;
    updatedAt:    Date;
    publishedAt:  Date;
}

export interface Image {
    id:                number;
    documentId:        string;
    name:              string;
    alternativeText:   null;
    caption:           null;
    width:             number;
    height:            number;
    formats:           Formats;
    hash:              string;
    ext:               string;
    mime:              string;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: null;
    createdAt:         Date;
    updatedAt:         Date;
    publishedAt:       Date;
}

export interface Formats {
    small:     Small;
    thumbnail: Small;
}

export interface Small {
    ext:         string;
    url:         string;
    hash:        string;
    mime:        string;
    name:        string;
    path:        null;
    size:        number;
    width:       number;
    height:      number;
    sizeInBytes: number;
}




export interface CategoryType {
    id:           number;
    documentId:   string;
    categoryName: string;
    slug:         string;
    createdAt:    Date;
    updatedAt:    Date;
    publishedAt:  Date;
    mainImage:    MainImage | null;
}

export interface MainImage {
    id:                number;
    documentId:        string;
    name:              string;
    alternativeText:   null;
    caption:           null;
    width:             number;
    height:            number;
    formats:           Formats;
    hash:              string;
    ext:               string;
    mime:              string;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: null;
    createdAt:         Date;
    updatedAt:         Date;
    publishedAt:       Date;
}

export interface Formats {
    large:     Large;
    small:     Large;
    medium:    Large;
    thumbnail: Large;
}

export interface Large {
    ext:         string;
    url:         string;
    hash:        string;
    mime:        string;
    name:        string;
    path:        null;
    size:        number;
    width:       number;
    height:      number;
    sizeInBytes: number;
}
