
```sh
# use ab to stress test
ab -n 100000 -c 100 http://127.0.0.1:30001/200

# with fluent-bit container
haser53@TakayukinoMacBook-Pro-2 2024-06-30 % kubectl top pod -l app=fluent-bit
NAME                                     CPU(cores)   MEMORY(bytes)   
fluent-bit-deployment-76d79f7d5f-jlmvk   163m         110Mi     

# without fluent-bit container
rchaser53@TakayukinoMacBook-Pro-2 2024-06-30 % kubectl top pod -l app=fluent-bit
NAME                                     CPU(cores)   MEMORY(bytes)   
fluent-bit-deployment-6d74996958-5595g   249m         72Mi  
```sh