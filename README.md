# sfmc-new-ui

New UI for SFMC using a Code Resource.

## Prod
### Code Resource
Type: JS

Content:
```javascript
%%=TreatAsContent(HTTPGet('https://raw.githubusercontent.com/PabloFacciano/sfmc-new-ui/main/app/ampscript/index.ampscript'))=%%
```

## Dev

### Local project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```