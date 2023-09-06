import {GetServerSidePropsContext} from "next";

/**
Usage:

```ts
import { getHostServerSideProps } from "@/components/getHostServerSideProps";
export const getServerSideProps = getHostServerSideProps
```
 */
export const getHostServerSideProps=(context:GetServerSidePropsContext)=> {
    const { req, res } = context;
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=1, stale-while-revalidate=59'
    );
  
    return {
      props: { host: req.headers.host } satisfies ServerSideProps
    };
  }

  export type ServerSideProps={host:string|undefined};