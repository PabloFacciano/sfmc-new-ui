# sfmc-new-ui

New UI for SFMC using a Code Resource.

## Prod
### Code Resource
Type: JS

Content:
```ampscript
<script runat="server">
Platform.Response.RemoveResponseHeader("Content-Type");
Platform.Response.SetResponseHeader("Content-Type","text/html; charset=UTF-8");
</script>
%%[ set @content = HTTPGet('https://raw.githubusercontent.com/PabloFacciano/sfmc-new-ui/main/app/ampscript/index.ampscript') ]%%
%%=TreatAsContent(@content)=%%
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