import type { ImageMetadata, z } from 'astro/zod';
import MetaDefaultImage from '@/assets/images/meta-default.jpg';
import avatar from '@/assets/images/avatar.jpg';
import { seoSchema } from '@/content.config';
import astroConfig from 'astro.config.mjs';

type Avatar = string | ImageMetadata;
type Image = string | ImageMetadata;

export type AuthorInfo = {
  name: string;
  avatar: Avatar;
  headline: string;
  username?: string;
  location?: string;
  pronouns?: string;
};

export type Seo = z.infer<typeof seoSchema> & {image?: Image};

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
    type: 'website' as const,
    image: MetaDefaultImage,
    twitter: {
      creator: '@nikolaibockholt'
    },
    robots: 'noindex, nofollow',
  }
};