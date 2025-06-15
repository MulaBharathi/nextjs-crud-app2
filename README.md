🔧 Steps:
Create Next.js App:
```
npx create-next-app@latest nextjs-crud-app
cd nextjs-crud-app
```

Install Dependencies:
```
npm install mongoose
```



## 🚀 Deployment Instructions

###  Local Setup

```
git clone https://github.com/MulaBharathi/nextjs-crud-app2
cd nextjs-crud-app2
npm install
npm run dev
```


### AWS EC2 Manual Deployment
###  AWS EC2 Setup
Launch EC2 Instance:
AMI: Ubuntu 22.04

Type: t2.micro (Free Tier)

Ports:
SSH: 22
HTTP: 80
HTTPS: 443 (Optional)

SSH into EC2:

```
ssh -i "your-key.pem" ubuntu@<public-ip>
```

🛠️ Install Dependencies:
```
sudo apt update && sudo apt install -y nodejs npm nginx
sudo npm install -g pm2
node -v
```

Add .env.local with your MongoDB URI


🚀 Deploy Next.js:
```
git clone https://github.com/MulaBharathi/nextjs-crud-app2
cd nextjs-crud-app2
npm install
npm run build
pm2 start npm --name "nextjs-app" -- start
pm2 startup
pm2 save
```

🌐 Set Up Nginx:
```
sudo nano /etc/nginx/sites-available/default
```

```
sudo systemctl restart nginx
```

✅ 4. CI/CD with GitHub Actions
🔧 Create Workflow:
File: .github/workflows/deploy.yml





Run:

```
npm install
npm run build
pm2 start npm --name "nextjs-app" -- start
```
