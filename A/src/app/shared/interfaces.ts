export interface ICompanyDetail {
    Id: Number ;
    CompanyId: String ;
    CompanyURL: String ;
    CompanyName: String ;
    Address: String;
    Country: String ;
    State: String ;
    City: String;
    PinCode: Number;
    CountryCode: Number;
    CityCode: Number;
    ContactPerson: String ;
    Designation: String ;
    Department: String ;
    Mobile1: String ;
    Mobile2: String ;
    LandLine1: String ;
    LandLine2: String ;
    EmailID: String ;
    Industry: String ;
    SubIndustry: String ;
    EmployeeCount: String;
    Turnover:String;
    PageTitle:String;
    MetaTag:String;
    URL:String;
    DataSource:String;
    SearchKeywords:String[] ;
    SourcingDate:Date;
    LastUpdateDate:Date;
    YearofEstablishment:String;
    VendorName:String;
    CreateBy: String ;
    CreatedDate: Date;
    IsActive: Boolean;  
}

export interface IResponce {
    success:boolean;
    message:String;
    result:String[] ;
}

export interface IContactus {
    Name: String;
    Email:String;
    Subject:String;
    ContactNumber: String ;
    Messsage: String ;
    created_at: Date;
}




export interface IUser {
    username: string,
    password: string,
    displayName: String,
    providerId: String,
    provider: String,
    gender: String,
    photo: String,
    email: String,
    phonenumber: String,
    providerData: {};
    created_at: {}
}

export interface marker {
	name?:string;  
    lat:number;  
    lng:number;
	label?: string;
	draggable?: boolean;
}


export interface IEnquiry { 
    _id:String;
    Name: String;
    Messsage:String;
    ContactNumber:String;
    EmailID:String;
    CompanyURL:String;
    SearchKeyword:String;
    CreateBy:String;
    CreatedDate:Date;    
    IsActive:Boolean;
}

export interface ICategory {
    CategoryId:String;
    SubCategories:String[] ;
    ParentCategoryId:String;
    created_date:Date;
}

export interface Pagination {
    CurrentPage : number;
    ItemsPerPage : number;
    TotalItems : number;
    TotalPages: number;
}

export class PaginatedResult<T> {
    result :  T;
    pagination : Pagination;
}

export interface Predicate<T> {
    (item: T): boolean
}