### create Git & Heroku Application

1. Git Init

        $ git init

        $ git add .

        $ git commit -m 'init'

        $ heroku login

        $ heroku create

2. Connect to heroku git

    2.1 Remote add

        $ git remote add heroku https://xxx.xxx.xxx.git

    2.2 (Alternatively) As rename for heroku-project-name

        $ heroku git:remote -a heroku-project-name

3. Deploy code to heroku

        $ git push heroku master

4. See Heroku logs

        $ heroku logs

5. Open Application

        $ heroku open

### Related Services

1. Payment (https://stripe.com/)

2. Email service (https://app.sendgrid.com/)