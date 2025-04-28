import type { z } from 'astro/zod';
import MetaDefaultImage from '@/assets/images/meta-default.jpg';
import avatar from '@/assets/images/avatar.jpg';
import type { seoSchemaWithoutImage } from '@/content.config';
import astroConfig from 'astro.config.mjs';

export type AuthorInfo = {
  name: string;
  avatar: any;
  headline: string;
  username?: string;
  location?: string;
  pronouns?: string;
}

export type Seo = z.infer<typeof seoSchemaWithoutImage> & {
  image?: any;
}

type DefaultConfigurationType = {
  baseUrl: string,
  author: AuthorInfo;
  seo: Seo;
}

export const DEFAULT_CONFIGURATION: DefaultConfigurationType = {
  baseUrl: astroConfig.site || 'https://nikolaibockholt.de',
  author: {
    avatar,
    name: 'Nikolai Bockholt',
    headline: 'Chief Digital Officer at GoMedicus Group',
    username: 'nikolaibockholt',
    location: 'Hamburg',
    pronouns: 'He/Him',
  },
  seo: {
    title: 'Nikolai Bockholt — Chief Digital Officer at GoMedicus Group',
    description: 'Nikolai Bockholt is the Chief Digital and Innovation officer of the GoMedicus Group. He is shaping the future of german healthcare with the smart use of technology and innovation.',
    type: 'website',
    image: MetaDefaultImage,
    twitter: {
      creator: '@nikolaibockholt'
    },
    robots: 'noindex, nofollow',
  }
};