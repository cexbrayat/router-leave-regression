# Repro for router leave guard regression in beta.1

## Working state with alpha.14

```
yarn
yarn dev
```

Click on the link, the guard triggers a confirm, cancel the navigation, we stay on the component.

## Issue repro with beta.1

Bump to `beta.1` in `package.json`

```
yarn
yarn dev
```

Click on the link, the guard triggers a confirm, cancel the navigation, we stay on the component, but the confirm is triggered right away.
