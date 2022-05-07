# sfmc-new-ui

## Project setup
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

## Code Resource
Type: Any
Content:
```
<script runat="server">
Platform.Response.RemoveResponseHeader("Content-Type");
Platform.Response.SetResponseHeader("Content-Type","text/html; charset=UTF-8");
</script>
%%[ set @content = HTTPGet('https://google.com') ]%%
%%=TreatAsContent(@content)=%%
```
