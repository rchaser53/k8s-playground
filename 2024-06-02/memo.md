# /etc/hosts
test-20240602-y.com localhost


ClusterIP

k apply -f 
k port-forward svc/nginx-service 30080:30080


helm upgrade \
  cert-manager jetstack/cert-manager \
  --namespace cert-manager \
  --create-namespace \
  --version v1.14.5