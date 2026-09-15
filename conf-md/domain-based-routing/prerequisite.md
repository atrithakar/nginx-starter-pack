For this you have two choices:

1. Either add the following entries to `/etc/hosts`
```
127.0.0.1 app1.com
127.0.0.1 app2.com
127.0.0.1 app3.com
127.0.0.1 app4.com
```

2. Or test without touching browser with following command
```
curl -H "Host: app1.com" http://localhost:8000 //change to app2.com, etc. to see the effect
```