export interface OrderType {
    id:               number;
    documentId:       string;
    orderStatus:      string;
    createdAt:        Date;
    updatedAt:        Date;
    publishedAt:      Date;
    emailCustomer:    string;
    PhoneCustomer:    string;
    AddressCustomer:  string;
    NameCustomer:     string;
    total:            number;
    especificaciones: string;
}
