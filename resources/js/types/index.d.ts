import { Config } from "ziggy-js";

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    NIS?: string;
    graduation_year?: string;
    major_id?: string;
    status_id?: string;
    company?: string;
    company_industry_id?: string;
    position?: string;
    address?: string;
    phone?: string;
    latest_degree?: string;
    university?: string;
    faculty?: string;
    photo?: string;
    document?: string;
    gender?: string;
    is_alumni?: boolean;
    major?: {
        id: string;
        name: string;
    };
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
};

export type Article = {
    id: string;
    title: string;
    content: string;
    category_id: string;
    thumbnail: string;
    created_at: Date;
    updated_at: Date;
    category?: Category;
};

export type Category = {
    id: string;
    name: string;
};

export type JobType = {
    id: string;
    title: string;
    description: string;
    created_at: Date;
    updated_at: Date;
    company: string;
    deadline: Date;
    location: string;
    thumbnail: string;
    job_type: string;
    company_industry_id: string;
    company_industry: {
        id: string;
        name: string;
    };
};

export type ApplicantType = {
    id: string;
    job_id: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    occupation?: JobType;
    user?: User;
};

export type TestimonialType = {
    id: string;
    name: string;
    quote: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    company_logo: string;
    user?: User;
};
