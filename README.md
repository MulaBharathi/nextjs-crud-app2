
## 🚀 Deployment Instructions

###  Local Setup

```
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
npm run dev
```


### AWS EC2 Manual Deployment
Launch Ubuntu 22.04 EC2 instance

Install Node.js, Nginx, PM2

SSH and clone the repo

Add .env.local with your MongoDB URI

Run:

```
npm install
npm run build
pm2 start npm --name "nextjs-app" -- start
```

### CI/CD with GitHub Actions

Workflow: .github/workflows/deploy.yml

Trigger: On every push to main branch

Action:

SSH into EC2

Pull latest code

Reinstall, rebuild, restart app using PM2