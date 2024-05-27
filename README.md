Next.js build error
===

trying to build a Next.js project, but getting the following error:

```
> testnextjs@0.1.0 build
> next build

  ▲ Next.js 14.2.3

   Creating an optimized production build ...
Failed to compile.

./server/auth.ts + 135 modules
Cannot get final name for export 'default' of ./node_modules/jose/dist/node/esm/runtime/random.js


> Build failed because of webpack errors
```

---

## What I tried and it doesn't cause a build error

* call the `handleClick()` from a server component
* don't use or import `auth` in `helper.ts`
* import and use `auth` in `page.tsx`
* use `auth` in `withoutAuth` function

It looks like the error is a combination of following
1. having a shared file that use a node.js native model in via transitive dependencies
2. a server component uses an exported function from the shared file but that function is not using any node.js native module.
3. the server component is used from a client component
4. the page uses the client component
5. Looks like, it's tree-shaken but the native module is not available to that page.
