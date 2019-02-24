# Typescript Cheatsheet

#### This repository is by no means a recommended way of doing things in Typescript, it is merely a place where I keep track of typescript tricks as I learn them

### Types

- [create a Type with a single known property and allow others to be anything](cheats/single-known-prop-in-object.ts)
  - for when you want something like:

```typescript
 { id: string, ...rest?: any }
```

## Misc

### Merging and Extending

- [extend an interface and partially merge one if its inner properties](cheats/partial-merge.ts)
