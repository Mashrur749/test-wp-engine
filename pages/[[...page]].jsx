import React from 'react';
import {
  useUriInfo,
  getNextStaticPaths,
  getNextStaticProps,
} from '@wpengine/headless/next';
import { GetStaticPropsContext } from 'next';
import Posts from '../components/Posts';
import Post from '../components/Post';

export default function Page() {
    
  const pageInfo = useUriInfo();
  if (!pageInfo) {
    return <></>;
  }

    if (pageInfo.isPostsPage) {
    return <Posts />;
  }

  return <Post />;
}

export function getStaticPaths() {
  return getNextStaticPaths();
}

export function getStaticProps(context) {
  return getNextStaticProps(context);
}