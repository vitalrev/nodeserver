# nodeserver
Ethereum projects

After clone/download from this code, install pakages:  

    npm install

Run testrpc in other terminal tab/window:  
```testrpc```  
  
Deploy smart contract into testrpc:  
```truffle migrate --reset```  
  
Build WebApp:  
```truffle build```
  
Run Node.js server:  
```nodejs build/node/server.js```  
  
Run vent listener  
```nodejs build/node/listen.js```    
  
Interact with server:  
```curl -X PATCH http://localhost:8080/sendOneTo/accAddress```  
```curl -X PATCH http://localhost:8080/balance/accAddress```