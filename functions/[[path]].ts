import { createPagesFunctionHandler } from '@remix-run/cloudflare-pages';

// @ts-ignore - the server build file is generated by `remix vite:build`
import * as build from '../build/server';

export const onRequest = createPagesFunctionHandler({ build: build as any });
