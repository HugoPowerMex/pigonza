/**
 * Prevents Angular change detection from
 * running with certain Web Component callbacks
 *
 * const app;
 *app.use((req, res, next) => {
res.header('Access-Control-Allow-Origin', '*');
         res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
         res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
         res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
      
         next();
     });
        
 * 
 * 
 * 
 * 
 */
(window as any).__Zone_disable_customElements = true;
